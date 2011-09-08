var objects = require('./objects')
exports.id = function (i) {
  return i
}

exports.curry = function (/*funx, args...*/) {
  var args = [].slice.call(arguments)
    , funx = args.shift()
  return function (){
    var _args = [].slice.call(arguments)
    return funx.apply(this, objects.map(args, function (i) {
      return 'number' == typeof i ? _args[i < 0 ? _args.length + i : i] : i
    }))
  }
}
