
class KnightPathFinder

    def initialize(starting_position)
        @root_node = PolyTreeNode.new(starting_position)
        self.build_move_tree
        @considered_postions = [starting_position]
    end

    def self.valid_moves?(pos)      # determine valid move
        return false if @considered_postions.include?(pos)

    end
    def new_move_positions(pos)     #build 1 node
        poss_moves = [] #8 moves
        row, col = pos
        poss_moves.push(
            [row - 1, col -2]
            [row - 1, col +2]
            [row + 1, col -2]
            [row + 1, col +2]
            [row + 2, col -1]
            [row + 2, col +1]
            [row - 2, col -1]
            [row - 2, col +1]
        )
        valid_positions = poss_moves.select do |position|
            position[0].between?(0,8) && position[1].between?(0,8)
        end
        good_moves = valid_positions.select { |nexts_pos| KnightPathFinder.valid_moves?(next_pos) }
        @considered_postions.concat(good_moves)
    end    
    
    def build_move_tree         #builds a tree
        

    end 

    def bfs(target_value)
        queue = [self]
        until queue.empty?
            first_node = queue.shift
            if first_node.value == target_value
                return first_node
            else
                childs = first_node.children
                queue += childs
            end
        end
        nil
    end
    
    def find_path           #find best path down tree
        @considered_postions.concat(good_moves)

    end
end