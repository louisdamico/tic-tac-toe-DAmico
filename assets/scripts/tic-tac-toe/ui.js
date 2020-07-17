
const signUpSuccess = function () {
  $('#message').text('All Signed up. Good Luck!')
}
const signUpFailure = function () {
  $('#message').text('Failed To Sign Up')
}

const signInSuccess = function () {
  $('#message').text('Good Luck!')
  store.user = response.user
}

const signInFailure = function () {
  $('#message').text('Failed To Sign In')
}

const changePasswordSuccess = function () {
  $('#message').text('Change Successful')
}
const changePasswordFailure = function () {
  $('#message').text('Failed. Try Again ')
}

const signOutSuccess = function () {
  $('#message').text('Siged Out Successfully')
}
const signOutFailure = function () {
  $('#message').text('Failed To Sign Out')
}

// const pieceChoiceX = function () {
//   $('#choiceMessage').text('X')
// }


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // pieceChoiceX
}
