function repeat(str, count) {
  if (count === 0) return "";
  if (count < 0) return "negative counts are not valid";
  let newstr = str;
  for (let i = 1; i < count; i++) {
    newstr = newstr + str;
  }
  return newstr;
}
module.exports = repeat;
