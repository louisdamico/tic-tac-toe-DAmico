const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartGame = function (event) {
  event.preventDefault()
  $('.game-board').delay(1000).fadeIn(1000)
  const form = event.target
  const formData = getFormFields(form)
  api.startGame(formData)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onGameCount = function (event) {
  event.preventDefault()
  api.gameCount()
    .then(ui.gameCountSuccess)
    .catch(ui.gameCountFailure)
}

const onCellChoice = function (event, checkForWinner, checkForTie) {
  event.preventDefault()
  console.log('This is the cells choice ' + store.game)
  store.currentBox = event.target.id
  const index = store.currentBox

  if (store.game.over === true) {
    return
  } else (store.game.cells[index] === '')
  // store.player = (store.player === 'X') ? 'O' : 'X'
  if (store.player === 'X') {
    // alert('THIS IS A TEST')
    $('#message-board').text('Next Turn X').show()
    store.player = 'O'
  } else {
    ($('#message-board').text('Next Turn O'))
    store.player = 'X'
  }
  api.cellChoice(index)
    .then(ui.cellChoiceSuccess)
    .catch(ui.cellChoiceFailure)
  // } else {
  //   return
  // }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCellChoice,
  onGameCount
}
