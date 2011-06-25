
//
// adds all the fields from obj2 onto obj1
//

var each = exports.each = function (obj,iterator){
 var keys = Object.keys(obj)
 keys.forEach(function (key){
  iterator(obj[key],key,obj) 
 })
}

var merge = exports.merge = function (obj1,obj2){
  var keys = Object.keys(obj2)
  each(obj2, function (v,k){
    obj1[k] = v  
  })
  return obj1
}

var RX = /sadf/.constructor
function rx (iterator ){
  return iterator instanceof RX ? function (str) { 
      var m = iterator(str)
      return m && (m[1] ? m[1] : m[0]) 
    } : iterator
}

var map = exports.map = function (obj,iterator){
  iterator = rx (iterator)
  if(Array.isArray(obj))
    return obj.map(iterator)
  
  var keys = Object.keys(obj)
    , r = {}
  keys.forEach(function (key){
    r[key] = iterator(obj[key],key,obj) 
  })
  return r
}

//this will make instanceof work in the repl

var filter = exports.filter = function (obj, iterator){
  iterator = rx (iterator)
  if(Array.isArray(obj))
    return obj.filter(iterator)
  

  if(Array.isArray(obj))
    return obj.filter(iterator)
  
  var keys = Object.keys(obj)
    , r = {}
  keys.forEach(function (key){
    var v = iterator(obj[key],key,obj)
    if(v)
      r[key] = v
  })
  return r 
}

var mapKeys = exports.mapKeys = function (ary, iterator){
  var r = {}
  each(ary, function (v,k){
    r[v] = iterator(v,k)
  })
  return r
}