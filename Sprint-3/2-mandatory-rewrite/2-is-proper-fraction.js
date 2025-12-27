/*
function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  // add your completed function from key-implement here
} 
*/
function isProperFraction(numerator, denominator) {
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  if (numerator < denominator) return true;
  else if (numerator > denominator) return false;
  else if (numerator === denominator) return false;
}
module.exports = isProperFraction;
