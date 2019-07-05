# require_relative ''

class Piece
    attr_reader :pos :board
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end

    def inspect
        @value = @name
    end

    def moves     #return array all moves, subclasses's methods

    end

    def valid_moves     #return valid movable possitions
        pos_moves = self.moves
        pos_moves.select do |pos|
            empty?(pos)
        end
    end

    def empty?(pos)
        board[pos] == NullPiece.instance
    end

    def pos=(val)
        @pos = val
    end

    def to_s

    end

    def symbol
     @color
    end

end