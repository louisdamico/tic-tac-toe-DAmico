'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const tttEvents = require('./tic-tac-toe/events')

$(() => {
  $('#sign-up').on('submit', tttEvents.onSignUp)
  $('#sign-in').on('submit', tttEvents.onSignIn)
  $('#change-password').on('submit', tttEvents.onChangePassword)
  $('#sign-out').on('submit', tttEvents.onSignOut)
})

//   $('#xPick').on('click', tttEvents.onXpick)
// })

// //create a new game
//  $('#new-game').on('click', gameEvents.onCreateGame)
//  $('.square').on('click', gameEvents.trackBoard)
