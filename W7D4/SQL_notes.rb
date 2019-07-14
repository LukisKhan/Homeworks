SQL: stores data in a table that have:
    - Query - ask for data
    - normalization: store references to data, no dups
    - Structured Query Language - a way to retrieve data
    - Transaction: a unit of work using a Database
    - RDBMS: Relational Database Management System: saving and orgainzing data
    - Ternary Logic
    - PostgreSQL, SQLite, MySQL, Oracle, MongoDB, Redis
    - SQL uses static typing: Boolean, Int, Float, VARCHAR, Text, 
        Date, Datetime, Time, Blog
    - Domain-specific Language
Programming Paradigms:
    - Imperative Programming: Step by step reading of code 
    - Declarative Programming: Use descriptive verbs as blocks of code
SQL Commands
    - SELECT retrieve values 
        * to select all columns
    - INSERT INTO : add a row
        VALUES
    - UPDATE: change values in a row
        uses SET and WHERE
    - DELETE FROM : remove a row
        uses WHERE
    - FROM
        JOIN
    - WHERE
        AND, OR, NOT, > < >= = !=
    -COALESCE(if null, then this)
    -IN (SUBQUERIES)
Creating a table
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        birth_date DATE,
        house VARCHAR(255),
        favorite_food VARCHAR(20)
    );
    ALTER TABLE
    DROP TABLE