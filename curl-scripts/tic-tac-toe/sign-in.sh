#!/bin/bah

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
--include \
--request POST \
  --header \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

 echo
