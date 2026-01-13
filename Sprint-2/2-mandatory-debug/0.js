// Predict and explain first...

// =============> write your prediction here
// This code will not work the way we expect.
// It will print the multiplication, but then show `undefined` in the message.

/*function multiply(a, b) {
  console.log(a * b);
} */

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The multiply function only logs the result.
// It does NOT return anything.
// When a function doesn’t return a value, JavaScript gives back `undefined`.
// So `undefined` gets put inside the template string.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
