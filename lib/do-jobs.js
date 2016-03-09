'use strict'

var fs = require('fs')
var config = require('../config')
var addFileToRepo = require('./add-file-to-repo')

function doJobs (options, callback) {
  var jobsToDo = options.files.length
  var jobsDone = 0
  var messages = []

  function areWeDoneYet () {
    jobsDone++
    if (jobsToDo === jobsDone) {
      return callback(null, {message: messages.join('\n')})
    }
  }

  options.files.forEach(function (file) {
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
        areWeDoneYet()
      }
    })
  })
}

module.exports = doJobs
