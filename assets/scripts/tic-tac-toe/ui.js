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

const startGameSuccess = function (game) {
  $('#start-message').text('Your move, Choose Wisely!')
  console.log(game)
  store.game = game.game

  for (let i = 0; i < store.game.cells.length; i++) {
    $(`#${i}`).text(store.game.cells[i])
  }

  console.log('token: ', store.game)
}
const startGameFailure = function (response) {
  $('#start-message').text('Failed, sign in again.')
}

const win = function (response) {
  $('#message-board').text(events.currentPlayer + ' Wins!')
  events.currentPlayer = response.currentPlayer
  store.game = response.game
  console.log('store: ', store)
  console.log('token: ', store.game.token)
}
const tie = function (response) {
  $('#message-board').text('It\'s a TIE!')
  store.game = response.game
  console.log('store: ', store)
  console.log('token: ', store.game.token)
}

const playerTurn = function (response) {
  $('#message-board').text(events.currentPlayer + '\'s turn.')
  events.currentPlayer = response.currentPlayer
  store.game = response.game
  console.log('store: ', store)
  console.log('token: ', store.game.token)
}

const cellChoiceSuccess = function (response) {
  console.log('This is the response cell choice success', response)
  $(`#${store.currentBox}`).text(store.player)
}
const cellChoiceFailure = function (response) {
  $('.cell').text('Failed')
}
// change store.playerChoice.innerText for picking X & O
const pieceSuccess = (response) => {
  $('#choiceMessage').text('You chose: ' + store.player)
}
const pieceFailure = (response) => {
  $('#choiceMessage').text('Failed. pick again')
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
  // win,
  // tie,
  playerTurn,
  cellChoiceSuccess,
  cellChoiceFailure,
  pieceSuccess,
  pieceFailure
}
