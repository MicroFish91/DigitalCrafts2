-- CREATE TABLE author(
--   id SERIAL PRIMARY KEY,
--   name varchar(25)
-- );

-- CREATE TABLE articles(
--   id SERIAL PRIMARY KEY,
--   title varchar(150),
--   author_id integer REFERENCES author(id)
-- );

-- INSERT INTO author VALUES
-- (DEFAULT, 'Jose'),
-- (DEFAULT, 'Mike'),
-- (DEFAULT, 'Brandon'),
-- (DEFAULT, 'Andrena'),
-- (DEFAULT, 'Destiny'),
-- (DEFAULT, 'Rio'),
-- (DEFAULT, 'Q'),
-- (DEFAULT, 'Jason M.'),
-- (DEFAULT, 'Bodgan'),
-- (DEFAULT, 'Jennifer'),
-- (DEFAULT, 'Layne'),
-- (DEFAULT, 'Lorenzo'),
-- (DEFAULT, 'Cook'),
-- (DEFAULT, 'Victoria'),
-- (DEFAULT, 'Giselle'),
-- (DEFAULT, 'Carol'),
-- (DEFAULT, 'Jason H.'),
-- (DEFAULT, 'Jim'),
-- (DEFAULT, 'Anjunique'),
-- (DEFAULT, 'Jacob'),
-- (DEFAULT, 'Matt'),
-- (DEFAULT, 'Jake');

-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Protypes', 1),
-- (DEFAULT, 'JS Promises', 3),
-- (DEFAULT, 'Express Routes', 10),
-- (DEFAULT, 'Styling with Bootstrap', 4),
-- (DEFAULT, 'API calls with Google Maps', 3),
-- (DEFAULT, 'Python RPG Game', 7),
-- (DEFAULT, 'Object Oriented Programming in JS', 7),
-- (DEFAULT, 'Nested For Loops', 7),
-- (DEFAULT, 'Preparing for Technical Interviews', 1),
-- (DEFAULT, 'Why I went to a coding camp', 1),
-- (DEFAULT, 'Coding in Romanian', 2),
-- (DEFAULT, 'Fizz Buzz - The Solution', 9),
-- (DEFAULT, 'Recursive Fibonacci with Memoization', 11),
-- (DEFAULT, 'Merge Sort', 15);

-- SELECT * FROM article, author WHERE article.author_id = author.id;

-- SELECT * FROM author 
-- INNER JOIN articles
-- ON author.id = articles.author_id;

-- SELECT * FROM author
-- LEFT OUTER JOIN articles
-- ON author.id = articles.author_id;


-- CREATE TABLE member(
--   id SERIAL PRIMARY KEY,
--   name varchar(25)
-- );

-- CREATE TABLE groups(
--   id SERIAL PRIMARY KEY,
--   name varchar(100)
-- );

-- CREATE TABLE membership(
--   id SERIAL PRIMARY KEY,
--   group_id integer REFERENCES groups(id),
--   member_id integer REFERENCES member(id)
-- );

-- INSERT INTO groups VALUES 
-- (DEFAULT, 'Atlanta JavaScript Meetup'),
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Atlanta Web Design Group');

-- INSERT INTO member VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Kevin'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');

-- INSERT INTO membership VALUES
-- (DEFAULT, 1, 4),
-- (DEFAULT, 1, 5),
-- (DEFAULT, 1, 6),
-- (DEFAULT, 1, 10),
-- (DEFAULT, 2, 1),
-- (DEFAULT, 2, 5),
-- (DEFAULT, 2, 6),
-- (DEFAULT, 2, 10),
-- (DEFAULT, 3, 8),
-- (DEFAULT, 3, 9),
-- (DEFAULT, 3, 10),
-- (DEFAULT, 3, 12),
-- (DEFAULT, 4, 1),
-- (DEFAULT, 4, 3),
-- (DEFAULT, 4, 7),
-- (DEFAULT, 4, 8)

-- many to many join
SELECT * FROM groups
INNER JOIN membership
ON groups.id = membership.group_id
INNER JOIN member
ON membership.member_id = member.id;