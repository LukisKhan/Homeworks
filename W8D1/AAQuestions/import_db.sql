PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname varchar(255) NOT NULL,
    lname varchar(255) NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    question_body TEXT NOT NULL
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    reply_id INTEGER,
    user_id INTEGER NOT NULL,
    reply_body TEXT NOT NULL,
    
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (reply_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO users
    (fname, lname)
VALUES 
    ('Luat', 'Pham'),
    ('Abby', 'Xu');

INSERT INTO questions
    (title, question_body)
VALUES
    ('Q', 'how'),
    ('how many', 'five');

INSERT INTO question_follows
    (user_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Abby'), (SELECT id FROM questions WHERE title = 'Q')),
    ((SELECT id FROM users WHERE fname = 'Luat'), (SELECT id FROM questions WHERE question_body = 'five'));


INSERT INTO replies
    (question_id, reply_id, user_id, reply_body)
VALUES 
    ( (SELECT id FROM questions WHERE title = 'Q'),
    (SELECT id FROM replies WHERE reply_id = 2 ),        
    (SELECT id FROM users WHERE fname = 'Abby'), 
    'the ultimate answer to the question' ),

    ( (SELECT id FROM questions WHERE title = 'how many'),
    (SELECT id FROM replies WHERE reply_id = 1),        
    (SELECT id FROM users WHERE fname = 'Luat'), 
    'I answered it twice' );


