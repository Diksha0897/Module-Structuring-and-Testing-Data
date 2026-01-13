// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert pence into pounds and pence
function toPounds(penceInput) {
  // Convert input to string (in case it's a number)
  let penceString = penceInput.toString();

  // Remove the trailing "p" if it exists
  penceString = penceString.replace("p", "");

  // Make sure the string has at least 3 digits
  const paddedPence = penceString.padStart(3, "0");

  // Pounds = everything except the last two digits
  const pounds = paddedPence.slice(0, -2);

  // Pence = last two digits
  const pence = paddedPence.slice(-2);

  // Prints in £x.xx format
  console.log(`£${pounds}.${pence}`);
}

//  Test the function
toPounds(173); // £1.73
toPounds("11p"); // £0.11
toPounds("4000p"); // £40.00
toPounds("399p"); // £3.99
