

function empty(array){
  return !!!array.length
}

function throwIfEmpty (array, method){
  if(!array.length){
    var err = new Error('arrays.' + method + ' cannot take an empty array')
    err.type = 'EmptyArray'
    throw err
  }
}

function init (array){
  throwIfEmpty(array)
  return [].slice.call(array, 0, array.length - 1)
}
function tail(array){
  throwIfEmpty(array)
  return [].slice.call(array, 1, array.length )
}
function last(array){
  throwIfEmpty(array)
  return array[array.length -1]  
}
function head(array){
  throwIfEmpty(array)
  return array[0]  
}

module.exports = {
  throwIfEmpty: throwIfEmpty,
  init: init,
  tail: tail,
  last: last,
  head: head,
  empty: empty
}