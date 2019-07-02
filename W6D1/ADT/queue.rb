class Queue
    def initialize
        @queue_arr = []
    end

    def enqueue(item)
        @queue_arr.push
    end

    def dequeue(item)
        @queue_arr.shift
    end

    def peek
        queue_arr.first
    end

    private

    attr_reader :queue_arr
end