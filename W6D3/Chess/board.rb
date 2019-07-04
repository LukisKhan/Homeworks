# require_relative ''
require_relative 'piece.rb'
require_relative 'nullpiece.rb'
class Board

    def initialize()
        @grid = Array.new(8) { Array.new(8) }
#         0   1   2   3   4   5   6    7   
# 0       []  []  []  []  []  []  []  []   
# 1       []  []  []  []  []  []  []  []   
# 2       []  []  []  []  []  []  []  []   
# 3       []  []  []  []  []  []  []  []   
# 4       []  []  []  []  []  []  []  []   
# 5       []  []  []  []  []  []  []  []   
# 6       []  []  []  []  []  []  []  []   
# 7       []  []  []  []  []  []  []  []
        @grid.each_with_index do |row,idx|
            if [0,1,6,7].include?(idx)
                row.each_with_index do |v,jdx|
                    @grid[idx][jdx] = Piece.new("name")
                end
            else
                row.each_with_index  do |v,jdx| 
                    @grid[idx][jdx] = NullPiece.new("empty")
                end
            end
        end
                

    end

    def add_piece(piece, pos)

    end

    

end