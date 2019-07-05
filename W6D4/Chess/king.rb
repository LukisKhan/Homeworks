require_relative 'piece.rb'

class King  

    include Stepable
    
    def initialize

    end

    def moves     #return array all moves, subclasses's methods
        
    
    end

    def move_diffs
         pos_moves =  [ #up
         [-1,-1],[-1,0],[-1,1],
         [0,-1],      [0,1],
         [1,-1],[1,0],[1,1]
        ]
        row,collum = [4,4]#self.pos
        pos_moves.map do |pos|
            [(pos.first + row),(pos.last + collum)]
        end


    end

    def val
    end

end
    