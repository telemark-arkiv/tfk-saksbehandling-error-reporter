'use strict'

var fs = require('fs')
var Wreck = require('wreck')
var config = require('../config')

function addFileToRepo (options, callback) {
  var auth = 'Basic ' + new Buffer(config.GITHUB_USER + ':' + config.GITHUB_TOKEN).toString('base64')
  var url = config.GITHUB_REPO_URL + '/contents/' + options.githubFilePath
  var wreckOptions = {
    json: true,
    headers: {
      'Authorization': auth,
      'User-Agent': config.GITHUB_USER,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
  }
  var payload = {
    path: url,
    message: 'Adds new error file',
    content: fs.readFileSync(options.filePath).toString('base64')
  }

  wreckOptions.payload = JSON.stringify(payload)

  Wreck.put(url, wreckOptions, function (error, response, payload) {
    if (error) {
      return callback(error, null)
    } else {
      console.log('File added')
      return callback(null, payload)
    }
  })
}

module.exports = addFileToRepo
