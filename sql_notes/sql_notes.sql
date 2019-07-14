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
6)
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
7)
a)  
b)  
c)  
d)  
8)
a)  
b)  
c)  
d)  
9)
a)  
b)  
c)  
d)  
10)
a)  
b)  
c)  
d)  
11)
a)  
b)  
c)  
d)  
12)
a)  
b)  
c)  
d)  
13)
a)  
b)  
c)  
d)  
14)
a)  
b)  
c)  
d)  
15)
a)  
b)  
c)  
d)  
16)
a)  
b)  
c)  
d)  
17) Adding column
a)  ALTER TABLE movies
    ADD Aspect_ratio FLOAT;
b)  ALTER TABLE movies
    ADD Language DEFAULT 'English';
18) Dropping table
    DROP TABLE IF EXISTS movies;