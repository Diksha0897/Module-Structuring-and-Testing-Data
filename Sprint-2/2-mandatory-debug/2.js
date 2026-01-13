// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The function always gives 3 because it only uses the number 103
// Even if we try to pass 42, 105, or 806, it still returns 3

const num = 103;

/*function getLastDigit() {
  return num.toString().slice(-1);
} 

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// 1. getLastDigit() does NOT take any number as input, but we are trying to pass numbers.
// 2. Inside the function, it always uses the global 'num', which is 103.
// 3. 103.toString().slice(-1) gives "3".
// 4. That's why all console.logs print 3, even for 42, 105, 806.

// Corrected code:
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
