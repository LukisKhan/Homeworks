#RDBMS: relational db management systems: implementation of sql: ex.
    #Ex. Sqlite, MySQL, Oracle, SQLServer
    #SQLite has no servers, easy to use but can't be scaled
1) Creating a sql tables
2) Pipe it into sqlite3
3) terminal: cat create_tables.sql | sqlite3 school.db
4) go into sql by typing sqlite3 school.db
common commands
    .tables
    .schema
    SELECT, INSERT INTO, etc.
5) can access sql db from terminal/command line by using
    sqlite3 school.db "SELECT * FROM departments"
6) gem install sqlite3
ORM: interacting ruby class with db tables
    require 'sqlite3'
    require 'singleton'
    class PlayDBConnection < SQL3::Database
        include Singleton
        def initialize
            super('plays.db')
            self.type_translation = true
            self.results_as_hash = true
        end
    end
    class Play
        attr_accessor :title, :year, :playwright_id
        def self.all
            data = PlayDBConnection.instance.execute('SELECT * FROM plays')
            #return a hash of plays
            data.map { |datum| Play.new(datum) }
        end
        def initialize(options)
            @id = options['id']
            @title = options['title']
            @year = options['year']
            @playwright_id = options['playwright_id']
        end
        def create
            raise " already in database" if @id
            PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id
                INSERT INTO
                    plays (title, year, playwright_id)
                VALUES
                    (?, ?, ?)
            SQL
            #SQL injection attacks
            #playwright_id == '"3; DROP TABLE plays"
            @id = PlayDBConnection.instance.last_insert_row_id
        end
        def update
            raise "not in database" unless @id
            PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id,@id)
                UPDATE
                    plays
                SET
                    title = ?, year = ?, playwright_id = ?
                WHERE
                    id = ?
            SQL
        end