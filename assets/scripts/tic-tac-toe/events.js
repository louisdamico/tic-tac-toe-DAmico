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
  const form = event.target
  const formData = getFormFields(form)
  store.player = 'O'
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

  store.currentBox = event.target.id
  const index = store.currentBox
  if (store.game.over === true) {
    $('#message-board').text('Game Over')
    return
  } else if (store.game.cells[index] === '') {
    store.player = (store.player === 'X') ? 'O' : 'X'
    $('#message-board').text('Pick another spot')
    api.cellChoice(index)
      .then(ui.cellChoiceSuccess)
      .catch(ui.cellChoiceFailure)
  } else {
    return
  }
}

function openNav () {
  document.getElementById("mySidenav").style.width = "225px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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
