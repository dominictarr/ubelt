
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

var map = exports.map = function (obj,iterator){
  if(Array.isArray(obj))
    return obj.map(iterator)
  
  var keys = Object.keys(obj)
    , r = {}
  keys.forEach(function (key){
    r[key] = iterator(obj[key],key,obj) 
  })
  return r
}