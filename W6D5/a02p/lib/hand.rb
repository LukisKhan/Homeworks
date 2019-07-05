class Hand
  # This is a *factory method* that creates and returns a `Hand`
  # object.
  def self.deal_from(deck)
    Hand.new(deck.take(2))
  end

  attr_accessor :cards

  def initialize(cards)
    @cards = cards
  end

  def points
    values_hash = Card::VALUE_STRINGS
    val = 0
    ace = false
    cards.each do |card|
      if card.value != :ace 
        val += values_hash[card.value].to_i
      else
        ace = true
      end
    end
    if ace && val <= 10
      val += 11
    elsif ace
      val += 1
    end
    val
  end

  def busted?
    points > 21
  end

  def hit(deck)
    unless busted?
      @cards += deck.take(1)
    else
      raise "already busted"
    end
  end

  def beats?(other_hand)
    unless self.busted? || other_hand.busted?
      points > other_hand.points
    else
      other_hand.busted?
    end
  end

  def return_cards(deck)
    deck.return(@cards)
    @cards = []
  end

  def to_s
    @cards.join(",") + " (#{points})"
  end
end
