require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "ramseys") }
  subject(:dessert) { Dessert.new("cookie", 50, chef)}
  describe "#initialize" do
    
    it "sets a type" do
      expect(dessert.type).to eq("cookie")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(50)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients.length).to eq(0)
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cookie", "50", "Ramseys") }.to raise_error(ArgumentError)
    end
    
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients).to_not include("sprinkles")
      dessert.add_ingredient("sprinkles")
      expect(dessert.ingredients).to include("sprinkles")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      dessert.add_ingredient("a")
      dessert.add_ingredient("b")
      dessert.add_ingredient("c")
      dessert.mix!
      expect(dessert.ingredients).to_not eq(["a","b","c"])
    end

  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert.eat(10)
      expect(dessert.quantity).to eq(40)
    end
    it "raises an error if the amount is greater than the quantity" do
      expect{dessert.eat(10000)}.to raise_error()
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do 
      allow(chef).to receive(:titleize).and_return("Chef ramseys the Great Baker")
      expect(dessert.serve).to include("ramseys")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(dessert.make_more).to recieve(:bake).with(self)
    end
  end
end
