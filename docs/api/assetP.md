# Asset pallet
This pallet serves to retrieve asset data from compatible Parachains. User can retrieve details like `asset decimals`, `registered assets on particular Parachain`, `check if the asset is registered on Parachain` and more.

### Package-less implementation of XCM API Asset features into your application

```JS
const response = await fetch(
    "http://localhost:3001/assets/parameters?" + //Replace "parameters" with your desired action eg. "Acala/native" 
);

console.log(response) //use response data as necessary
```

This snippet should work on most javascript/typescript frameworks as it is standard http request.


## Retrieve assets object for a specific Parachain
Following endpoint retrieves all assets on specific Parachain as object.

**Endpoint**: `GET /assets/:node`


   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.

   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Statemint");
```

## Retrieve asset id for particular Parachain and asset
Following endpoint returns asset id for specific asset on specific Parachain.

**Endpoint**: `GET /assets/:node/id/:symbol`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.
     - `symbol` (path parameter): Specifies the currency symbol of the asset.

   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `404` (Bad request): When an asset with a specified currency symbol does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Interlay/id/USDT");
```

## Retrieve the Relay chain asset Symbol for a particular Parachain
Following endpoint returns Relay chain asset symbol for specific Parachain.

**Endpoint**: `GET /assets/:node/relay-chain-symbol`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.
    
   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Astar/relay-chain-symbol");
```

## Retrieve native assets for a particular Parachain
Following endpoint retturns native assets of specific Parachain.

**Endpoint**: `GET /assets/:node/native`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.

   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Kylin/native");
```

## Retrieve foreign assets for a particular Parachain
Following endpoint returns foreing assets of specific Parachain.

**Endpoint**: `GET /assets/:node/other`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.

   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Statemine/other");
```

## Retrieve all asset symbols for particular Parachain
Following endpoint returns all asset symbols for specific Parachain.

**Endpoint**: `GET /assets/:node/all-symbols`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.

   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Moonbeam/all-symbols");
```

## Retrieve support for a particular asset on a particular Parachain
Following endpoint returns boolean value that confirms if asset is registered on specific Parachain or not.

**Endpoint**: `GET /assets/:node/has-support/:symbol`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.
     - `symbol` (path parameter): Specifies the symbol of the asset.

   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `404` (Bad request): When an asset with a specified currency symbol does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/HydraDX/has-support/DOT");
```


## Retrieve decimals for a particular asset for a particular Parachain
Following endpoint retrieves specific asset decimals on specific Parachain.

**Endpoint**: `GET /assets/:node/decimals/:symbol`

- **Parameters**:
    - `node` (path parameter): Specifies the name of the Parachain.
    - `symbol` (path parameter): Specifies the currency symbol.

- **Errors**:
    - `400` (Bad request): When a specified Parachain does not exist.
    - `404` (Bad request): When an asset with a specified currency symbol does not exist.
    - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Basilisk/decimals/BSX");
```

## Retrieve Parachain id for a particular Parachain
Following endpoint retrieves Parachain ID from Parachain name

 **Endpoint**: `GET /assets/:node/para-id`

   - **Parameters**:
     - `node` (path parameter): Specifies the name of the Parachain.
   - **Errors**:
     - `400` (Bad request): When a specified Parachain does not exist.
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/Acala/para-id");
```

## Retrieve Parachain name from Parachain ID
Following endpoint retrieves Parachain name from Parachain ID.

**Endpoint**: `GET /assets/:paraId`

- **Parameters**:
    - `paraId` (path parameter): Specifies the parachain ID.

- **Errors**:
    - `404` (Bad request): When Parachain with a specified parachain ID does not exist.
    - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets/2090");
```

## Retrieve list of implemented Parachains
Following endpoint retrieves array of implemented Parachains.

**Endpoint**: `GET /assets`

   - **Parameters**: None.
   - **Errors**: 
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.


**Example of request:**
```js
const response = await fetch("http://localhost:3001/assets");
```