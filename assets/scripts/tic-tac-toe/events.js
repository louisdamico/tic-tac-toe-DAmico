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

  api.startGame(formData)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
  console.log(event)
}

const onCellChoice = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const index = $(store.currentBox).data('cell-index')
  // const player = playerPiece
  api.cellChoice(index)
    .then(ui.cellChoiceSuccess)
    .catch(ui.cellChoiceFailure)
  console.log(index)
}

let activeGame = true
let playerPiece = 'X'
let cells = ['', '', '', '', '', '', '', '', '']
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [0, 3, 6],
  [2, 4, 6]
]

// function checkGame () {
//   let win = false
//   for (let i = 0; i <= 7; i++) {
//
//   }
// }



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCellChoice
}
