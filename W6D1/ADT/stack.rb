class Stack
    def initialize
        @stack_arr = []
    end

    def push(item)
        @stack_arr.push(item)
    end

    def pop
        @stack_arr.pop 
    end

    def peek
        @stack_arr.last
    end

    private

    attr_reader :stack_arr

end