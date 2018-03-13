// selecting everying from fake_apps to see what are the columns name
SELECT *
FROM fake_apps;

// COUNT is a function that takes the name of a column 
// as an argument and counts the number of non-empty values in that column.

// Let's count how many apps are in the database.
SELECT COUNT (*)
FROM fake_apps;

// how many free apps are in the database.
SELECT COUNT(*) 
FROM fake_apps
WHERE price=0;


// SUM is a function that takes the name of a column as an argument and returns the sum of all the values in that column.
// What is the total number of downloads for all of the apps combined?
 SELECT SUM(downloads)
 FROM fake_apps;
// This adds all values in the downloads column.

// How many downloads does the most popular app have?
 SELECT MAX(downloads)
 FROM fake_apps;

//  What is the least number of times an app has been downloaded?
 SELECT MIN(downloads)
 FROM fake_apps;

//  Write a new query that returns the price of the most expensive app.
SELECT MAX(price)
FROM fake_apps;

// The AVG function works by taking a column name as an argument and returns the average value for that column.
SELECT AVG(downloads)
 FROM fake_apps;

//  Write a new query that calculates the average price of an app in the database.
SELECT AVG(price)
FROM fake_apps;

// ROUND function takes two arguments inside the parenthesis:

// a column name
// an integer
// It rounds the values in the column to the number of decimal places specified by the integer.

SELECT ROUND(price, 0)
 FROM fake_apps;
// Here, we pass the column price and integer 0 as arguments. SQL rounds the values in the column to zero decimal places in the output.

// Let's return the name column and a rounded price column.
 SELECT name, ROUND(price, 0)
 FROM fake_apps;

//  Write a new query that rounds this AVG(price) result to 2 decimal places.
SELECT ROUND(AVG(price), 2)
FROM fake_apps;

// We can use GROUP BY to do this in a single step:

 SELECT year,
    AVG(imdb_rating)
 FROM movies
 GROUP BY year
 ORDER BY year;
// GROUP BY is a clause in SQL that is used with aggregate functions. It is used in collaboration with the SELECT statement to arrange identical data into groups.
// The GROUP BY statement comes after any WHERE statements, but before ORDER BY or LIMIT.

// count the total number of apps for each price in the table.
 SELECT price, COUNT(*) 
 FROM fake_apps
 GROUP BY price;
// Here, our aggregate function is COUNT and we arranged price into groups.

// add a WHERE clause to count the total number of apps 
// that has been downloaded more than 20,000 times, at each price.
SELECT price, COUNT(*)
FROM fake_apps
WHERE downloads > 20000
GROUP BY price;

// Write a new query that calculates the total number of downloads for each category.
SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;


SELECT ROUND(imdb_rating),
    COUNT(name)
 FROM movies
 GROUP BY 1
 ORDER BY 1;
// Here, the 1 refers to the first column in our SELECT statement, ROUND(imdb_rating).

SELECT category,
price,
AVG(downloads)
FROM fake_apps
GROUP BY category, price;
// OR
// Write a new query that uses column reference numbers instead of column names 
// after GROUP BY
SELECT category,price,AVG(downloads)
FROM fake_apps
GROUP BY 1,2
ORDER BY 1,2;


// In addition to being able to group data using GROUP BY, SQL also allows you to filter which groups to include and which to exclude.
// For instance, imagine that we want to see how many movies of different genres were produced each year, but we only care about years and genres with at least 10 movies.
// We can't use WHERE here because we don't want to filter the rows; we want to filter groups.
// This is where HAVING comes in.
// HAVING is very similar to WHERE. In fact, all types of WHERE clauses you learned about thus far can be used with HAVING.
// We can use the following for the problem:

 SELECT year,
    genre,
    COUNT(name)
 FROM movies
 GROUP BY 1, 2
 HAVING COUNT(name) > 10
// When we want to limit the results of a query based on values of the individual rows, we use WHERE.
// When we want to limit the results of a query based on an aggregate property, we use HAVING.
// HAVING statement always comes after GROUP BY, but before ORDER BY and LIMIT.

SELECT price, 
    ROUND(AVG(downloads))
 FROM fake_apps
 GROUP BY price;
// Certain price points don't have very many apps, so the average is less meaningful.
// Add a HAVING clause to restrict the query to prices 
// where the total number of apps at that price point is greater than 9.
SELECT price, 
ROUND(AVG(downloads))
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 9;