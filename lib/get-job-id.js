'use strict'

function getJobId (files) {
  var id = ''

  files.forEach(function (file) {
    if (file.indexOf('.json') > -1) {
      id = file.split('.')[0]
    }
  })

  return id
}

module.exports = getJobId
