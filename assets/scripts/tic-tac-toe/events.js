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

  console.log(event)
}

// store.totalGames = 0

store.player1 = 'X'
const onCellChoice = function (event, checkForWinner, checkForTie) {
  event.preventDefault()
  if (store.game.over === true) {
    $('#message-board').text('Game Over')
    return
  }
  // } else if ($('.cell').text() === '') {call to index
  // store.game.cells.value
  // }
// } else if { if not new suare return
store.player = (store.player === 'X') ? 'O' : 'X'

  console.log(event + ' This is the cell choice if player choice already.')
  $('#message-board').text('Pick another spot')

  store.currentBox = event.target.id
  const index = store.currentBox
  console.log('This is the index and this .cells inside on cell choice')
  console.log(index)

  api.cellChoice(index)
    .then(ui.cellChoiceSuccess)
    .catch(ui.cellChoiceFailure)
  // setTimeout(() => {
  //   console.log(ui.checkForWinner())
  // }, 1000)
  // console.log(ui.checkForWinner())
  // }
}


const playerPiece = (event) => {
  event.preventDefault()
  // store.playerChoice = event.target

  const player = $(store.player).val()

  api.cellChoice(player)
    .then(ui.pieceSuccess)
    .catch(ui.pieceFailure)
  console.log('Player: ' + event)
}




module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCellChoice,
  playerPiece
  // checkForWinner,
  // updateGameSuccess,
  // updateGameSuccess
}
