
var objects = require('d-utils/objects')
  , arrays = require('d-utils/arrays')
  , types = require('d-utils/types')
  , u = require('d-utils')
  , it = require('it-is')
  , fs = require('fs')
  , path = require('path')

exports ['has all the methods from all the modules'] = function (){
  var ls = fs.readdirSync(path.join(__dirname, '..'))

  var lsjs = objects.map(objects.filter(ls,/^.*\.js$/),/^(.*)\.js$/)

  objects.mapKeys(lsjs, function (m){
      var mod = require('d-utils/' + m)
    return it(u).has(objects.map(mod, function (){
      return it.function()
    }))
 
  })
}
