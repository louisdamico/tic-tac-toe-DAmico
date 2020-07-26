const store = require('../store')
const events = require('./events')

const signUpSuccess = function () {
  $('#message').text('All Signed up. Good Luck!')
  $('form').trigger('reset')
  // $('#sign-up').hide()
  // $('#sing-out').show()
}
const signUpFailure = function () {
  $('#message').text('Failed To Sign Up')
}

const signInSuccess = function (response) {
  $('#message').text('Good Luck!')
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('form').trigger('reset')
  // $('#sign-in').hide()
  // $('#sign-up').hide()
}

const signInFailure = function () {
  $('#message').text('Failed To Sign In')
}

const changePasswordSuccess = function () {
  $('#message').text('Change Successful')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Failed. Try Again ')
}

const signOutSuccess = function () {
  $('#message').text('Siged Out Successfully')
}

const signOutFailure = function () {
  $('#message').text('Failed To Sign Out')
}

const startGameSuccess = function (response) {
  $('#start-message').text('Your move X, Choose Wisely!')
  console.log(response)
  store.game = response.game

  for (let i = 0; i < store.game.cells.length; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
  $('#message-board').hide()
}
const startGameFailure = function (response) {
  $('#start-message').text('Failed, sign in again.')
}

const checkForWinner = function (response) {
  if ($('#0').text() === 'X' && $('#1').text() === 'X' && $('#2').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#0').text() === 'O' && $('#1').text() === 'O' && $('#2').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#0').text() === 'X' && $('#3').text() === 'X' && $('#6').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#0').text() === 'O' && $('#3').text() === 'O' && $('#6').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#0').text() === 'X' && $('#4').text() === 'X' && $('#8').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#0').text() === 'O' && $('#4').text() === 'O' && $('#8').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#1').text() === 'X' && $('#4').text() === 'X' && $('#7').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#1').text() === 'O' && $('#4').text() === 'O' && $('#7').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#2').text() === 'X' && $('#4').text() === 'X' && $('#6').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#2').text() === 'O' && $('#4').text() === 'O' && $('#6').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#2').text() === 'X' && $('#5').text() === 'X' && $('#8').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#2').text() === 'O' && $('#5').text() === 'O' && $('#8').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#3').text() === 'X' && $('#4').text() === 'X' && $('#5').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#3').text() === 'O' && $('#4').text() === 'O' && $('#5').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#6').text() === 'X' && $('#7').text() === 'X' && $('#8').text() === 'X') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else if ($('#6').text() === 'O' && $('#7').text() === 'O' && $('#8').text() === 'O') {
    $('#message-board').text('Winner Winner Chicken Dinner ' + store.player)
    return true
  } else {
    if (store.currentBox === store.game.cells.length) {
      console.log(store.currentBox, store.game.cells.length)
      $('#message-board').text('It\'s a TIE!')
      return true
    } else {
      return false
    }
  }
}

// const playerTurn = function (response) {
//   $('#message-board').html(events.currentPlayer + '\'s turn.')
//   events.currentPlayer = response.currentPlayer
//   store.game = response.game
// }

const cellChoiceSuccess = function (response, game) {
  $(`#${store.currentBox}`).text(store.player)
  // if (store.currentBox === store.player) {
  // $('#message-board').text('Pick An Empty Spot!')
  store.game = response.game
  store.game.over = checkForWinner()
}

const cellChoiceFailure = function (response) {
  $('.cell').text('Try Again')
}

const gameCountSuccess = (response) => {
  $('#games-played').html('Total number of games played: ' + response.games.length)
}

const gameCountFailure = (response) => {
  $('#games-played').text('Login To Start Playing')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  checkForWinner,
  // playerTurn,
  cellChoiceSuccess,
  cellChoiceFailure,
  gameCountSuccess,
  gameCountFailure
}
