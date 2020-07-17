const config = require('../config')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiURL + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiURL + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiURL + '/change-password',
    method: 'PATCH'
  })
}

const signOut = function () {
  return $.ajax({
    header: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiURL + '/sign-out',
    method: 'DELETE'
  })
}

const pieceChoiceX = function () {
  return
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  pieceChoiceX
}
