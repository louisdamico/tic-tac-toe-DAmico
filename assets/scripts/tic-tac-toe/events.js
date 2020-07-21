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

const cells = ['', '', '', '', '', '', '', '', '']

const onCellChoice = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const index = $(store.currentBox).data('cell-index')
  api.cellChoice(index)
    .then(ui.cellChoiceSuccess)
    .catch(ui.cellChoiceFailure)

  this.cells = Array.from(event.target, cells.length[-1])
  console.log(index, this.cells)
}

const playerPiece = (event, onCellChoice) => {
  event.preventDefault()
  store.playerChoice = event.target
  const player = $(store.playerChoice).val()

  api.cellChoice(player)
    .then(ui.pieceSuccess)
    .catch(ui.pieceFailure)
  console.log('Player: ' + event)
}

// const playerTurn = (event) => {
//   let i = cells[length-1]
//   if (cells[i] === store.playerChoice) {
//     api.
// }



// let turn = true
//
// const onUpdateGame = function (clickedCellEvent) {
//   // console.log(clickedCellEvent)
//   const clickedCell = clickedCellEvent.target
//   const index = $(clickedCell).data('cell-index')
//   // store.clickedBox = clickedCellEvent.target
//   console.log(index)
//
// const playerTurn = turn ? 'X' : 'O'
//   if (clickedCellEvent.target.innerText === '') {
//     clickedCellEvent.target.innerText = player
//     api.updateGame(index, player, false)
//       .then(ui.updateGameSuccess)
//       .catch(ui.updateGameFailure)
//     turn = !turn
//   }
//   store.playerTurn = .playerTurn





// const computerPiece = 'O'
//
// this.checkForWinner = function () {
//   let winner = false
// const winningCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [0, 3, 6],
//   [2, 4, 6]
// ]
//
// const positions = this.positions
//
//     winningCombos.forEach((winCombo) => {
//       const pos0 = position[winningCombos[0]].innerText
//       const pos1 = position[winningCombos[1]].innerText
//       const pos2 = position[winningCombos[2]].innerText
//       const onWinningCombo = pos0 !== '' &&
//         pos0 === pos1 && pos1 === pos2
//
//       if (onWinningCombo) {
//         winner = true
//         winCombo.forEach((index) => {
//           positions[index].className += ' Winner!'
//         })
//       }
//     })
//
//     return winner
// }

//
// const tttGame = new TttGame()
// tttGame.start()
//
// function Game() {
//   const board = new Board()
//   const humanPlayer = new HumanPlayer(board)
//   const computer = new Computer(board)
//   let turn = 0
//   this.start = function () {
//   }
// }
//
// function board (onCellChoice) {
//   this.position = Array.from(onCellChoice)
// }
//
//
// this.start = function () {
//
// }
// function takeTurn () {
//   if (turn % 2 === 0) {
//     humanPlayer.takeTurn()
//   } else {
//     computerPlayer.takeTurn()
//   }
//   turn++
//   }
//   function humanPlayer (board) {
//     this.takeTurn = function () {
//
//       board.positions
//         .forEac
//     }
//
//
//   function computer (board) {
//     this.takeTurn = function() {
//       const availPositions =
//       board.positions.filter((p) => p.innerText === '')
//     const move = Math.floor(Math.random() * availPositions.length)
//     availPositions[move].innerText = 'O'
//   }
// }

// function checkGame () {
//   let win = false
//   for (let i = 0; i <= 7; i++) {
//     const winCombo = winCombos[i]
//     let a = cells[winCombo[0]]
//     let b = cells[winCombo[1]]
//     let c = cells[winCombo[2]]
//     if (a === '' || b === '' || c === '') {
//       continue
//     }
//     if (a === b && b === c) {
//       win = true
//       break
//     }
//   }
//   if (win) {
//     result = false
//     return
//   }
//   let tie = !cells.includes('')
//   if (tie) {
//
//   }
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onCellChoice,
  playerPiece
}
