require_relative 'piece.rb'
require 'singleton'
class NullPiece < Piece 

    include Singleton

    def initialize
        @name = "null"
    end

    def inspect
        @value = @name
    end
end