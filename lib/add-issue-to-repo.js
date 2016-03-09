'use strict'

var Wreck = require('wreck')
var config = require('../config')

function addIssueToRepo (options, callback) {
  var auth = 'Basic ' + new Buffer(config.GITHUB_USER + ':' + config.GITHUB_TOKEN).toString('base64')
  var url = config.GITHUB_REPO_URL + '/issues'
  var wreckOptions = {
    json: true,
    headers: {
      'Authorization': auth,
      'User-Agent': config.GITHUB_USER,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
  }
  var issue = {
    title: options.issueTitle,
    body: options.issueBody,
    assignee: options.issueAssignee,
    labels: options.issueLabels
  }

  wreckOptions.payload = JSON.stringify(issue)

  Wreck.post(url, wreckOptions, function (error, response, payload) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload)
    }
  })
}

module.exports = addIssueToRepo
