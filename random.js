
exports.randomInt = function (min, max) {
  min = min || 1
  max = max || 100 
  return Math.round(Math.random()*(max - min)) + min
}
