
class Array
    Fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish',
     'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
    def longest_fish_n_squared
        longest = 0
        self.size.times do |i|
            self.size.times do |j|
                longest = self[j] if self[j].size > self[i].size
            end
        end
        longest
    end
    p Fish_arr.longest_fish_n_squared

    def longest_fish_nlogn
        longest = 0
        self.size.times do |i|
            (i...self.size).each do |j|
                longest = self[j] if self[j].size > self[i].size
            end
        end
        longest
    end
     p Fish_arr.longest_fish_nlogn

    def longest_fish_n
        longest = 0
        self.size.times do |i|
            longest = self[i] if self[i].size > longest.size
        end
        longest
    end
     p Fish_arr.longest_fish_n
end

class Octopus
    Tiles_array = ["up", "right-up", "right", 
                "right-down", "down", "left-down",
                "left",  "left-up" ]
    Fast_tile_array = { 
                "up" => 0, "right-up" => 1, "right" => 2, 
                "right-down" => 3, "down"=> 4, "left-down"=> 5,
                "left"=> 6,  "left-up" => 7
    }
    def initialize
    end

    def slow_dance(str)
        Octopus::Tiles_array.each_with_index {|dir,idx| return idx if str == dir}
    end

    def fast_dance(str)
        Octopus::Fast_tile_array[str]
    end
end

octo = Octopus.new           #BigO(1)
p octo.slow_dance("left-up") # == 7
p octo.fast_dance("left-up") # == 7
