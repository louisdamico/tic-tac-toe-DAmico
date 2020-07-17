#!/bin/bah

curl "https://library-express-api.herokuapp.com/sign-in" \
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
