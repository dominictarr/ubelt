
var arrays = require('d-utils/arrays')
  , it = require('it-is')

exports ['api'] = function (){

  it(arrays).has({init: it.function (),last: it.function (),head: it.function (),tail: it.function ()})

}

exports ['init, head, tail, last'] = function (){

var x = [1,2,3,4,5,6,7,8,9,0]

  it(arrays.head(x)).deepEqual(1)
  it(arrays.last(x)).deepEqual(0)

  it(arrays.init(x)).deepEqual([1,2,3,4,5,6,7,8,9])
  it(arrays.tail(x)).deepEqual([2,3,4,5,6,7,8,9,0])

  it(x).deepEqual([1,2,3,4,5,6,7,8,9,0]) //no not mutate the array
}

exports ['empty list behaviour'] = function (){

var x = []

  it(function () {arrays.head(x) }).throws()
  it(function () {arrays.last(x) }).throws()
  it(function () {arrays.init(x) }).throws()
  it(function () {arrays.tail(x) }).throws()

}

exports ['empty'] = function (){
  it(arrays.empty([])).equal(true)
  it(arrays.empty([1])).equal(false)
}

