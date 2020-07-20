const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: ''
  })
}

const win = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.game.token
    },
    url: config.apiUrl + '/games/:over?',
    method: 'GET',
    data: formData
  })
}

const tie = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.game.token
    },
    url: config.apiUrl + '/games/:over?',
    method: 'GET',
    data: formData
  })
}

const cellChoice = function (index) {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: 'X'
        },
        over: false
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startGame,
  win,
  tie,
  cellChoice
}
