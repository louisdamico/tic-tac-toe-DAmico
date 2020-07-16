const getFormFields = require('<path to lib>/get-form-fields.js')

$('#create-book').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)
  console.log(bookData) // returned JavaScript object
})


//bootstrap modal//
$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})
