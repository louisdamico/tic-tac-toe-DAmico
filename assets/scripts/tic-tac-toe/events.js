const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

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

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onXpick = function () {
//   event.preventDefault()
//   console.log('EVENT WORX')
//   api.pieceChoiceX()
//
// }
//
//
//
// const onCreateGame = function (event) {
//     const token = store.user.token
//     apiGame.CreateGame(token)
//      .then(ui.createGameSuccess)
//      .catch(ui.createGameError)
// }

// game play

// const startGame = document.querySelector('.start-game')
//
// let activeGame = true
//
// let playerChoice =

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
  // onXpick
}
