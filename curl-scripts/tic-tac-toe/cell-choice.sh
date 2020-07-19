#!/bin/bah

curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index":
        "value":
      }'

echo
