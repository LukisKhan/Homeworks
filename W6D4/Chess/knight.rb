require_relative 'piece.rb'

class Knight  

    include Stepable
    
    def initialize

    end

    def moves     #return array all moves, subclasses's methods

    end

    def move_diffs
        move +/- 1 +/- 2
        move +/- 2 +/- 1

    end

    def val
    end

end
    