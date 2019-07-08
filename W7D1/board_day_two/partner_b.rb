```rb
RSpec.describe Calculator do
  it "add method adds numbers" do
    calc = Calculator.new
    expect(calc.add(3, 4)).to eq(7)
  end
end
```

class ParkingLot
    def initialize
        @smax_spaces = capacity
        @parking_spots = []
        @hash_spaces = {1 => space, 10 => space10}
    end


    def empty_spaces
        @hash_spaces.select { |k , v| space.empty == true}
    end

    def available_spot?(space_x)
        @hash_spaces[space_x].empty
    end

end

class ParkingSpace

    attr_reader :empty
    def initialize(position, true)
        @position = position
        @empty = true
        @paid = paid
        @plates = nil
    end

    def park_car(plates)
        @empty = false
        @plates = plates
    end

    def un_park(plates)
        @empty = true
        @plates = nil
    end


end

class Ticketer

    def initialize(hash_spaces)
        @hash_spaces = hash_spaces
    end

    def park_car(car)
        @hash_spaces

    end

end

Cars
    @size = 1
    @plates =
    < Trailer @size = 8
    < Bus     @size = 4

class Node


    def dfs(target)
        return self if self.value == target
        children = self.children
        return nil if children.nil?
        children.each do |child|
            child.dfs(target)
        end
        nil
    end

    def dfs(target, &prc)
        raise "need target and prc" if prc == nil
        return self if prc.call(self) 

        children = self.children
        return nil if children.nil?
        children.each do |child|
            child.dfs(&prc)
        end
        nil
    end

    def b_dfs(target)
        queue = [self]
        until queue.empty?
            current = queue.pop 
            return target if current.value = target
            queue.concat(kiddies) 
        end
    end

end


