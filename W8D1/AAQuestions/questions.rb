require "sqlite3" # gem
require "singleton" # only have one instance of our database

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
    super("questions.db")
    self.type_translation = true
    self.results_as_hash = true
    end
end

class Question

    attr_accessor :id, :title, :question_body, :user_id

    def self.all
        ins = QuestionsDatabase.instance.execute('SELECT * FROM questions')
        ins.map { |data| Question.new(data) }
    end

    def self.find_by_id(id)
        ins = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                questions
            WHERE
                id = ?
        SQL
        return nil if ins.length < 1
        Question.new(ins.first)
    end

    # always return an array of hashes
    # use .first to return the first element

    def self.find_by_author_id(author_id)
        ins = QuestionsDatabase.instance.execute(<<-SQL, author_id)
        SELECT
            *
        FROM
            questions
        WHERE
            user_id = ?
        SQL
        return nil if ins.length < 1
        Question.new(ins.first)
    end


    def initialize(options)
        @id = options['id']
        @title = options['title']
        @question_body = options['question_body']
        @user_id = options['user_id']
    end
end

    # why class method instead of instance method
    # why the order not according to the table
    # why ins.first

class User

    attr_accessor :id, :fname, :lname

    def self.all
        ins = QuestionsDatabase.instance.execute('SELECT * FROM users')
        ins.map { |data| User.new(data) }
    end

    def self.find_by_id(id)
        ins = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                id, fname, lname
            FROM
                users
            WHERE
                id = ?
        SQL
        return nil if ins.length < 1
        User.new(ins.first)
    end

    def self.find_by_last_name(lname)
        ins = QuestionsDatabase.instance.execute(<<-SQL, lname)
            SELECT
                id, fname, lname
            FROM
                users
            WHERE
                lname = ?
        SQL
        return nil if ins.length < 1
        User.new(ins.first) # return the user object
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def update_fname(new_name, id)
        QuestionsDatabase.instance.execute(<<-SQL, new_name, id)
        UPDATE
            users
        SET 
            fname = ?
        WHERE
            id = ?
        SQL
        p self.id
        self 
        # heredoc returns a string
        # self didn't change, but User.all changed correctly
    end
end

# abby_ins = User.find_by_last_name('Xu') # created a new object
# instance method, doesn't need to locate it
# if didn't use WHERE, will change name for all instances
# don't know how to locate on one person and change the name



class Question_follow

    attr_accessor :id, :user_id, :question_id
    def self.all
        ins = QuestionsDatabase.instance.execute('SELECT * FROM question_follows')
        ins.map { |data| Question_follow.new(data) }
    end
    def self.find_by_id(id)
        ins = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                question_follows
            WHERE
                id = ?
        SQL
        return nil if ins.length < 1
        Question_follow.new(ins.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end
end


class Reply
    attr_accessor :id, :user_id, :question_id, :reply_id, :reply_body

    def self.all
        ins = QuestionsDatabase.instance.execute('SELECT * FROM replies')
        ins.map { |data| Reply.new(data) }
    end

    def self.find_by_id(id)
        ins = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                replies
            WHERE
                id = ?
        SQL
        return nil if ins.length < 1
        Reply.new(ins.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
        @reply_id = options['reply_id']
        @reply_body = options['reply_body']        
    end
end

# reply id is empty
# 


class Question_like

    attr_accessor :id, :user_id, :question_id
    
    def self.all
        ins = QuestionsDatabase.instance.execute('SELECT * FROM question_likes')
        ins.map { |data| Question_like.new(data) }
    end
    
    def self.find_by_id(id)
        ins = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                question_likes
            WHERE
                id = ?
        SQL
        return nil if ins.length < 1
        Question_like.new(ins.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end
end
