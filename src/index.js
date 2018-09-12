// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var currency = currency;
  if(currency <= 0) return {};
  if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  var mapping = {
    50: "H",
    25: "Q",
    10: "D",
    5: "N",
    1: "P"
  }
  var resExchange = {};
  for(value of Object.keys(mapping).sort((a, b) => b - a)) {
    let s = Math.floor(currency/+value);
    if (s > 0) { resExchange[mapping[value]] = s};console.log(resExchange);
    currency = currency % value;
    if(currency === 0) return resExchange;
  }
}
