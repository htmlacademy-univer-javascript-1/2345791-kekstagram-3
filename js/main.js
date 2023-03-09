let getRandom = function(min, max) {
  if (max < min) {
    return "The number range is incorrect. getRandom(min, max), where min <= max";
  }
  return Math.round(Math.random() * (max-min) + min);
}
let checkLength = function(string, maxLength) {
  return string.length <= maxLength;
}
