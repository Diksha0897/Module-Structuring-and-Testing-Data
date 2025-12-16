//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction:
// This code won’t work because `cardNumber` is a number.
// The `.slice()` method only works on strings, not on numbers.

// What happens when we run it:
// JavaScript throws an error saying that `.slice()` is not a function.

// Why this error happens:
// JavaScript doesn’t know how to "slice" a number.
// It can only slice text (strings) or lists (arrays).

// Answer:
// We have to change the number into a string first, then take the last 4 characters.

const cardNumber = 4533787178994213;
let last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);