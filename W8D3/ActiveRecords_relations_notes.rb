ACTIVE RECORDS RELATIONS
Bleater app
Seed:   1)destroy
        2) create location
        3) Create user using #loc.create!(user_column: '')
        modify user's locacions' user.location_ids = [1,2,3,4]
def self.locquacious_users
    <<-SQL
        SELECT users.*, COUNT(bleats.id) AS bleat_counts
        FROM users
        JOIN bleats ON bleats.author_id = users.id
        GROUP BY users.id
        HAVING COUNT(bleats.id) >= 2
    SQL
    User
        .joins("JOIN bleats ON bleats.author_id = user.id")
        .group('users.id')
        .having("COUNT(bleats.id) >= 2")

    User
        .select('users.*, COUNT(bleats.id) AS bleat_count')
        .joins(:authored_bleats)
        .group(:id)
        .having("COUNT(bleats.id) >= 2")
end

def self.quiet_users
    <<-SQL
        SELECT  user.*
        FROM    users
        LEFT OUTER JOIN    bleats ON bleats.author_id = users.id
        GROUP BY users.id
        HAVING COUNT(bleats.id) = 0
        #WHERE bleats.author_id IS NULL
    SQL
    User
        .left_outer_joins(:authored_bleats)
        .group(:id)
        .having('COUNT(bleats.id) = 0')
    end

def self.quiet_locations
    <<-SQL
        SELECT locations.*
        FROM   locations
        LEFT OUTER JOIN users ON locations.id = users.location_id
        LEFT OUTER JOIN bleats ON bleats.author.id = users.id
        GROUP BY locations.id
        HAVING COUNT(bleats.id) = 0
    SQL

    Locations
        .left_outer_joins(users: :authored_bleats)
        .group(:id)
        .having('COUNT(bleats.id) = 0')

    Locations
        .left_outer_joins(users: {authored_bleats: :comments})
        .group(:id)
        .having('COUNT(bleats.id) = 0')
end

def self.print_all_bleats_by_location
    Location.all.each do |location|
        location.users.each do |user|
            user.authored_bleats.each do |bleat|
                puts " #{user.email} #{(location.name)} : #{bleats.body}"
            end
        end
    end

    Location.includes(users: :authored_bleats).each do |location|
         location.users.each do |user|
            user.authored_bleats.each do |bleat|
                puts " #{user.email} #{(location.name)} : #{bleats.body}"
            end
        end
    end
   

end