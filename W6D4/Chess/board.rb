# require_relative ''
require './pieces/piece'
require './pieces/nullpiece'
require 'byebug'

class Board
    attr_reader :grid
    def initialize()
        @grid = Array.new(8) { Array.new(8, NullPiece.instance) }
#         0   1   2   3   4   5   6    7   
# 0       []  []  []  []  []  []  []  []   
# 1       []  []  []  []  []  []  []  []   
# 2       []  []  []  []  []  []  []  []   
# 3       []  []  []  []  []  []  []  []   
# 4       []  []  []  []  []  []  []  []   
# 5       []  []  []  []  []  []  []  []   
# 6       []  []  []  []  []  []  []  []   
# 7       []  []  []  []  []  []  []  []
        # @grid.each_with_index do |row,idx|
        #     if [0,1,6,7].include?(idx)
        #         row.each_with_index do |v,jdx|
        #             @grid[idx][jdx] = Piece.new("name")
        #         end
        #     else
        #         row.each_with_index  do |v,jdx| 
        #             @grid[idx][jdx] = NullPiece.new("empty")
        #         end
        #     end
        # end
                

    end

    def add_piece(piece, pos)

    end

    
    def move_piece(start_pos, end_pos)
        sx, sy = start_pos
        ex, ey = end_pos

        current_piece = self[start_pos]
        raise "there is no piece there" if current_piece == NullPiece.instance
        raise unless current_piece.valid_moves.include?(end_pos)
        self[start_pos] = NullPiece.instance
        self[end_pos] = current_piece

    end

    def [](pos)
        sx, sy = pos
        @grid[sx][sy]
    end

    def []=(pos,value)
        sx, sy = pos
        @grid[sx][sy] = value 
    end

    


end

board = Board.new
debugger
p board.grid