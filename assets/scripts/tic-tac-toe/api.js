const config = require('../config')

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

const changePassword = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH'
  })
}

const signOut = function () {
  return $.ajax({
    header: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/sign-out',
    method: 'DELETE'
  })
}



// ui.js ```
// const createGameSuccess = function (response) {
// console.log(response)
// }
//
// const createGameError = function (error) {
//     console.log(error)
// } ```



module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
  // pieceChoiceX
}
