'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const tttEvents = require('./tic-tac-toe/events')

$(() => {
  $('#sign-up').on('submit', tttEvents.onSignUp)
  $('#sign-in').on('submit', tttEvents.onSignIn)
  $('#change-password').on('submit', tttEvents.onChangePassword)
  $('#sign-out').on('submit', tttEvents.onSignOut)
  // create a new game
  $('#start-game').on('click', tttEvents.onStartGame)

  $('#xoChoice').on('submit', tttEvents.onXoChoice)
  // cells
  $('.cell').on('click', tttEvents.onCellChoice)
  $('.pick').on('click', tttEvents.playerPiece)
})
