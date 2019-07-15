DROP TABLE cattoys;
DROP TABLE cats;
DROP TABLE toys;

-- a table for cats
--         each cat should have an id, name, color, and a breed
CREATE TABLE cats ( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR (20) NOT NULL,
    color VARCHAR (10) NOT NULL,
    breed VARCHAR (10) NOT NULL,
    age INT NOT NULL
);

-- a table toys
--         each toy should have anid, price, color and a name
CREATE TABLE toys (
    id SERIAL PRIMARY KEY,
    price INT,
    color VARCHAR (10),
    name VARCHAR (20)
);
    

-- a table for cattoys
-- (which will be the connection between cats and toys)
--         each cattoy should have an id, a cat_id and a toy_id
CREATE TABLE cattoys(
    id SERIAL PRIMARY KEY,
    cat_id INTEGER NOT NULL,
    toy_id INTEGER NOT NULL,

    FOREIGN KEY (cat_id) REFERENCES cats (id),
    FOREIGN KEY (toy_id) REFERENCES toys (id)
);


-- INSERT 5 data entries into each table
-- CATS SEED
INSERT INTO
    cats (name, color, breed, age)
VALUES
    ('Klency', 'brown', 'short-hair', 4),
    ('Teddy', 'white', 'tiger', 4),
    ('Mr. Cat', 'black', 'persian', 4),
    ('Bob', 'blue', 'siamese', 20),
    ('Siren', 'brown', 'napping', 5);
    
-- TOYS SEED
INSERT INTO
    toys (price, color, name)
VALUES
    (400, 'green', 'tennis ball'),
    (100, 'white', 'string'),
    (600, 'brown', 'box'),
    (165, 'orange', 'hot wheels race set'),
    (5, 'tan', 'scratching post');

-- CATTOYS SEED
INSERT INTO
    cattoys(cat_id, toy_id)
VALUES
    ((SELECT id FROM cats WHERE cats.name = 'Klency'), 
    (SELECT id FROM toys WHERE toys.name = 'tennis ball')),

    ((SELECT id FROM cats WHERE cats.name = 'Teddy'), 
    (SELECT id FROM toys WHERE toys.name = 'string')),

    ((SELECT id FROM cats WHERE cats.name = 'Mr. Cat'), 
    (SELECT id FROM toys WHERE toys.name = 'box')),

    ((SELECT id FROM cats WHERE cats.name = 'Bob'), 
    (SELECT id FROM toys WHERE toys.name = 'hot wheels race set')),

    ((SELECT id FROM cats WHERE cats.name = 'Siren'), 
    (SELECT id FROM toys WHERE toys.name = 'scratching post'))
    ;

-- PHASE 1a: INSERTING AND UPDATING
UPDATE toys
SET color = 'red'
WHERE toys.name = 'string';

UPDATE cats
SET breed = 'sleeping'
WHERE cats.name = 'Siren';

INSERT INTO cats(name, color, breed, age)
VALUES ('dog', 'dog color', 'dog breed', 7);

DELETE FROM cats
WHERE name = 'dog';



-- PHASE 2: MEASURING PERFORMANCE

-- Find all the cats with a particular name
EXPLAIN
SELECT
    name
FROM
    cats
WHERE
    name = 'Siren';

-- Find all the toys that belong to a particular cat
EXPLAIN 
SELECT cats.name, toys.name
FROM cattoys
JOIN toys ON toys.id = toy_id
JOIN cats ON cats.id = cat_id
WHERE cats.name = 'Klency';

-- Find all the toys and cats the are a particular color
EXPLAIN ANALYZE
SELECT cats.name, cats.color, toys.name, toys.color
FROM cattoys
JOIN toys ON toys.id = toy_id
JOIN cats ON cats.id = cat_id
WHERE cats.color = 'brown' OR toys.color = 'brown';

-- Find all the toys that belong to a particular breed of cat
EXPLAIN
SELECT toys.name, cats.breed
FROM cattoys
JOIN toys ON toys.id = toy_id
JOIN cats ON cats.id = cat_id
WHERE breed = 'siamese';