// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The code will stop and show an error straight away.

/*function square(3) {
    return num * num;
} */
// =============> write the error message here
// Uncaught SyntaxError: Unexpected number

// =============> explain this error message here
// We cant put a number inside the function brackets.
// That part is for a variable name, not a value.
// JavaScript sees `3` and gets confused.
// Also, `num` is used in the return line but it was never created.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(6)); // 36
