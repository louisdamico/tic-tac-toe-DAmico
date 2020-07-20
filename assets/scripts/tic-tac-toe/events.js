const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let activeGame = true
let playerPiece = 'X'
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
  store.currentBox = event.target
  const index = $(store.currentBox).data('cell-index')
  const player = playerPiece

  api.cellChoice(index, player)
    .then(ui.cellChoiceSuccess)
    .catch(ui.cellChoiceFailure)
  console.log(event)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCellChoice

}
