'use strict'

var fs = require('fs')
var config = require('../config')

function cleanupFile (files, callback) {
  files.forEach(function (file) {
    console.log('Deletes file: ' + file)
    fs.unlinkSync(config.JOB_DIRECTORY_PATH + '/' + file)
  })
  console.log('Cleanup finished')

  return callback(null, {message: 'Ok'})
}

module.exports = cleanupFile
