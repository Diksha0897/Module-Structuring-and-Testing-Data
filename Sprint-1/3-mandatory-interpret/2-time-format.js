const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*
ANSWER PART A
There are 6 variable declarations in this program:
1. const movieLength = 8784;
2. const remainingSeconds = movieLength % 60;
3. const totalMinutes = (movieLength - remainingSeconds) / 60;
4. const remainingMinutes = totalMinutes % 60;
5. const totalHours = (totalMinutes - remainingMinutes) / 60;
6. const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
*/

// b) How many function calls are there?
/*
ANSWER PART B
There is 1 function call in this program: console.log(result);
*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*
ANSWER PART C
The expression movieLength % 60 gives the remainder
when movieLength is divided by 60. In this code, it
represents the leftover seconds after converting total
seconds into full minutes. So, when we divide 8784 with 60, it gives renainder 24.
So, `movieLength % 60` = 24
*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*
ANSWER PART D
The expression assigned to totalMinutes:
(movieLength - remainingSeconds) / 60
means:
First, the remaining seconds are removed from the total seconds,
leaving only full minutes, ignoring the leftover seconds. Then, the result is divided by 60 to
convert seconds into total whole minutes which gives 146 minutes.
So, totalMinutes = 146
*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*
ANSWER PART E 
The variable `result` holds the movie length formatted as hours, minutes, and seconds in the form "HH:MM:SS". 

For example, if the movie is 8784 seconds long, `result` will be:
"2:26:24" (2 hours, 26 minutes, 24 seconds).

A more descriptive name for this variable could be:
- `movieDurationFormatted`

This make it clearer that the variable represents the movie's length in a readable time format.
*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/*
ANSWER PART F
Yes, the code works for most positive whole numbers of seconds. 
It correctly converts seconds into hours, minutes, and leftover seconds.

But there are a few things we should keep in mind:

1. If we use negative numbers, the calculations won’t make sense.
2. If we use decimals (like 128.5 seconds), the seconds part may show fractions instead of whole numbers.
3. The output doesn’t add leading zeros, so times like 2:5:7 appear instead of 02:05:07, which looks untidy.

So, the code works generally, but, we have to handle negative numbers, decimals, and add leading zeros.
*/


