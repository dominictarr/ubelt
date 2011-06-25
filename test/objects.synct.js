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
exports ['filter'] = function (){
  
  var on = {a: 1,b: 2, c: 3, d:4, e:5, f:6, g:7}, count = 0
 
  it(objects.filter(on, function (x){
    return !(x % 2)
  })).deepEqual({b: true, d:true, f:true})
}

exports ['filter with regexp'] = function (){
  
  var on = [ '.git',
    'test',
    'objects.js',
    'index.js',
    'package.json',
    'types.js',
    'readme.markdown',
    '.gitignore',
    'arrays.js' ], count = 0
 
  it(objects.filter(on, /^.*\.js$/))
  .deepEqual([ 
    'objects.js',
    'index.js',
    'types.js',
    'arrays.js' ])
}

exports ['mapKeys -- create a object from a list of keys and a function'] = function (){

  var keys = ['foo','bar','xux']
  
  it(objects.mapKeys(keys, function (k){
      return k.toUpperCase()
  })).deepEqual({foo: 'FOO', bar: 'BAR', xux: 'XUX'})

}

exports ['mapToArray'] = function (){

  var on = {a: 1,b: 2, c: 3, d:4, e:5, f:6, g:7}, count = 0

  it(objects.mapToArray(on,function (v){
    return v
  })).deepEqual([1,2,3,4,5,6,7])
  
}