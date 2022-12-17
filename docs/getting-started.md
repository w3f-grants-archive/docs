# Getting started

To get started install the following package (depending on your package manager of choice):

```sh
# npm
npm install @paraspell/sdk@0.0.11

# yarn
yarn install @paraspell/sdk@0.0.11

# pnpm
pnpm install @paraspell/sdk@0.0.11
```

Import:

```js
// ESM
import * as paraspell from '@paraspell/sdk'

// CommonJS
const { } = require('@paraspell/sdk')
```

## Currently implemented pallets
```ts
//xToken pallet:
paraspell.xTokens.transferParaToPara(api: ApiPromise, origin: origin Parachain name string, destination: destination Parachain ID, currency: currency symbol string, amount: any, to: destination address string)
paraspell.xTokens.transferParaToRelay(api: ApiPromise, origin: origin Parachain name string, currency: currency symbol string, amount: any, to: destination address string)
paraspell.xTokens.transferRelayToPara(api: ApiPromise, destination: destination Parachain ID, amount: any, to: destination address string)
//hrmp pallet:
paraspell.closeChannels.closeChannel(api: ApiPromise, origin: origin Parachain ID, inbound: number, outbound: number)
//parasSudoWrapper pallet:
paraspell.openChannels.openChannel(api: ApiPromise, origin: origin Parachain ID, destination: destination Parachain ID, maxSize: number, maxMessageSize: number)

```
Example of usage can be found in the UI repository [here](https://github.com/paraspell/ui)

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## Testing via Vitest
Some tests require localhost network to be running successfuly. 
- Make sure to have local network with defined config launched. You can learn to launch it from [ParaSpell UI repository](https://github.com/paraspell/ui).
Start UNIT tests for every available function with
```
pnpm test
```

## License
Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@paraspell/sdk?style=flat-square
[npm-version-href]: https://npmjs.com/package/@paraspell/sdk

[npm-downloads-src]: https://img.shields.io/npm/dm/@paraspell/sdk?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@paraspell/sdk

[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/@paraspell/sdk/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/@paraspell/sdk/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/@paraspell/sdk/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/@paraspell/sdk
