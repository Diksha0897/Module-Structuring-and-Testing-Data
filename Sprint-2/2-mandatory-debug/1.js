// Predict and explain first...
//  =============> write your prediction here
//The console will show: "The sum of 10 and 32 is undefined"

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); */

// =============> write your explanation here

// Explanation:
// 1. The "return" statement ends the function right away. It is in its own line and a + b are never executed.
// 2. Since nothing comes with return, the function gives back "undefined".
// 3. That’s why we see undefined instead of 42.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
    return a + b;  // Now the function adds a and b and gives the result
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);