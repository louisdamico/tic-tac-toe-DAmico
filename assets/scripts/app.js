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
  $('#start-game').on('submit', tttEvents.onStartGame)
  // player message
  // $('#game-board).on('submit', tttEvents.onWin)
  // $('#game-board).on('submit', tttEvents.onTie)
  // $('#game-board).on('submit', tttEvents.onPlayerTurn)

  // cells
  $('.game-board').on('submit', tttEvents.onCellChoice)
  $('.game-board').on('submit', tttEvents.onPickCell)

})
