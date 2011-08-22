
//
// wrap a function with setTimeout but let it be called like normal.
//

var delay = exports.delay = function (laters, time) {
  time = time || 0
  return function () {
    var args = [].slice.call(arguments)
    return setTimeout(function () {
      laters.apply(null, args)
    }, time)  
  }
}

// 
// recursively compose async function.
// the next function becomes the callback of the first
// otherwise, the next function is called with the args of the first callback
//
// nothing special is done to the error parameter
//

exports.compose = compose

function compose () {
  var funx = [].slice.call(arguments)
  if(funx.length <= 1)
    return funx[0]
  var f1 = funx.shift()
  var f2 = funx.shift()
  
  funx.unshift(function () {
    var args = [].slice.call(arguments)
    var callback = args.pop()
    args.push(function () {
      var args = [].slice.call(arguments)
      args.push(callback)    
      f2.apply(this, args)   
    })
    f1.apply(this, args)   
  })
  return compose.apply(null, funx)
}
