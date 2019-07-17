1)Select Title, director, etc. of film
    SELECT Title
    FROM movies;
    SELECT director
    FROM movies;
    SELECT title, director
    FROM movies;
    SELECT title, year
    FROM movies;
    SELECT *
    FROM movies;
2) More Select
a)  SELECT title
    FROM movies
    WHERE id = 6;
b)  SELECT title
    FROM movies
    WHERE year BETWEEN 2000 AND 2010;
c)  SELECT title
    FROM movies
    WHERE year NOT BETWEEN 2000 ABD 2010;
d)  SELECT title, year
    FROM movies
    ORDER BY year LIMIT 5;
3) WHERE CONDITIONS
a)  SELECT title
    FROM movies
    WHERE title LIKE 'Toy Story%';
b)  SELECT title
    FROM movies
    WHERE director = 'John Lasseter';
c)  SELECT title, director
    FROM movies
    WHERE director != 'John Lasseter'; 
d)  SELECT title
    FROM movies
    WHERE title LIKE 'WALL-_';
4) DISTINCT, ORDER BY, LIMIT, OFFSET
a)  SELECT DISTINCT director
    FROM movies
    ORDER BY director;
b)  SELECT title
    FROM movies
    ORDER BY year DESC LIMIT 4;
c)  SELECT title
    FROM movies
    ORDER BY title LIMIT 5;
d)  SELECT title
    FROM movies
    ORDER BY title LIMIT 5 OFFSET 5;
5) Intro to sub-query
a)  SELECT city, population
    FROM North_american_cities
    WHERE country = 'Canada';
b)  SELECT city, latitude
    FROM North_american_cities
    WHERE country = 'United States' ORDER BY latitude DESC;
c)  SELECT city, longitude
    FROM North_american_cities
    WHERE longitude < (
        SELECT longitude
        FROM North_american_cities
        WHERE city = 'Chicago'
    ) ORDER BY longitude;
d)  SELECT city, population
    FROM North_american_cities
    WHERE country = 'Mexico' 
        ORDER BY population DESC
        LIMIT 2;
e)  SELECT city, population
    FROM North_american_cities
    WHERE country = 'United States'
        ORDER BY population DESC
        LIMIT 2 OFFSET 2;
6) Join ON id
a)  SELECT title, domestic_sales, International_sales
    FROM Boxoffice
    JOIN movies ON movie_id = movies.id;
b)  SELECT title, domestic_sales, international_sales
    FROM boxoffice
    JOIN movies ON movie_id = movies.id
    WHERE international_sales > domestic_sales;
c)  SELECT title, movie_id, rating
    FROM movies
    JOIN boxoffice ON movie_id = id
    ORDER BY rating DESC;
7) GROUP BY DISTINCT
a)  SELECT building
    FROM Employees
    GROUP BY building;
b)  SELECT building_name, capacity
    FROM Buildings;
c)  SELECT DISTINCT building_name, role
    FROM Buildings
    LEFT JOIN Employees ON Building_name = Building;
8) LEFT JOIN, IS NULL
a)  SELECT name, role
    FROM Employees
    WHERE Building IS NULL;
b)  SELECT Building_name
    FROM Buildings
    LEFT JOIN Employees ON Building_name = Building
    WHERE Employees.name IS NULL;
9) Math operation in SELECT, WHERE
a)  SELECT title, (Domestic_sales + International_sales)/1000000 AS Sales_in_millions
    FROM movies
    JOIN Boxoffice ON id = movie_id;
b)  SELECT title, rating * 10
    FROM movies
    JOIN Boxoffice ON id = movie_id;
c)  SELECT title
    FROM movies
    WHERE year % 2 = 0;
10) Aggregate funcitons: MAX
a)  SELECT name, MAX(Years_employed)
    FROM Employees;
b)  SELECT role, AVG(Years_employed)
    FROM Employees
    GROUP BY ROLE;
c)  SELECT Building, SUM(Years_employed)
    FROM Employees
    GROUP BY Building;
11) COUNT, GROUP BY, HAVING
a)  SELECT COUNT (name)
    FROM Employees
    WHERE role = 'Artist';
b)  SELECT role, COUNT(name)
    FROM Employees
    GROUP BY role;
c)  SELECT role, SUM(Years_employed)
    FROM Employees
    GROUP BY role
    HAVING role = 'Engineer';
12) Order of execution: i) FROM, JOIN ii) WHERE iii) GROUP BY iv) HAVING v) SELECT 
                        vi) DISTINCT vii) ORDER BY viii) LIMIT, OFFSET
                        UNION / UNION ALL / INTERSECT / EXCEPT happens before ORDER BY
a)  SELECT director, COUNT (title)
    FROM Movies
    GROUP BY director;
b)  SELECT director, SUM(Domestic_sales + International_sales) AS Total
    FROM movies
    JOIN Boxoffice ON id = movie_id
    GROUP BY director;
13) INSERT INTO table
a)  INSERT INTO movies (title, Director)
    VALUES ('Toy Story 4', 'M Night Shyamalan');
b)  INSERT INTO boxoffice 
    VALUES (4, 8.7, 340000000, 270000000);
14) Update
a)  UPDATE movies
    SET director = 'John Lasseter'
    WHERE title = 'A Bug''s Life';
b)  UPDATE movies
    SET year = 1999
    WHERE title = 'Toy Story 2';
c)  UPDATE movies
    SET title = 'Toy Story 3', Director = 'Lee Unkrich'
    WHERE title = 'Toy Story 8';
15) Delete
a)  DELETE FROM movies
    WHERE year < 2005;
b)  DELETE FROM movies
    WHERE director = 'Andrew Stanton';
16) Creating new tables
a)  CREATE TABLE Database (
        id PRIMARY KEY,
        name TEXT,
        version FLOAT,
        download_count INT
    );
17) Adding column
a)  ALTER TABLE movies
    ADD Aspect_ratio FLOAT;
b)  ALTER TABLE movies
    ADD Language DEFAULT 'English';
18) Dropping table
    DROP TABLE IF EXISTS movies;
19) Sub-query can be used in 
    SELECT ()
    FROM JOIN ON ()
    WHERE ()
    IN or NOT IN ()