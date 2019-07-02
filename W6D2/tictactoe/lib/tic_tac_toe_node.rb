require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end


  def losing_node?(evaluator)
    if board.over?
      return (evaluator != board.winner) && board.won?
    end
    if self.next_mover_mark == evaluator
      self.children.all? { |child| child.losing_node?(evaluator) }
    else
      self.children.any? { |child| child.losing_node?(evaluator) }
    end
  end


  def winning_node?(evaluator)
    if board.over?
      return (evaluator == board.winner) ##  board.won?
    end
    if self.next_mover_mark == evaluator
      self.children.any? { |child| child.winning_node?(evaluator) }
    else
      self.children.all? { |child| child.winning_node?(evaluator) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    nodes = []
    (0..2).each do |i|
      (0..2).each do |j|
        pos = [i, j]
        # next unless board.empty?(pos)
        if board.empty?(pos)
          dupped_b = @board.dup
          dupped_b[pos] = self.next_mover_mark
          next_mover_mark = (self.next_mover_mark == :x ? :o : :x)
          ttt = TicTacToeNode.new(dupped_b, next_mover_mark, pos)
          nodes << ttt
        end
      end
    end
    nodes
  end

  def inspect
    @value = prev_move_pos
  end

end

