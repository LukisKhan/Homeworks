require_relative 'player'

class Dealer < Player
  attr_reader :bets

  def initialize
    super("dealer", 0)

    @bets = Hash.new(0)
  end

  def place_bet(dealer, amt)
    raise "Dealer doesn't bet"
  end

  def play_hand(deck)
    while @hand.points < 17
      @hand.hit(deck)
    end
  end

  def take_bet(player, amt)
    @bets[player] = amt
  end

  def pay_bets
    @bets.each do |p, amt|
      if p.hand.beats?(self.hand)
        p.pay_winnings(amt * 2)
      end

    end
  end
end
