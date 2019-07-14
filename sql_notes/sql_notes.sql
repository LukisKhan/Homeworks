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
4)
a)  
b)  
c)  
d)  
5)
a)  
b)  
c)  
d)  
6)
a)  
b)  
c)  
d)  
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