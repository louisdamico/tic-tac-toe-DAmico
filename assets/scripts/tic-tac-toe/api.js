const config = require('../config')

const onSignUp = function () {
  return $.ajax({
    url: config.apiURL + '/tic-tac-toe'
  })
}
