require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    ttt = TicTacToeNode.new(game.board, mark)
    nodes = ttt.children
    node = nodes.find { |child| child.winning_node?(mark) }
    return node.prev_move_pos if node
    node = nodes.find { |child| !child.losing_node?(mark) }
    return node.prev_move_pos if node
    raise ["How come I can't win?", "How come you didn't make me smarter?", "Inconceivable!", "Why did you cheat?"].sample
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
