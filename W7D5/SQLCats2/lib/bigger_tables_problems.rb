# BUILDING BIGGER TABLES EXERCISES

# -- CATS
# CREATE TABLE cats
# (
#   id SERIAL PRIMARY KEY,
#   name VARCHAR (255) NOT NULL,
#   color VARCHAR (255) NOT NULL,
#   breed VARCHAR (255) NOT NULL
# );

# -- TOYS
# CREATE TABLE toys
# (
#   id SERIAL PRIMARY KEY,
#   name VARCHAR (255) NOT NULL,
#   color VARCHAR (255) NOT NULL,
#   price INTEGER NOT NULL
# );


# -- -- CATTOYS
# CREATE TABLE cattoys
# (
#   id SERIAL PRIMARY KEY,
#   cat_id INTEGER NOT NULL,
#   toy_id INTEGER NOT NULL,

#   FOREIGN KEY (cat_id) REFERENCES cats(id),
#   FOREIGN KEY (toy_id) REFERENCES toys(id)
# );


# Find all of the breeds for the cats named 'Noel'
EXPLAIN ANALYZE
SELECT cats.breed
FROM cats
WHERE cats.name = 'Noel';

# Find all the toys that belong to the cat named 'Freyja'
EXPLAIN ANALYZE
SELECT toys.name
FROM cattoys
JOIN cats ON cat_id = cats.id
JOIN toys ON toy_id = toys.id
WHERE cats.name IN ('Freyja');

# Find all the toys and cats that are the color 'Red'
EXPLAIN ANALYZE
SELECT  cats.name, cats.color, toys.name, toys.color
FROM cattoys
JOIN cats ON cat_id = cats.id
JOIN toys ON toy_id = toys.id
WHERE cats.color = 'Red' OR toys.color = 'Red';

# Find all the toys that belong to the cats with the breed of 'British Shorthair'
EXPLAIN ANALYZE
SELECT toys.name
FROM cattoys
JOIN cats ON cat_id = cats.id
JOIN toys ON toy_id = toys.id
WHERE cats.breed = 'British Shorthair';

# Find all the toys with a price of less than 10.
EXPLAIN ANALYZE
SELECT toys.name
FROM cattoys
JOIN cats ON cat_id = cats.id
JOIN toys ON toy_id = toys.id
WHERE  toys.price < 10
GROUP BY toys.name;