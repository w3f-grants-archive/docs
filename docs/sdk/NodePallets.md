# Node pallets

This functionality allows developers to query `XCM pallets` that nodes currently support. 

## Importing functionality

In order to use this functionality you first have to import it  in following way.
```js
import { getDefaultPallet, getSupportedPallets, SUPPORTED_PALLETS } from '@paraspell/sdk'
```

## Return default pallet for specific parachain node

Function returns default XCM pallet for selected compatible node.
```js
getDefaultPallet(node: TNode)
```

## Return an array of supported pallets for specific parachain node

Function returns all supported XCM pallets for selected compatible node.
```js
getSupportedPallets(node: TNode)
```

## Print all pallets that are currently supported

This returns all supported XCM pallets supported by compatible nodes as constant.
```js
console.log(SUPPORTED_PALLETS)
```