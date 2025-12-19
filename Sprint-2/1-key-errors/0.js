// Predict and explain first...
//  =============> write your prediction here
//This code will cause an error when it runs.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

// =============> write your explanation here

/* 'str' is already the input of the function.
 Here, we tried to create another variable called `str` using `let`.
 JavaScript doesn’t allow that, so it crashes.*/

// =============> write your new code here
// We need to change the name of the variable inside the function.

function capitalise(str) {
  let result = str[0].toUpperCase() + str.slice(1);
  return result;
}
// Now when we call the function, it should work without errors
console.log(capitalise("hello")); // Output: "Hello"
