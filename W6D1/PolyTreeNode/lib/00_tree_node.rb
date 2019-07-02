class PolyTreeNode
    
    attr_reader :parent, :children, :value
    
    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end
    def parent=(node_parent)
        if self.parent
            self.parent.children.delete(self)
        end
        unless node_parent.nil?
            # self.parent.remove_child(self)
            node_parent.children << self
        end
        @parent = node_parent
    end
    def children=(node_child)
        unless @children.include?(self)
            @children << self
        end
    end
    def add_child(node_child)
        node_child.parent = self
    end
    def remove_child(node_child)
        if @children.include?(node_child)
            node_child.parent = nil
            # @children.each_with_index do |child, i|
            #     if child == node_child
            #         @children.delete(node_child)
            #     end
            # end
        else
            raise "Node is not a child."
        end
    end

    def dfs(target_value) #target = 5
        return self if target_value == self.value
        childs = self.children
        childs.each do |child|
            result = child.dfs(target_value)
            if !result.nil? 
                return result
            end
        end
        nil
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
end