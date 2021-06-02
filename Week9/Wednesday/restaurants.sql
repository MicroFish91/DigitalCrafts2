-- DELETE FROM restaurants;

CREATE TABLE restaurants(
  id serial PRIMARY KEY,
  name varchar(50),
  address varchar(75),
  category varchar(25)
);

CREATE TABLE reviewer(
  id serial PRIMARY KEY,
  name varchar(50),
  email varchar(75),
  karma integer (karma >= 0 and karma <= 7)
);

CREATE TABLE review(
  id serial PRIMARY KEY,
  reviewer_id integer REFERENCES reviewer(id),
  stars integer (stars <= 1 and stars >= 5),
  title varchar(100),
  review varchar(2000),
  restaurant_id integer REFERENCES restaurant(id)
);