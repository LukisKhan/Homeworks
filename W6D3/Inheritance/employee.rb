# require_relative "manager.rb"
class Employee

    attr_reader :name,:title,:salary,:boss
    def initialize(name,title,salary,boss)
        @name,@title,@salary,@boss = name,title,salary,boss

        unless boss == nil
            boss.employees << self
            # p name
        end

    end

    def bonus(multiplier)
        bonus = salary * multiplier
    end
    
end

