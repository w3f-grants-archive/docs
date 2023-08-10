# Deploy our API on your server

To deploy our API on your server you only need to create `.env` file and fill it with your secret phrase to allow for token autentification. This file should be located in root folder. You can also set request limits in that file.

Example file should look like this:
```
RATE_LIMIT_TTL_SEC=60 
RATE_LIMIT_REQ_COUNT_PUBLIC=20
RATE_LIMIT_REQ_COUNT_AUTH=100
JWT_SECRET_KEY=YourSecretPhrase
```

What each line in file means:
- `RATE_LIMIT_TTL_SEC`: This line specifies how much time is allowed to pass before request counter is reset.
- `RATE_LIMIT_REQ_COUNT_PUBLIC`: This line specifies users without token and how much requests they are allowed.
- `RATE_LIMIT_REQ_COUNT_AUTH`: This line specifies users with token and how much requests they are allowed.
- `JWT_SECRET_KEY`: This key has to be set before server is launched. Secret from which all tokens are hash derived.