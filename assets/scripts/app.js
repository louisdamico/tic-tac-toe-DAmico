'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const tttEvents = require('./tic-tac-toe/events')

$(() => {
  $('#sign-up').on('submit', tttEvents.onSignUp)
  $('#sign-in').on('submit', tttEvents.onSignIn)
  $('#change-password').on('submit', tttEvents.onChangePassword)
  $('#sign-out').on('submit', tttEvents.onSignOut)
  $('#start-game').on('click', tttEvents.onStartGame)
  $('#xoChoice').on('submit', tttEvents.onXoChoice)
  $('.cell').on('click', tttEvents.onCellChoice)
  $('#game-count').on('click', tttEvents.onGameCount)
})
