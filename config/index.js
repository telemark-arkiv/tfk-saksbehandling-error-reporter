'use strict'

var config = {
  CALLBACK_STATUS_MESSAGE: process.env.TFK_SER_CALLBACK_STATUS_MESSAGE || 'Varselbrev produsert',
  JOB_DIRECTORY_PATH: process.env.TFK_SER_JOB_DIRECTORY_PATH || 'test/data/errors',
  GITHUB_REPO_URL: process.env.TFK_SER_GITHUB_REPO_URL || 'https://api.github.com/repos/:user/:repo',
  GITHUB_USER: process.env.TFK_SER_GITHUB_USER || 'yourgithubuser',
  GITHUB_ASSIGNEE: process.env.TFK_SER_GITHUB_ASSIGNEE || 'githubassigneeuser',
  GITHUB_TOKEN: process.env.TFK_SER_GITHUB_TOKEN || 'yourgithubtoken'
}

module.exports = config
