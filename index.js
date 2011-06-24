var arrays = require('./arrays')
  , objects = require('./objects')
  
;[arrays,objects].reduce(objects.merge,exports)

