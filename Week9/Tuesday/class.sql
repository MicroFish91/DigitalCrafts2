-- CREATE TABLE student2(
--   name varchar,
--   website varchar(300),
--   github_username varchar,
--   points integer,
--   gender char(1),
--   cohort_start_date date,
--   graduated boolean
-- );

-- INSERT INTO student2 VALUES (
--   'Paul', 'pizzapanther', 'yo', 6, 'm', '2017-04-17', FALSE
-- );

-- CREATE TABLE students3(
--   id serial PRIMARY KEY,
--   name varchar,
--   website varchar(300),
--   github_username varchar,
--   points integer,
--   gender char(1),
--   cohort_start_date date,
--   graduated boolean
-- );

-- INSERT INTO students3 VALUES
-- (DEFAULT, 'Andrena', 'andrena@me.com', 'andrena123', 14, 'F', '2021-04-09', FALSE),
-- (DEFAULT, 'Jason H.', 'jason@me.com', 'jason123', 24, 'M', '2021-04-09', FALSE),
-- (DEFAULT, 'Jennifer', 'jennifer@me.com', 'jennifer123', 32, 'F', '2021-04-09', FALSE),
-- (DEFAULT, 'Victoria', 'victoria@me.com', 'victoria123', 18, 'M', '2021-04-09', FALSE),
-- (DEFAULT, 'Jim', 'jim@me.com', 'jim123', 24, 'M', '2021-04-09', FALSE);

-- SELECT * FROM students3;

-- UPDATE students3 SET points = 8 WHERE id = 1;

-- UPDATE students3 SET graduated = false WHERE gender = 'M';

-- DELETE FROM students3 WHERE id = 3;

-- DELETE FROM students3;

-- INSERT INTO students3 VALUES
-- (DEFAULT, 'Andrena', 'andrena@me.com', 'andrena123', 14, 'F', '2021-04-09', FALSE),
-- (DEFAULT, 'Jason H.', 'jason@me.com', 'jason123', 24, 'M', '2021-04-09', FALSE),
-- (DEFAULT, 'Jennifer', 'jennifer@me.com', 'jennifer123', 32, 'F', '2021-04-09', FALSE),
-- (DEFAULT, 'Victoria', 'victoria@me.com', 'victoria123', 18, 'M', '2021-04-09', FALSE),
-- (DEFAULT, 'Jim', 'jim@me.com', 'jim123', 24, 'M', '2021-04-09', FALSE);

-- CREATE TABLE student (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name varchar,
--   github varchar UNIQUE NOT NULL,
--   points integer DEFAULT 0 CHECK (points >= 0),
--   start_date date NOT NULL,
--   graduated boolean DEFAULT FALSE
-- );

-- SELECT name, website, gender FROM students3;

-- SELECT * FROM students3 WHERE github_username ILIKE 'J%';

-- ALTER TABLE students3 ADD city varchar(50);

-- ALTER TABLE students3 ADD state varchar(50) DEFAULT 'Texas';

-- ALTER TABLE students3 DROP COLUMN city;

-- ALTER TABLE students3 ALTER COLUMN website TYPE varchar(250);

-- SELECT * FROM students3 ORDER BY id;

-- SELECT COUNT(*) FROM students3;

-- SELECT SUM(points) FROM students3;

-- SELECT MAX(points) FROM students3;

-- SELECT * FROM students3 ORDER BY start_date, points;

SELECT * FROM students3 ORDER BY name DESC LIMIT 2 OFFSET 3;