'use strict'

var fs = require('fs')
var config = require('../config')

function filterFilesList (files) {
  var list = []

  files.forEach(function (file) {
    if (file.indexOf('.json') > -1) {
      list.push(file)
    }
  })

  return list
}