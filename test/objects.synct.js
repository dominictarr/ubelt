var objects = require('d-utils/objects')
  , it = require('it-is')

exports ['merge'] = function (){
  it(objects.merge({a: 1}, {b: 2})).deepEqual({a: 1, b: 2})
}

exports ['each'] = function (){
  var on = {a: 1,b: 2, c: 3}, count = 0
  objects.each(on, function(v,k){
    it(v).equal(on[k])
    count ++
  })
  it(count).equal(3)
}
exports ['map'] = function (){

  var on = {a: 1,b: 2, c: 3}, count = 0
  var off = 
    objects.map(on, function(v,k){
    it(v).equal(on[k])
    count ++
    return v * 2
  })
  it(count).equal(3)
  it(off).deepEqual({
    a: 2, b: 4,c: 6
  })
}