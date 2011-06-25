var arrays = require('./arrays')
  , objects = require('./objects')
  , types = require('./types')

;[arrays,objects,types].reduce(objects.merge,exports)
