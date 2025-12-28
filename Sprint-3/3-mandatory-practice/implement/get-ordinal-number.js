function getOrdinalNumber(num) {
  if (num === 1) return "1st";
  if (num === 2) return "2nd";
  if (num === 3) return "3rd";
  if (num >= 4 && num <= 20) return num + "th";
  if (num > 20) {
    if (num % 10 === 1) {
      return num + "st";
    } else if (num % 10 === 2) {
      return num + "nd";
    } else if (num % 10 === 3) {
      return num + "rd";
    } else return num + "th";
  }
}
console.log(getOrdinalNumber(111));
module.exports = getOrdinalNumber;
