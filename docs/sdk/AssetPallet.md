# Asset pallet
This pallet serves to retrieve asset data from compatible nodes. User can retrieve details like `asset decimals`, `registered assets on particular node`, `check if asset is registered on node` and more.

## Retrieve assets object for specific node
This function returns `assets object` from `assets.json` for `particular node` including information about `native` and `foreign` assets.
```js
paraspell.assets.getAssetsObject('Acala')
```

## Retrieve asset id for particular node and asset
This function returns `assetId` for `particular node` and `asset symbol`
```js
paraspell.assets.getAssetId('Acala', 'DOT')
```
## Retrieve Relay chain asset Symbol for particular node
This function returns `symbol` of the Relay chain for particular node. Either "DOT" or "KSM"
```js
paraspell.assets.getRelayChainSymbol('Basilisk')
```
## Retrieve native assets for particular node
This function returns string array of `native` assets symbols for particular node
```js
paraspell.assets.getNativeAssets('Acala')
```
## Retrieve foreign assets for particular node
This function returns object array of foreign assets for particular node. Each object has symbol and assetId property
```js
paraspell.assets.getOtherAssets('Acala')
```
## Retrieve all asset symbols for particula node
Function returns string array of all assets symbols for specific node. (native and foreign assets are merged to a single array)
```js
paraspell.assets.getAllAssetsSymbols('Acala')
```
## Retrieve support for particular asset on particular node
Function checks if node supports particular asset. (Both native and foreign assets are searched). Returns boolean
```js
paraspell.assets.hasSupportForAsset(node: TNode, symbol: string)
```
## Retrieve decimals for particular asset for particular node
Function returns decimals for specific asset
```js
paraspell.assets.getAssetDecimals('Basilisk','KSM')
```
## Retrieve node id for particular node
Function returns specific node id
```js
paraspell.assets.getParaId('Basilisk')
```

## Import SDK compatible nodes as constant
Import all compatible nodes as constant
```js
paraspell.NODE_NAMES
```