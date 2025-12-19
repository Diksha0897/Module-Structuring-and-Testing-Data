// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// This code will cause an error because we are trying to declare a variable with the same name as a function parameter.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation here

// `decimalNumber` is already the input of the function.
// Writing `const decimalNumber = 0.5` tries to make it again,
// which JavaScript does not allow.
// Also, `decimalNumber` only exists inside the function.
// When we try to console.log it outside, JavaScript can’t find it.


// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = decimalNumber * 100 + "%";
  return percentage;
}

console.log(convertToPercentage(0.9)); // "90%"
