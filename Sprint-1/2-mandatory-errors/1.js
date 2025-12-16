// trying to create an age variable and then reassign the value by 1

//const age = 33;
//age = age + 1;

// This code will cause an error because `age` is declared using `const`.
// Variables declared with `const` cannot be reassigned or re-declared.

// `age = age + 1` attempts to change the value of `age`,
// which is not allowed when using `const`s.

// To fix this problem, we should use `let` instead of `const`,
// because `let` allows the value of a variable to be updated.

let age = 33;
age = age + 1; // age is now 34
console.log(age);
// Now the code works without errors.
