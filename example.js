'use strict'

var reporter = require('./index')

reporter(function (error, message) {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})
