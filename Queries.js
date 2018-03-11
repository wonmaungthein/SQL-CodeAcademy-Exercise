// SQL (SEQUEL STRUCTURED ENGLISH QUERY LANGUAGE)

SELECT * FROM movies; //selecting everyting from the movie

SELECT name, genre, year //selecting data from three columns at the same time
FROM movies; //from movies table

// AS is a keyword in SQL to rename a column or table using an alias. New name must be inside single quote. 
SELECT name AS 'Title'//selecting name column and changed it to Title column from/in  movies table.
FROM movies;

SELECT imdb_rating AS 'IMDb' // selecting imdb_rating from movies and changed to IMDb.
FROM movies;

// DISTINCT is used to return unique values in the output. It filters out all duplicate values in the specified column(s).
SELECT DISTINCT genre //using distinct, getting genre from movies(it will not give duplicate data)
FROM movies;

SELECT *  //Selecting all from movies 
FROM movies
WHERE imdb_rating < 5;// at imdb_rating which are less than 5


SELECT * //selecting all from movies table 
FROM movies
WHERE year > 2014; //at the released year is after 2014

SELECT * 
 FROM movies
 WHERE name LIKE 'Se_en';
//  LIKE is a special operator used with the WHERE clause to search for a specific pattern in a column.
// 2. name LIKE 'Se_en' is a condition evaluating the name column for a specific pattern.
// 3. Se_en represents a pattern with a wildcard character. The _ means you can substitute any individual character here without breaking the pattern. The names Seven and Se7en both match this pattern.

SELECT *
FROM movies
WHERE name LIKE 'Se_en';

SELECT * 
FROM movies
WHERE name LIKE 'A%';
// % is a wildcard character that matches zero or more missing letters in the pattern. For example:
// A% matches all movies with names that begin with letter 'A'
// %a matches all movies that end with 'a'
// We can also use % both before and after a pattern:

SELECT * 
 FROM movies 
 WHERE name LIKE '%man%';
//  LIKE is not case sensitive. 'Batman' and 'Man of Steel' will both appear in the result of the query above.

SELECT *
FROM movies
WHERE name LIKE '%man%';

SELECT *
FROM movies
WHERE name LIKE 'The%';
// selects all movie titles that begin with the word 'The'.



