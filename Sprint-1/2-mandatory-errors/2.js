// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";

// The error happens because `cityOfBirth` is used before it is created.
// JavaScript runs code from top to bottom.

// Since `cityOfBirth` is declared after the console.log,
// JavaScript does not know what `cityOfBirth` is yet.

// Answer: We have to create the variable first, then use it.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
