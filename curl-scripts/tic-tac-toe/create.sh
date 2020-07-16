#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/tic-tac-toe"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Content-type: application/json/sign-up" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFORMATION}"'"
    }
  }'
