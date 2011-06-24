
var objects = require('d-utils/objects')
  , arrays = require('d-utils/arrays')
  , u = require('d-utils')
  , it = require('it-is')
  
exports ['has all the methods from all the modules'] = function (){

  it([objects,arrays])
  .every(function (m){
  
    it(u).has(objects.map(m, function (){
      return it.function()
    }))
  
  })


}