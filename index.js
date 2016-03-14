'use strict'

var config = require('./config')
var getFiles = require('./lib/get-files')
var getJobId = require('./lib/get-job-id')
var doJobs = require('./lib/do-jobs')
var addIssue = require('./lib/add-issue-to-repo')
var cleanupFiles = require('./lib/cleanup-files')

function reporter (callback) {
  var files = getFiles()

  function doCleanup (error, data) {
    if (error) {
      return callback(error, null)
    } else {
      cleanupFiles(getFiles(), function (err, result) {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, result)
        }
      })
    }
  }

  if (files.length > 0) {
    console.log('Found files!')
    var jobId = getJobId(files)
    var options = {
      jobId: jobId,
      files: files
    }
    var issue = {
      issueTitle: 'Ny feilmelding. Jobb: ' + jobId,
      issueAssignee: config.GITHUB_ASSIGNEE,
      issueLabels: [
        'error'
      ]
    }
    console.log('Adding ' + files.length + ' files')
    console.log('JobId: ' + jobId)
    doJobs(options, function (error, data) {
      if (error) {
        return callback(error, null)
      } else {
        console.log('Files added')
        console.log('Adding issue')
        issue.issueBody = data.message
        addIssue(issue, doCleanup)
      }
    })
  } else {
    return callback(null, {message: 'Nothing to do'})
  }
}

module.exports = reporter
