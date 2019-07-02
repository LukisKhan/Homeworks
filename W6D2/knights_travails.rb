
require_relative "poly_tree_node"

class KnightPathFinder
    attr_accessor :root_node, :considered_positions
    attr_reader :starting_position

    def initialize(starting_position)
        @considered_positions = [starting_position]
        @starting_position = starting_position
        build_move_tree
    end

    def new_move_positions(pos)     
        poss_moves = []
        row, col = pos
        poss_moves.push(
            [row - 1, col -2],
            [row - 1, col +2],
            [row + 1, col -2],
            [row + 1, col +2],
            [row + 2, col -1],
            [row + 2, col +1],
            [row - 2, col -1],
            [row - 2, col +1]
        )
        valid_positions = poss_moves.select do |position|
            position[0].between?(0,7) && position[1].between?(0,7)
        end
        good_moves = valid_positions.reject { |next_pos| @considered_positions.include?(next_pos) }
        good_moves.each { |mov| @considered_positions << mov }
        good_moves
    end    
    
    def build_move_tree         #builds a tree
        self.root_node = PolyTreeNode.new(starting_position)
        nodes = [root_node]
        until nodes.empty?
            current_node = nodes.shift
            current_position = current_node.value
            new_move_positions(current_position).each do |next_move| 
                child_node = PolyTreeNode.new(next_move)
                current_node.add_child(child_node)
                nodes << child_node
            end
        end
    end 

    def find_path(end_pos)              #DFS
        end_node = root_node.dfs(end_pos)
        end_node ? trace_path_back(end_node) : nil
    end


    # def find_path(end_pos)            #BFS
    #     nodes = [@root_node]
    #     until nodes.empty?
    #         first_node = nodes.shift
    #         if first_node.value == end_pos
    #             end_node = first_node
    #         else
    #             childs = first_node.children
    #             nodes += childs
    #         end
    #     end
    #     end_node ? trace_path_back(end_node) : nil
    # end

    def trace_path_back(end_node)
        path_arr = [end_node]
        current_node = end_node
        until current_node == root_node
            every_parent_node = current_node.parent
            current_node = every_parent_node
            path_arr << every_parent_node
        end
        path_arr.reverse
    end
end


knight_2 = KnightPathFinder.new([2,1])


p knight_2.find_path([7,7])

