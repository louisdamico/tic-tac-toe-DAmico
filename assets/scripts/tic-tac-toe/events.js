const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// game play
let activeGame = true
let currentPlayer = 'X'
let cells = ['', '', '', '', '', '', '', '', '']

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
  api.startGame(formData)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
  console.log(event)
}

const onCellChoice = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.cellChoice(formData)
    .then(ui.cellChoiceSuccess)
    .catch(ui.cellChoiceFailure)
}

const onPickCell = function (event) {
  const cells = event.cellIndex
  console.log(onPickCell, cells)
}


// const onWin = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.win(formData)
//     .then(ui.winSuccess)
//     .catch(ui.winFailure)
// }
//
// const onTie = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.tie(formData)
//     .then(ui.tieSuccess)
//     .catch(ui.tieFailure)
// }
//
// const onPlayerTurn = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.tie(formData)
//     .then(ui.playerTurnSuccess)
//     .catch(ui.playerTurnFailure)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCellChoice,
  onPickCell
  // onWin,
  // onTie,
  // onPlayerTurn
}
