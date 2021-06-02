-- CREATE TABLE Restaurants(
--   id serial PRIMARY KEY,
--   name varchar(40),
--   distance numeric(5, 2),
--   stars smallint,
--   category varchar(50),
--   favoriteDish varchar(50),
--   doesTakeout boolean,
--   dateOfLastAte date
-- );

-- INSERT INTO Restaurants VALUES 
-- (DEFAULT, 'Restaurant Spicy', 15.25, 4, 'Dine-In', 'noodles', TRUE, '2021-05-17'),
-- (DEFAULT, 'Restaurant Tangy', 25.1, 3, 'Take-Out', 'beef', TRUE, '2021-06-01'),
-- (DEFAULT, 'Restaurant New New', 5.1, 2, 'Dine-In', 'noodles', FALSE, '2021-02-01'),
-- (DEFAULT, 'Some Ting Wong', 2.3, 1, 'Take-Out', 'none', TRUE, '2021-01-15'),
-- (DEFAULT, 'Som Yong Gai', 13.3, 4, 'Dine-In', 'mushroom', FALSE, '2021-03-15'),
-- (DEFAULT, 'Ding Hwa', 17.59, 5, 'Take-Out', 'noodles', TRUE, '2020-11-15'),
-- (DEFAULT, 'Bali', 6.99, 2, 'Take-Out', 'mushroom', TRUE, '2020-12-17')

-- The names of the restaurants that you gave a 5 stars to
-- SELECT * FROM Restaurants WHERE stars = 5;

-- The favorite dishes of all 5-star restaurants
-- SELECT favoriteDish FROM Restaurants;

-- The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
-- SELECT id FROM Restaurants WHERE name = 'Restaurant New New';

-- restaurants that do take out
-- SELECT * FROM Restaurants WHERE doesTakeout = TRUE;

-- SELECT * FROM Restaurants WHERE doesTakeout = TRUE and category = 'Dine-In';

-- SELECT * FROM Restaurants WHERE distance < 3;

-- SELECT *
-- FROM table
-- WHERE update_date >= '2013-05-03'::date
-- AND update_date < ('2013-05-03'::date + '1 day'::interval);

-- SELECT * FROM Restaurants WHERE dateOfLastAte < '2021-01-15'::date;

-- list restaurants by the closest distance.
-- SELECT * FROM Restaurants ORDER BY distance ASC;

-- list the top 2 restaurants by distance

-- SELECT * FROM Restaurants ORDER BY distance limit 2;

-- list the top 2 restaurants by stars where the distance is less than 2 miles.

-- SELECT * FROM Restaurants WHERE distance < 20 ORDER BY stars DESC limit 2;

-- count the number of restaurants in the db.

-- count the number of restaurants by category.

-- SELECT count(*) FROM Restaurants WHERE category = 'Take-Out';
-- SELECT count(DISTINCT category) FROM Restaurants;

-- get the average stars per restaurant by category.
-- SELECT AVG(stars)::numeric(1,0) FROM Restaurants;

-- get the max stars of a restaurant by category.
SELECT * FROM Restaurants where stars = (
  SELECT MAX(stars) FROM Restaurants
);