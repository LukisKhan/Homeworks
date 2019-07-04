require_relative 'piece.rb'
class NullPiece < Piece 

    def initialize(str)
        @name = str
    end

    def inspect
        @value = @name
    end
end