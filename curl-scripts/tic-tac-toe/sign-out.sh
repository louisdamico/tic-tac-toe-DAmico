curl "https://library-express-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
      "user": {
        "token": "'"${TOKEN}"'"
      }
  }'
