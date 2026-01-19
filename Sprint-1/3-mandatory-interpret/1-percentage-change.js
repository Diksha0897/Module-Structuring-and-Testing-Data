let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;


console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*
ANSWER PART A
 There are 5 function calls in total because even if one function is inside another, each function call is counted separately.

 Lines where function calls occur:
 1. carPrice.replaceAll(",", "")
 2. Number(carPrice.replaceAll(",", ""))
 3. priceAfterOneYear.replaceAll(",", "")   // after fixing the syntax error
 4. Number(priceAfterOneYear.replaceAll(",", ""))
 5. console.log(`The percentage change is ${percentageChange}`)
 */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/* 
ANSWER PART B 

The error occurs on 5th line:

priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

Reason:
The replaceAll method requires two arguments separated by a comma.
The comma between the arguments is missing, causing a syntax error.

The corrected line should be:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); 
 
*/


// c) Identify all the lines that are variable reassignment statements

/*
ANSWER PART C

Lines 4 and 5 are variable reassignment statements:
 4. carPrice = Number(carPrice.replaceAll(",", ""));
 5. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/

 //d) Identify all the lines that are variable declarations
/*
ANSWER PART D

 Lines 1,2,7 and 8 are variable declarations:
 1. let carPrice = "10,000";
 2. let priceAfterOneYear = "8,543";
 7. const priceDifference = carPrice - priceAfterOneYear;
 8. const percentageChange = (priceDifference / carPrice) * 100;
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*
ANSWER PART E
 First, replaceAll(",", "") removes all commas from the string value
 of carPrice (for example, "10,000" becomes "10000").
 Then, Number(...) converts the cleaned string into a numeric value.
 This is necessary because JavaScript cannot perform calculations correctly on numbers that are stored as formatted strings.
*/
