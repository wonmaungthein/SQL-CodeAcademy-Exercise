// this is a SQL command.
SELECT * FROM mytable;

// let's create a new table
CREATE TABLE celebs (
    id INTEGER, 
    name TEXT, 
    age INTEGER
);
// CREATE TABLE is a clause that tells SQL what I want to create
// celebs is name of the table.(id INTEGER, name TEXT, age INTEGER) is a list of parameters defining each column in the table and its data type.

INSERT INTO celebs 
(id,name,age)
VALUES (1,'Won Thein', 21);
SELECT * FROM celebs; //selecting everyeing in the table to show as table
SELECT name FROM celebs;//selecting only name from the table

UPDATE celebs //updating celebs table 
SET age = 22 //setting age as 22
WHERE id = 1; //into id value is 1;

ALTER TABLE celebs//adding a new table to the column
ADD COLUMN 
twitter_handle TEXT;//the name of the new column, data type is text

DELETE FROM celebs //Delete from table celebs
WHERE twitter_handle//selecting twitter_handler column
IS NULL;//where nothing is there

