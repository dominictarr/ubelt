var arrays = require('./arrays')
  , objects = require('./objects')
  , types = require('./types')
  , funx = require('./functions')

;[arrays, objects, types, funx].reduce(objects.merge, exports)
