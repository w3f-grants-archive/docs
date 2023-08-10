# Upgrade your amount of requests per minute

As request amount per minute is limited to prevent possibilities of DDoS attacks we offer three different levels of limits to best suit your project needs. All levels are completely free and this page covers guide on how to acquire each one of them. 

## Standard user
As standard user you do not need to do any action and are free to use XCM API right away.

Limit for this level is:
`20 requests per minute`

## Capcha verified user
To become capcha verified user you have to complete simple cacha verification.

Before you proceed with verification note following:
- After you verify with capcha you will receive your autentification token which you can use to unlock higher request limit.
- This token is only visible once so make sure to save it properly.
- These tokens are not saved anywhere by us so we could not restore them for you.
 
 You can claim your token on the following site (API has to be running):  
`http://localhost:3001/generate-api-key`

Limit for this level is:
`100 requests per minute`

## How to implement token into dApp or REST API client

### REST API Client
This guide shows how to implement token into API Client ([Insomnia](https://insomnia.rest/download) in this case)
There are 2 ways. 

First is to implement key into API-KEY section.
<img width="717" alt="Screenshot 2023-08-10 at 20 58 02" src="https://user-images.githubusercontent.com/55763425/259851206-26862032-2cd3-46fb-a5f7-f59c33405174.png">

Second way is to implement key into HEADERS section.
<img width="717" alt="Screenshot 2023-08-10 at 20 57 47" src="https://user-images.githubusercontent.com/55763425/259851194-34a78830-697c-4c20-901f-9b230fb278b1.png">

Make sure to name key as `X-API-KEY` otherwise your key won't be recognized.

### In-app token integration
Following snippet can be observed. See `Headers` section where api key is inserted.
```js
const response = await fetch(
        'http://localhost:3001/x-transfer?' +
          new URLSearchParams({
            //Method parameters should be here
            //For eg. from: 'Basilisk'
          }),
        { headers: new Headers({ 'X-API-KEY': '<API_KEY>' }) }, //This is where you implement your API token
      );
```

As observed in above snippet, adding following line into fetch request allows for updating request count per minute.
```js
{ headers: new Headers({ 'X-API-KEY': '<API_KEY>' }) }, //This is where you implement your API token
```
