curl 'https://library-express-api.herokuapp.com/change-password' \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
echo
