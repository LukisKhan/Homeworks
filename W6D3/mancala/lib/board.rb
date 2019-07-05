class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @n1 = name1
    @n2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end
  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup,idx|
      unless idx == 6 || idx == 13
        4.times do 
          cup << :stone
        end
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(0,12)
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    pellets = @cups[start_pos]
    @cups[start_pos] = []
    cup_idx = start_pos
    until pellets.empty?
      cup_idx += 1
      cup_idx = 0 if cup_idx > 13
      # places stones in the correct current player's cups
      if cup_idx == 6
        @cups[6] << pellets.pop if current_player_name == @n1
      elsif cup_idx == 13
        @cups[13] << pellets.pop if current_player_name == @n2
      else
        @cups[cup_idx] << pellets.pop
      end
    end
    render
    next_turn(cup_idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups.take(6).all? { |cup| cup.empty?} || @cups.drop(6).all? { |cup| cup.empty? }
  end

  def winner
    p1_count = @cups[6].count
    p2_count = @cups[13].count
    if p1_count == p2_count
      :draw
    else
      p1_count > p2_count ? @n1 : @n2
    end
  end
end
