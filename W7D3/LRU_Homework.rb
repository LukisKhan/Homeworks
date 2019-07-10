
class LRUCache
    def initialize(size)
        @cache_arr = []
        @size = size
    end

    def count
      # returns number of elements currently in cache
      @cache_arr.count
    end

    def add(el)
      # adds element to cache according to LRU principle
      @cache_arr.push(el) unless @cache_arr.include?(el)
      if @cache_arr.include?(el)
        @cache_arr.delete(el)
        @cache_arr.push(el)
      end
      @cache_arr.shift if count > @size
    end

    def show
      # shows the items in the cache, with the LRU item first
      @cache_arr
    end

    private
    # helper methods go here!

end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})


pp johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]