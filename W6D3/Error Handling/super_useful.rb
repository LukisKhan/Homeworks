# PHASE 2
require 'byebug'
def convert_to_int(str)
  begin
  Integer(str)  
  rescue ArgumentError
    # puts "error was caught"
    return nil
  end
  
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]
COFFEE = ["black","latte","decaf","coffee"]

def reaction(maybe_fruit)
 
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!" 
  elsif COFFEE.include?(maybe_fruit)
    raise CoffeeError.new("I love coffee") 
  else 
    raise StandardError 
  end 
  
  begin 
    
  rescue StandardError
    puts "i dont like this"
    # puts feed_me_a_fruit == "coffee"
  rescue CoffeeError 
    puts "i love coffee "
    feed_me_a_fruit
    retry
  end
  

end

class CoffeeError < StandardError
  puts "coffeeErr"

end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"
  maybe_fruit = gets.chomp
  reaction(maybe_fruit) 
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


