require 'set'
class GraphNode
    attr_accessor :value, :neighbors
    def initialize(value)
        self.value = value
        self.neighbors = []
    end

    # def []=(neighbors_arr)
    #     self.neighbors = neighbors_arr
    # end

    def add_neighbor(node)
        self.neighbors << node
    end

    def bfs(starting_node, target_value)
        queue = [starting_node]
        visited = Set.new()   
        
        until queue.empty?
            first_probe = queue.shift
            unless visited.include?(first_probe)
                if first_probe.value == target_value
                    return first_probe
                else
                    visited.add(first_probe)
                    queue += first_probe.neighbors
                end
            end
        end
    end
    # def inspect
    #     @value = value
    # end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p a.bfs(a,"e")