/*function getCardValue(card) {
    // replace with your code from key-implement
    return 11;
}*/
function getCardValue(card) {
  let rank = card.slice(0, -1);
  if (rank === "A") return 11;
  else if (rank === "J" || rank === "Q" || rank === "K") return 10;
  rank = Number(rank);
  if ((rank >= 2 && rank <= 9) || rank === 10) return rank;
  else return "invalid card rank";
}
module.exports = getCardValue;
