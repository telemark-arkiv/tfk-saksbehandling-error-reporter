'use strict'

var config = require('../config')
var addFileToRepo = require('./add-file-to-repo')

function doJobs (options, callback) {
  var messages = []

  function next () {
    if (options.files.length > 0) {
      var file = options.files.pop()
      var job = {
        githubFilePath: options.jobId + '/' + file,
        filePath: config.JOB_DIRECTORY_PATH + '/' + file
      }
      console.log('Adding file: ' + file)
      addFileToRepo(job, function (error, data) {
        if (error) {
          return callback(error, null)
        } else {
          var line = '[' + data.content.name + '](' + data.content.html_url + ')'
          messages.push(line)
          next()
        }
      })
    } else {
      return callback(null, {message: messages.join('\n')})
    }
  }

  next()
}

module.exports = doJobs
