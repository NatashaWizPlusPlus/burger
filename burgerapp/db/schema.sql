CREATE DATABASE burgers_db;

USE burgers_db;

-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.
create table burgers_tbl(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR,
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY (id)
  
);