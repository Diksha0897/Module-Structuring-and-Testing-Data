const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 1. Store the price as a string in pence
// "399p" means 399 pence
//const penceString = "399p";

/*

2. penceStringWithoutTrailingP variable is initialised by creating a substring of penceString starting from index 0 to up to 3 (exclusive) hence,
it removes the letter 'p' from the end
 This leaves it with just the number part i.e 399
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

 3. We need to make sure the number has at least 3 digits due to pad start target length given as 3 but since our variable (399) already has length 3 so nothing will be changed.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

 4. Through the below function we get value of variable pounds 3 because by using substring method , it starts at index 0 up to index 1 (exclusive) and hence giving a value of 3 of variable pounds
 The last two digits are pence, so everything before that is pounds
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

 5. Now, the below line of function gives the value of variable pence as 99 as our target length should be 2 and the value of paddedPenceNumberString is 399 and then by using substring(1) to 399 which gives us the value 99 as there is no end value in substring so it takes unto the last value of the variable starting from index 1 and since the length is already 2 so we do not need to add 0 into it.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

 6. Finally it simply prints the final price in pounds and pence as per template format
 Output will be: £3.99
console.log(`£${pounds}.${pence}`);

*/

