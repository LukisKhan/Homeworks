
class GraphNode
    attr_reader :value, neighbors
    def initialize(value)
        @value = value
        @neighbors = []
    end

    def []=(neighbors_arr)
        @neighbors = neighbors_arr
    end

    def bfs(starting_node, target_value)
        queue = [starting_node]
        until queue.empty?
            first_probe = queue.shift
            if first_probe.value == target_value
                return first_probe
            else
                queue += first_probe.neighbors
            end
        end
        nil
    end

end