const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Answers: 
// With our values minimum = 1 and maximum = 100, 
// `num` is a random whole number (integer) between 1 and 100, inclusive.

/*
Explanation:

1. Math.random()
   - Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
   - Example outputs: 0, 0.234, 0.999, etc.

2. (maximum - minimum + 1)
   - Calculates the size of the desired range.
   - Here: 100 - 1 + 1 = 100

3. Math.random() * (maximum - minimum + 1)
   - Scales the random decimal to the range size.
   - Example: if Math.random() = 0.5 → 0.5 * 100 = 50
   - Result is a decimal number between 0 (inclusive) and 100 (exclusive)

4. Math.floor(...)
   - Rounds the decimal down to the nearest whole number.
   - Example: Math.floor(50.9) → 50
   - Result is now an integer between 0 and (maximum - minimum) inclusive
     (0 to 99 in this case)

5. Adding 'minimum'
   - Shifts the range to start at the minimum value.
   - Example: 0 + 1 = 1, 99 + 1 = 100
   - Result: integer between minimum and maximum, inclusive

Conclusion:
- `num` is a random integer between 1 and 100 (inclusive).
- Running this multiple times will produce different random integers within this range.
*/

// Prints the random number to the console i.e when we run the program multiple times we can see different outputs
console.log(num); // e.g., 7, 24, 88, 99, etc. Each run produces a different number between 1 and 100.s
