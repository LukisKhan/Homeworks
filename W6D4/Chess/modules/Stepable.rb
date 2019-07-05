module Stepable

    def moves
        pos_move = self.move_diffs
        pos_move.reject do |pos|
            !pos.empty? && pos.symbol == self.symbol
        end
        return pos_move

    end
    
    def move_diffs
        
    end


end