const store = require('../store')
const events = require('./events')

$('#certified').hide()
$('#message').show()
$('#start-game').hide()
$('#game-count').hide()
$('#start-message').show()

const signUpSuccess = function () {
  $('#message').text('All Signed up. Sign In To Play!')
  $('form').trigger('reset')
  $('#sign-up').delay(3500).slideUp(1500)
  // $('#sing-out').show()
}
const signUpFailure = function () {
  $('#message').text('Try A Different Email')
}

const signInSuccess = function (response) {
  $('#change-password').show()
  $('#certified').show()
  $('#message').text('Good Luck!')
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('form').trigger('reset')
  $('#sign-in').delay(1500).slideUp(1000)
  $('#sign-up').delay(2000).slideUp(1000)
  $('#login').delay(2000).slideDown(2000).hide('#login')
  $('#start-game').delay(2000).slideDown(1000)
  $('#game-count').delay(3000).slideDown(1000)
}

const signInFailure = function () {
  $('#message').show()
  $('#message').text('oops...Sign In')
}

const changePasswordSuccess = function () {
  $('#change-pw').show()
  $('#change-pw').text('Changed Successfully')
  $('#change-pw').delay(2000).slideUp(1000)
  $('form').trigger('reset')
  $('#change-password').delay(2500).slideUp(1000)
}

const changePasswordFailure = function () {
  $('#change-pw').show()
  $('#change-pw').text('oops...Try Again')
}
const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  $('#sign-up').slideDown(1000)
  $('#sign-in').delay(750).slideDown(1000)
  $('#message').delay(3500).hide('Signed Out Successfully')
  $('#login').delay(4000).show('#login')
  $('#change-password').hide()
  $('#start-message').hide()
  $('#change-pw').slideUp(1500)
  $('#sign-out').delay(3500).slideUp(1000)
  $('#start-game').delay(3000).slideUp(1000)
  $('#game-count').delay(2500).slideUp(1000)
  $('#games-played').delay(1500).slideUp(1000)
}

const signOutFailure = function () {
  $('#message').text('oops...Try Again')
}

const startGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
  for (let i = 0; i < store.game.cells.length; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }
  $('#start-message').text('Your move X, Choose Wisely!')
  $('#change-password').delay(700).slideUp(1000)
  $('#message-board').delay(1000).slideUp(1000)
  $('#change-pw').hide()
}

const startGameFailure = function (response) {
  $('#start-message').text('Login To Start Playing')
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
  $('#games-played').text('oops...Sign In First')
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
