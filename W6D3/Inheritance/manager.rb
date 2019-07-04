require_relative  "employee.rb"
require 'byebug'

class Manager < Employee
    attr_accessor :employees
    def initialize(name, title, salary, boss)
        # debugger
        @employees = []
        super(name, title, salary, boss)
    end

    # def []=(employee)
    #     @employees << employee
    # end

    def bonus(multiplier)
        total_salary = 0
        @employees.each do |employee| 
            total_salary += employee.salary 
            if employee.instance_of?(Manager)
                employee.employees.each{|a| total_salary += a.salary }
            end
        end
        # p 'here'
        # p total_salary
        bonus = total_salary * multiplier
    end
    
end

#Testing case
ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
# p ned.employees
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000