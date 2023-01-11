# Getting started

To get started install the following package (depending on your package manager of choice):

```sh
# npm
npm install @paraspell/sdk

# yarn
yarn install @paraspell/sdk

# pnpm
pnpm install @paraspell/sdk
```

## Importing package
After installing package there are two ways of importing it:

### 1. Builder pattern - in case you plan to use XCM & XCMP functionality only
This way allows you to enhance builder pattern and construct your calls in simple way.
```js
import { Builder } from '@paraspell/sdk'
```

### 2. Classic pattern and Asset pallet functionality
```js
// ESM
import * as paraspell from '@paraspell/sdk'

// CommonJS
const { } = require('@paraspell/sdk')
```

