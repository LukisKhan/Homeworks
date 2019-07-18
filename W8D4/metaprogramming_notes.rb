class Pet
    @@pet_class_var = "Pet"
    def self.pet_class_var
        @@pet_class_var
    end
    def initialize(name)
        @name = name
    end

end
class Dog < Pet
    @@dog_class_var = 'Dog'
    def self.dog_class_var
        @@dog_class_var
    end
    def self.dog_count
        @dog_count || 0
    end
    def self.record_dog_birth
        @dog_count ||= 0                   #instance variable of class Dog
        @dog_count += 1
        #self                #class Dog
    end

    # def self.learn_paw
    #     puts self               #self here is the Dog class
    #     define_method(:paw) do              #needs to be implicitly called on self
    #         puts self           #self here is the dog instance
    #         puts "#{@name} giving paw"
    #     end
    # end

    def self.learn_tricks(*tricks)
        tricks.each do |trick|
            define_method(trick) do |num_times = 1|
                num_times.times do 
                    puts "#{ @name } is #{trick} ing"
                end
                nil
            end
        end
    end

    # define_method(name) do |arg = 1|
    #     puts arg
    # end
    # def name(arg = 1)
    #     puts arg
    # end
    self.learn_tricks(:fetch)
    learn_tricks :fetch, :play_dead, :roll_over
    def initialize(name)
        super(name)
        @secret = "goat"
        Dog.record_dog_birth
        self.class.record_dog_birth
    end 
    def method_missing(method_name, *args)
        puts "sorry, #{ @name } doesn't know how to #{method_name} 
        espically #{args}" 
        puts "but lets'giv it a try"
        self.class.learn_tricks(method_name)
        # self.send(method_name, args.first)
        self.method_name(args.first)
    end
    def sleep
        put 'sleep'
    end
    def drink
        puts 'drinking'
    end
    def eat
        puts 'eating'
    end
    def juggle(thing,num)
        num.times do
            puts "juggle #{thing}"
        end
    end

    def change_secret(new_secret)
        self.instance_variable_set(:@secret, new_secret)
        self.instance_variable_get(:@secret)
    end

    private 
    def tell_secret
        puts "my secret is #{@secret}"
    end
end




# the class Dog is and instance object of the class Class
#     Dog.kind_of?(Class) == true
#     Dog.instance_of?(Class) == true
    # Dog.kind_of?(Class) == true
#     def self.class_method         
#         @variable ||= 0           #@variable is a class instance
#         @@variable_class ||= 0    #@@variable_class is a class class variable
#     end


# @@pet_class_var can be called by    Pet.pet_class_var and 
#                                     Dog.pet_class_var
# @@dog_class_var can only be used by Dog.dog_class_var


# INSTANCE VARIABLE MANIPULATION