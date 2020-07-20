const store = require('../store')
const events = require('./events')

const signUpSuccess = function () {
  $('#message').text('All Signed up. Good Luck!')
}
const signUpFailure = function () {
  $('#message').text('Failed To Sign Up')
}

const signInSuccess = function (response) {
  $('#message').text('Good Luck!')
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('#certified').show()
  $('#not-certified').hide()
}

const signInFailure = function () {
  $('#message').text('Failed To Sign In')
}

const changePasswordSuccess = function () {
  $('#message').text('Change Successful')
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
  console.log('store: ', store)
  console.log('token: ', store.game)
}
const startGameFailure = function (response) {
  $('#start-message').text('Failed, sign in again.')
}

const win = function (game) {
  $('#message-board').text(events.currentPlayer + ' Wins!')
  events.currentPlayer = game.currentPlayer
  store.game = game
  console.log('store: ', store)
  console.log('token: ', store.game.token)
}
const tie = function (game) {
  $('#message-board').text('It\'s a TIE!')
  store.game = game
  console.log('store: ', store)
  console.log('token: ', store.game.token)
}

const playerTurn = function (game) {
  $('#message-board').text(events.currentPlayer + '\'s turn.')
  events.currentPlayer = game.currentPlayer
  store.game = game.game
  console.log('store: ', store)
  console.log('token: ', store.game.token)
}

const cellChoiceSuccess = function (response) {
  $(store.currentBox).text('X')
}
const cellChoiceFailure = function (response) {
  $('.cell').text('Failed')
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
  win,
  tie,
  playerTurn,
  cellChoiceSuccess,
  cellChoiceFailure
}
