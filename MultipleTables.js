// Working with multiple tables
SELECT *
FROM orders;

SELECT *
FROM subscriptions;

SELECT *
FROM customers;

// Combining Tables with SQL
// If we want to combine orders and customers, we would type:

SELECT *
FROM orders
JOIN customers
    ON orders.customer_id = customers.customer_id

// The first line selects all columns from our combined table. 
// If we only want to select certain columns, we can specify which ones we want.
// The second line specifies the first table that we want to look in, orders
// The third line uses JOIN to say that we want to combine information from orders 
// with customers.
// The fourth line tells us how to combine the two tables. We want to match 
// customer_id from orders with customer_id from customers.

// Join orders and subscriptions and select all columns. 
// Make sure to join on subscription_id.
SELECT *
FROM orders
JOIN subscriptions
ON orders.subscription_id =
subscriptions.subscription_id;

// a second query after your first one that only selects rows 
// from the join where description is equal to 'Fashion Magazine'.
SELECT *
FROM orders
JOIN subscriptions
	ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

// Inner JOINS
// The table newspaper contains information about the newspaper subscribers. 
// Count the number of subscribers who get a print newspaper.
ELECT COUNT(*)
FROM newspaper;

// The table online contains information about the online subscribers. 
// Count the number of subscribers who get an online newspaper.
SELECT COUNT(*)
FROM online;

// Join newspaper and online on id (the unique ID of the subscriber). 
// How many rows are in this table?
SELECT COUNT(*)
FROM newspaper
JOIN online
    ON newspaper.id = online.id;
    

// Left Joins
// What if we want to combine two tables and keep some of the un-matched rows?
// SQL lets us do this through a command called LEFT JOIN. 
// A left join will keep all rows from the first table, regardless of whether 
// there is a matching row in the second table.
SELECT *
FROM table1
LEFT JOIN table2
  ON table1.c2 = table2.c2

//   The first line selects all columns from both tables.
//   The second line selects table1 (the "left" table).
//   The third line performs a LEFT JOIN on table2 (the "right" table).
//   The fourth line tells SQL how to perform the join 
// (by looking for matching values in column c2.

// Let's return to our newspaper and online subscribers. 
// Suppose we want to know how many users subscribe to the print news paper, 
// but not to the online. Start by performing a left join of newspaper 
// and online and selecting all columns.

SELECT *
FROM newspaper
LEFT JOIN online
	ON newspaper.id = online.id;
  
// Create a new query that adds the following WHERE clause:
// WHERE online.id IS NULL
// This will select rows where there was no corresponding row from the online table.

SELECT *
FROM newspaper
LEFT JOIN online
	ON newspaper.id = online.id
WHERE online.id IS NULL;

// INNER JOIN
// Perform an inner join of classes and students using the primary 
// and foreign keys described above, and select all columns.
SELECT *
FROM classes
JOIN students
    ON classes.id = students.class_id;
    
// if we had a table of shirts that described different shirts we own,     
// and another table called pants that described different pants that we owned, 
// we might want to know all possible combinations of shirts and 
// pants to create outfits.
    SELECT shirts.shirt_color,
       pants.pant_color
FROM shirts
CROSS JOIN pants;

// Let's start by counting the number of customers who were subscribed to the newspaper 
// during March (3). Use COUNT(*) to count the number of rows and 
// a WHERE clause to restrict to:

// start_month less than 3
// end_month greater than 3.
SELECT COUNT(*)
FROM newspaper
WHERE start_month < 3
	AND end_month > 3;
  
// The previous query lets us investigate one month at a time. 
// In order to check across all months, we're going to need to use a cross join.
// Our database contains another table called months which contains the numbers 
// between 1 and 12. Select all columns from the cross join of newspaper and months.

SELECT *
FROM newspaper
CROSS JOIN months;

// Create a third query where you add a where statement to your cross join. The column month should be greater than start_month, but less than end_month. This will select all months where a user was subscribed.
SELECT *
FROM newspaper
CROSS JOIN months
WHERE start_month < month
    AND end_month > month;
    
// Create a final query where you aggregate over each month. Fill in the ??? in the following query:
    ELECT month,
    COUNT(*) as subscribers
  FROM ???
  CROSS JOIN ???
  WHERE ???
    AND ???
  GROUP BY ???

//   Union
// Sometimes we want to stack one dataset on top of the other.
// UNION allows us to do that.
// Suppose we have two tables and they have the same columns:
SELECT *
 FROM table1
 UNION
 SELECT *
 FROM table2;

//  Let's return to our newspaper and online subscriptions. We'd like to create one big table with both sets of data. Use UNION to combine newspaper and online.
SELECT *
FROM newspaper
UNION
SELECT *
FROM online;

// With Often times, we want to combine two tables, 
// but one of the tables is the result of another calculation.

// Let's return to our magazine order example. Our marketing department 
// might want to know a bit more about our customers. For instance, 
// they might want to know how many magazines each customer subscribes to. 
// We can easily calculate this using our orders table:
SELECT customer_id,
       COUNT(subscription_id) as subscriptions
FROM orders
GROUP BY customer_id;
// This query is good, but a customer_id isn't terribly useful for our marketing 
// department, they probably want to know the customer's name.
// We want to be able to join the results of this query with our customers table, 
// which will tell us the name of each customer. We can do this by using a WITH clause.

WITH previous_results AS (
    SELECT ...
)
SELECT *
FROM previous_results
JOIN other_table
  ON ... = ...;

//   The WITH statement allows us to perform a separate query (such as aggregating 
// customer's subscriptions)previous_results is the alias that we will use 
// to reference any columns from the query inside of the WITH clause
//   We can then go on to join our results with another table

SELECT customer_id,
       COUNT(subscription_id) as subscriptions
FROM orders
GROUP BY customer_id
// Place the above query into a WITH statement using the alias previous_query. 
// Join previous_query with customers and select the following columns:

customers.customer_name
previous_query.subscriptions


WITH previous_query AS (
    SELECT customer_id,
           COUNT(subscription_id) as subscriptions
    FROM orders
    GROUP BY customer_id)
    SELECT customers.customer_name,
    previous_query.subscriptions
    FROM previous_query
    JOIN customers
        ON customers.customer_id = previous_query.customer_id;