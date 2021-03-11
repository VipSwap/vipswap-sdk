
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vipswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./vipswap-sdk.cjs.development.js')
}
