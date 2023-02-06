# Getting started

#### Since version 1.0.0
Our SDK introduced all Polkadot libraries as peer dependencies. Reason for this is, that most of the projects use these libraries in some way already and it fixes issues with unmet dependency warnings. Make sure your project have them. You can install them by following command:

##### Install dependencies via npm
```sh
npm install @polkadot/api @polkadot/types @polkadot/api-base @polkadot/apps-config
```

##### Install dependencies via yarn
```sh
yarn install @polkadot/api @polkadot/types @polkadot/api-base @polkadot/apps-config
```

##### Install dependencies via pnpm
```sh
pnpm install @polkadot/api @polkadot/types @polkadot/api-base @polkadot/apps-config
```

**To get started install the following package (depending on your package manager of choice):**
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

