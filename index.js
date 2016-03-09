'use strict'

function reporter (callback) {
  return callback(null, {
    message: 'Success!'
  })
}

module.exports = reporter
