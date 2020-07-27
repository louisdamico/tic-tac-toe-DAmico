const store = require('../store')
const events = require('./events')

$('#certified').hide()
$('#start-game').hide()
$('#game-count').hide()
$('#start-message').show()

const signUpSuccess = function () {
  $('#message').text('All Signed up. Sign In To Play!').show()
  $('form').trigger('reset')
  $('#sign-up').delay(2500).slideUp(750)
  // $('#sing-out').show()
}
const signUpFailure = function () {

  $('#message').text('Try A Different Email').show()
}

const signInSuccess = function (response) {
  $('#message').show()
  $('#sign-out').delay(2500).fadeIn(750)
  $('#change-password').delay(2500).slideDown(750)
  $('#certified').delay(2500).slideDown(750)
  $('#message').text('Good Luck!')
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('form').trigger('reset')
  $('#sign-in').delay(700).slideUp(750)
  $('#sign-up').delay(1000).slideUp(750)
  $('#login').delay(1000).slideDown(1500).hide('#login')
  $('#start-game').delay(1000).slideDown(750)
  $('#game-count').delay(2000).slideDown(750)
}

const signInFailure = function () {
  $('#message').show()
  $('#message').text('oops...Sign In')
}

const changePasswordSuccess = function () {
  $('#change-pw').show()
  $('#change-pw').text('Changed Successfully')
  $('#change-pw').delay(1000).slideUp(750)
  $('form').trigger('reset')
  $('#change-password').delay(1500).slideUp(750)
}

const changePasswordFailure = function () {
  $('#change-pw').show()
  $('#change-pw').text('oops...Try Again')
}
const signOutSuccess = function () {
  $('#change-password').hide()
  $('#message').text('Signed Out Successfully')
  $('#sign-up').slideDown(750)
  $('#sign-in').delay(750).slideDown(750)
  $('#message').delay(2500).hide('Signed Out Successfully')
  $('#login').delay(3000).show('#login')
  $('#start-message').empty()
  $('#change-pw').slideUp(700)
  $('#sign-out').delay(1000).slideUp(750)
  $('#start-game').delay(700).slideUp(750)
  $('#game-count').delay(700).slideUp(750)
  $('#games-played').empty()
  $('#message').show() // this from top
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
  $('#change-password').slideUp(1000) // this
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

const cellChoiceSuccess = function (response, game) {
  $(`#${store.currentBox}`).text(store.player)
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
