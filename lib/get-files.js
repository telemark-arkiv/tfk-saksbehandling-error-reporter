'use strict'

var fs = require('fs')
var config = require('../config')
var validFiles = ['json', 'pdf']

function filterFilesList (files) {
  var list = []

  files.forEach(function (file) {
    var fileSplit = file.split('.')
    var fileEnd = fileSplit[fileSplit.length - 1]
    if (validFiles.indexOf(fileEnd) > -1) {
      list.push(file)
    }
  })

  return list
}

function getFiles () {
  return filterFilesList(fs.readdirSync(config.JOB_DIRECTORY_PATH))
}

module.exports = getFiles
