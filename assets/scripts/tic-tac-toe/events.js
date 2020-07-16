// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')

const onSignUp = function(event) {
  event.preventDefault()

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp: onSignUp
}

// //bootstrap modal//
// $('#myModal').on('hidden.bs.modal', function (e) {
//   // do something...
// })
