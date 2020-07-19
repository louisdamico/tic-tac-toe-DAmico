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

const startGameSuccess = function (response) {
  $('#start-message').text('Your move, Choose Wisely!')
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const startGameFailure = function (response) {
  $('#start-message').text('Failed, press Start again.')
}

const win = function (response) {
  $('#message-board').text(events.currentPlayer + ' Wins!')
  events.currentPlayer = response.currentPlayer
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const tie = function (response) {
  $('#message-board').text('It\'s a TIE!')
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}

const playerTurn = function (response) {
  $('#message-board').text(events.currentPlayer + '\'s turn.')
  events.currentPlayer = response.currentPlayer
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
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
  playerTurn
}
