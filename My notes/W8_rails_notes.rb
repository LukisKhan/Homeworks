:test
:development
:production
MIGRATION
1) Creating a new rails project
    rails new <name> -d=postgresql
2) Create new database
    bundle exec rails db:create
    bundle exec rails db:drop
3) Access the database   
    psql <name>
4) Creating a table
    bundle exec rails generate migration <createName>
5) Specify the schema in the table
    t.string :name, null: false
    t.datetime :created_at, null: false
    t.timestamps
6) Run the migration, generates the actual table
    bundle exec rails db:migrate
7) RUN the current schema
    bundle exec rails db:schema:load
8) changing an old table
    bundle exec rails generate migration add_column_to_bleater
    def change
        add_column :bleats, :author_id, :integer, null: false
    end
bundle exec rails db:migrate:status
b e r g migration AddDogIdToToys
    add_column(:toys, :dog_id, :integer, {null:false })
    add_column :toys, :dog_id, :integer, null:false 
    add_column :toys, :color, :string, null:false
ber db:migrate
ber db:rollback

MODELS
0) create a new .rb file in the model dir < ApplicationRecord <ActiveRecord::Base
1) bundle exec rails console (jumps into pry)
    bundle exec rails db console
    use quit to exit
    \q
2) add to Gemfile if you see irb in pry-rails
    gem 'pry-rails'
    bundle install
3) Dog (the model)
    dog = Dog.new 
    Dog.column_name
    dog.name = "name"
    dog.save
    Dog.first
    Dog.find(1)
    Dog.find_by(name: "name")
    Dog.all (returns an array of ActiveRecord objects)
    Dog.create( {name: "Snoopy"})
    Dog.last.destroy
4) adding error gem to development stage
    gem 'annotate'
    bundle install
5) 'catching the error'
    validates :name, presence: true    #in dog.rb
    bundle exec rails console
    dog.errors.full_messages
6) dog.valid?
    dog.save
7) validate :check_name_length
    def check_name_length
        unless self.name.length >= 4
            errors[:name] << "Name is too short"
        end
    end
8) reload!
    dog = Dog.new
    dog.name = 'a'
    dog.save!
    dog.errors.full_messages

ASSOCIATIONS: the one with the foreign_key variable has belongs_to
1) 
dog.rb 
    def toys
        Toy.where( dog_id: self.id)
    end
#is the same as
    has_many (:toys, {
        primary_key: :id        #dog's id
        foreign_key: :dog_id
        class_name: Toy
    })

toy.rb

    def dog
        Dog.find(dog_id)
    end
#is the same as
House #find all the toys in the house
    belongs_to(:dog, {
        primary_key: :id        #dog's id
        foreign_key: :dog_id
        class_name: Dog
    })
Toy #find the house the toy belongs to
    has_one(:house, {
        through: dog
        source: :house
    })


has_many, through
has_many(:toys, {
    through: :dogs,     #method names
    source: :toys       #method names
})

    ############
Bleats
    belongs_to :author,
        class_name: "User",
        primary_key: :id,
        foreign_key: :author_id
        #optional: true
    has_one :location
        through: :author
        source: :location

User
    has_many :authored_bleats,
        class_name: "Bleat",
        primary_key: :id,
        foreign_key: :author_id

    belongs_to :location,
        class_name: "Location",
        primary_key: :id
        foreign_key: :location_id

Location
    has_many "Users",
        primary_key: :id,
        foreign_key: :location_id

    has_many :bleats,
        through: users,
        source: :authored_bleats
    
    has_many :comments,
        through: :bleats,
        source: :comments

Bleat.create!(body: 'asdf', author_id: User.first.id)
t = User.first
t.authored_bleats #sqll query Select * from * where author.id = id
t.authored_bleats.first



VALIDATIONS
    validate :ensure_bleats_arent_long
    def ensure_bleats_arent_long
        self
        if self.body.length > 150
            self.errors[:body] << 'is too long, max is 150 char!'
        end
    end
t = User.first
b = t.authored_bleats.new
b.save!
b.errors
b.valid?
validates :body, length: { maximum: 150 }
validates :body, presence: true

Location.destroy_all
arg = Location.create!(name: 'Argentina')
tommy = User.create(email: 'tommy@app.io', location_id: arg.id)
tommy.authored_bleats.create!(body: 'Hellow, world')
Location.find_by(name: 'NY')
tommy.email = "new"
tommy.update(email: 'tommy@tommy.com')
tommy.update! #(will raise an error if it can't update)

.bashrc
alias be='bundle exec'