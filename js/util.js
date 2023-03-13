const getRandom = function(min, max) {
  if (max < min) {
    throw new Error("The number range is incorrect. getRandom(min, max), where min <= max");
  }
  return Math.round(Math.random() * (max-min) + min);
};
const checkLength = function(string, maxLength) {
  return string.length <= maxLength;
};
export {getRandom, checkLength};
