# xcmPallet

This pallet is a flagship XCM API pallet and serves to create XCM calls between different Polkadot and Kusama ecosystem chains. 

### There are three scenarios for XCM calls in this pallet:
- Relay chain to Parachain XCM transfer  (DMP Downward message passing)
- Parachain to Relay chain XCM transfer (UMP Upward message passing)
- Parachain to Parachain XCM transfer (HRMP Horizontally Relay routed message passing)

### Package-less implementation of XCM API XCM features into your application

```JS
//Chain WS API instance that will send generated XCM Call
const wsProvider = new WsProvider('YourChainWSPort'); //Specify "YourChainWSPort" with WS Port of sender chain 
const api = await ApiPromise.create({ provider: wsProvider });

const response = await fetch(
    "http://localhost:3001/x-transfer?" +
    new URLSearchParams({
        //Method parameters should be here
        //For eg. from: 'Basilisk'
    })
);

//Constant required for every endpoint (As this is output they will provide)
const {   
    module,
    section,
    parameters
} =

await response.json();

//Response received is parsed to the call
const promise = api.tx[module][section](
    ...parameters
);

//Promise is then signed and can be subscribed to extrinsics
promise.signAndSend(address, { signer: injector.signer }, ({ status, txHash }) => {
```

## Construct XCM call from Relay chain to Parachain (DMP)
Following endpoint constructs Relay chain to Parachain XCM message. This message is constructed by providing `to` parameter.

**Endpoint**: `POST /x-transfer`

   - **Parameters**:
     - `to` (Query parameter): (required): Represents the Parachain to which the assets will be transferred.
     - `amount` (Query parameter): (required): Specifies the amount of assets to transfer. It should be a numeric value.
     - `address` (Query parameter): (required): Specifies the address of the recipient.

   - **Errors**:
     - `400`  (Bad request exception) - Returned when query parameters  'to' is not provided
     - `400`  (Bad request exception) - Returned when query parameters  'to' is not a valid Parachains
     - `400`  (Bad request exception) - Returned when query parameter 'currency' is expected but not provided
     - `400`  (Bad request exception) - Returned when query parameter 'currency' is not a valid currency
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.

**Example of request:**
```js
const response = await fetch(
    "http://localhost:3001/x-transfer?" +
    new URLSearchParams({
        to: "Statemine",
        amount: "1000000000000",
        address: "5F5586mfsnM6durWRLptYt3jSUs55KEmahdodQ5tQMr9iY96"
    })
);
```

AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Construct XCM call from Parachain chain to Relay chain (UMP)
Following endpoint constructs Parachain to Relay chain XCM message. This message is constructed by providing `from` parameter.

**Endpoint**: `POST /x-transfer`

   - **Parameters**:
     - `from` (Query parameter): (required): Represents the Parachain from which the assets will be transferred.
     - `amount` (Query parameter): (required): Specifies the amount of assets to transfer. It should be a numeric value.
     - `address` (Query parameter): (required): Specifies the address of the recipient.

   - **Errors**:
     - `400`  (Bad request exception) - Returned when query parameters  'from' is not provided
     - `400`  (Bad request exception) - Returned when query parameters  'from' is not a valid Parachains
     - `400`  (Bad request exception) - Returned when query parameter 'currency' is expected but not provided
     - `400`  (Bad request exception) - Returned when query parameter 'currency' is not a valid currency
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.

**Example of request:**
```js
const response = await fetch(
    "http://localhost:3001/x-transfer?" +
    new URLSearchParams({
        from: "Basilisk",
        amount: "1000000000000",
        address: "5F5586mfsnM6durWRLptYt3jSUs55KEmahdodQ5tQMr9iY96"
    })
);
```

AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Construct XCM call from Parachain to Parachain (HRMP)
Following endpoint allows got creation of Parachain to Parachain XCM call. This call is specified by Parachains selected as origin - `from` and destination - `to` parameters.

**Endpoint**: `POST /x-transfer`

   - **Parameters**:
     - `from` (Query parameter): (required): Represents the Parachain from which the assets will be transferred.
     - `to` (Query parameter): (required): Represents the Parachain to which the assets will be transferred.
     - `currency` (Query parameter): (required): Represents the asset being sent. It should be a string value.
     - `amount` (Query parameter): (required): Specifies the amount of assets to transfer. It should be a numeric value.
     - `address` (Query parameter): (required): Specifies the address of the recipient.

   - **Errors**:
     - `400`  (Bad request exception) - Returned when query parameters 'from' or 'to' are not provided
     - `400`  (Bad request exception) - Returned when query parameters 'from' or 'to' are not a valid Parachains
     - `400`  (Bad request exception) - Returned when query parameter 'currency' is expected but not provided
     - `400`  (Bad request exception) - Returned when query parameter 'currency' is not a valid currency
     - `400`  (Bad request exception) - Returned when entered nodes 'from' and 'to' are not compatible for transaction
     - `500`  (Internal server error) - Returned when an unknown error has occured. In this case please open an issue.

**Example of request:**
```js
const response = await fetch(
    "http://localhost:3001/x-transfer?" +
    new URLSearchParams({
        from: "Basilisk",
        to: "Karura",
        currency: "KSM",
        amount: "1000000000000",
        address: "5F5586mfsnM6durWRLptYt3jSUs55KEmahdodQ5tQMr9iY96"
    })
);
```

AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## List of implemented Polkadot/Kusama Chains

### Relay chains
| Node name | Website | Github | Polkadot.js | Supported XCM Pallet | Current latest XCM Version|
| ------------- | ------------- | ------------- |------------- |------------- |------------- |
| Polkadot | [Website](https://www.parity.io/) |-| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/explorer) | polkadotXCM | XCM V3 |
| Kusama | [Website](https://www.parity.io/) |-| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/explorer) | polkadotXCM | XCM V3 |

### Polkadot Parachains
| Node name | Website | Github | Polkadot.js |Node id | Supported XCM Pallet | Current latest XCM Version |
| ------------- | ------------- | ------------- |------------- |------------- |------------- |------------- |
| Statemint | [Website](https://www.parity.io/) |[Github](https://github.com/paritytech/cumulus)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstatemint.api.onfinality.io%2Fpublic-ws#/explorer)|1000 | polkadotXCM | XCM V3 |
| Acala | [Website](https://acala.network/) |[Github](https://github.com/AcalaNetwork/Acala)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2F1rpc.io%2Faca#/explorer)|2000 | xTokens |XCM V3 |
| Astar | [Website](https://astar.network/) |[Github](https://github.com/AstarNetwork/Astar)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar-rpc.dwellir.com#/explorer)|2006 | polkadotXCM |XCM V3 |
| BifrostPolkadot | [Website](https://thebifrost.io/) |[Github](https://github.com/bifrost-finance/bifrost)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fhk.p.bifrost-rpc.liebi.com%2Fws#/explorer)| 2030| xTokens |XCM V3 |
| Centrifuge | [Website](https://centrifuge.io/) |[Github](https://github.com/centrifuge/centrifuge-chain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fcentrifuge-parachain.api.onfinality.io%2Fpublic-ws#/explorer)|2031 | xTokens |XCM V1 |
| Clover | [Website](https://clv.org/) |[Github](https://github.com/clover-network/clover)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-para.clover.finance#/explorer)|2002 | xTokens |XCM V1 |
| ComposableFinance | [Website](https://www.composable.finance/) |[Github](https://github.com/ComposableFi/)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.composable.finance#/explorer)|2019 | relayerXcm |XCM V3 |
| Crust | [Website](https://crust.network/?ref=parachains-info) |[Github](https://github.com/crustio/crust)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fcrust-parachain.crustapps.net#/explorer)|2008 | xTokens |XCM V1 |
| Darwinia | [Website](https://darwinia.network/) |[Github](https://github.com/darwinia-network/darwinia)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fparachain-rpc.darwinia.network#/explorer)|2046 | polkadotXCM |XCM V3 |
| Efinity | [Website](https://enjin.io/efinity-crowdloan?ref=parachains-info) |[Github](https://github.com/enjin/claims-substrate)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fefinity.api.onfinality.io%2Fpublic-ws#/explorer)| 2021 | xTokens |XCM V3 |
| Equilibrium | [Website](https://equilibrium.io/?ref=parachains-info) |[Github](https://github.com/equilibrium-eosdt/equilibrium-substrate-chain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fequilibrium-rpc.dwellir.com#/explorer)| 2011 | polkadotXcm |XCM V1 |
| HydraDX | [Website](https://hydradx.io/) |[Github](https://github.com/galacticcouncil/HydraDX-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/explorer)| 2034| xTokens |XCM V3 |
| Interlay | [Website](https://interlay.io/) |[Github](https://github.com/interlay/interbtc)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi.interlay.io%2Fparachain#/explorer)| 2032 | xTokens |XCM V3 |
| Kylin | [Website](https://www.kylin.network/) |[Github](https://github.com/Kylin-Network/kylin-collator)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.kylin-node.co.uk#/explorer)|2052 | ormlXTokens |XCM V1 |
| Litentry | [Website](https://litentry.com/) |[Github](https://github.com/litentry/litentry-parachain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Flitentry-rpc.dwellir.com#/explorer)|2013 | xTokens |XCM V1 |
| Moonbeam | [Website](https://moonbeam.network/) |[Github](https://github.com/PureStake/moonbeam)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmoonbeam.api.onfinality.io%2Fpublic-ws#/explorer)|2004 | xTokens |XCM V3 |
| Parallel | [Website](https://parallel.fi/) |[Github](https://github.com/parallel-finance/parallel)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fparallel.api.onfinality.io%2Fpublic-ws#/explorer)|2012| xTokens |XCM V1 |
| Unique | [Website](https://unique.network/?ref=parachains-info) |[Github](https://github.com/usetech-llc/polkadot_api_dotnet)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu-ws.unique.network%2F#/explorer)|2037| xTokens |XCM V3 |


### Kusama Parachains
| Node name | Website | Github | Polkadot.js |Node id | Supported XCM Pallet | Current latest XCM Version |
| ------------- | ------------- | ------------- |------------- |------------- |------------- |------------- |
| Statemine | [Website](https://www.parity.io/) |[Github](https://github.com/paritytech/cumulus)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstatemine-rpc.dwellir.com#/explorer)|1000 | polkadotXCM |XCM V3 |
| Encointer | [Website](https://encointer.org/) |[Github](https://github.com/encointer/encointer-parachain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.api.encointer.org#/explorer)|1001 | polkadotXCM |XCM V1 |
| Altair | [Website](https://centrifuge.io/altair/) |[Github](https://github.com/centrifuge/centrifuge-chain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Faltair.api.onfinality.io%2Fpublic-ws#/explorer)| 2088| xTokens |XCM V1 |
  | Amplitude | [Website](https://pendulumchain.org/amplitude?utm_source=parachains_info&utm_medium=referral&utm_campaign=parachains_info) |[Github](https://github.com/pendulum-chain/pendulum)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-amplitude.pendulumchain.tech#/explorer)|2124 | xTokens |XCM V1 |
| Basilisk | [Website](https://bsx.fi/) |[Github](https://github.com/galacticcouncil/Basilisk-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.basilisk.cloud#/explorer)|2090 | xTokens |XCM V3 |
| BifrostKusama | [Website](https://thebifrost.io/) |[Github](https://github.com/bifrost-finance/bifrost)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fbifrost-parachain.api.onfinality.io%2Fpublic-ws#/explorer)| 2001| xTokens |XCM V3 |
| Pioneer | [Website](https://bit.country/) |[Github](https://github.com/bit-country/Metaverse-Network)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpioneer.api.onfinality.io%2Fpublic-ws#/explorer)| 2096| xTokens |XCM V1 |
| Calamari | [Website](https://calamari.network/) |[Github](https://github.com/Manta-Network/Manta)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.calamari.systems%2F#/accounts)|2084| xTokens |XCM V1 |
| CrustShadow | [Website](https://crust.network/) |[Github](https://github.com/crustio/crust-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-shadow.crust.network%2F#/explorer)|2012 | xTokens |XCM V1 |
| Ipci | [Website](https://ipci.io/?ref=parachains-info) |[Github](https://github.com/DAO-IPCI/IPCI-blockchain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.ipci.io#/explorer)| 2222 | polkadotXcm |XCM V1 |
| Crab | [Website](https://crab.network/) |[Github](https://github.com/darwinia-network/darwinia/tree/main/runtime/crab)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fcrab-parachain-rpc.darwinia.network%2F#/explorer)|2105 | polkadotXCM |XCM V3 |
| Dorafactory | [Website](https://dorafactory.org/) |[Github](https://github.com/DoraFactory/dorafactory-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.dorafactory.org#/explorer)| 2115| xTokens |XCM V1 |
| Imbue | [Website](https://www.imbue.network/) |[Github](https://github.com/ImbueNetwork/imbue)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fimbue-kusama.imbue.network#/explorer)| 2121| xTokens |XCM V3 |
| Integritee | [Website](https://integritee.network/) |[Github](https://github.com/integritee-network/integritee-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fintegritee-kusama.api.onfinality.io%2Fpublic-ws#/explorer)|2015 | xTokens |XCM V1 |
| InvArchTinker | [Website](https://invarch.network/tinkernet) |[Github](https://github.com/InvArch/InvArch-Node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Finvarch-tinkernet.api.onfinality.io%2Fpublic-ws#/explorer)| 2125| xTokens |XCM V1 |
| Karura | [Website](https://acala.network/karura) |[Github](https://github.com/AcalaNetwork/Acala)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkarura-rpc-2.aca-api.network%2Fws#/explorer)|2000 | xTokens |XCM V3 |
| Kintsugi | [Website](https://kintsugi.interlay.io/bridge?tab=issue) |[Github](https://github.com/interlay/interbtc-ui)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi-kusama.interlay.io%2Fparachain#/explorer)|2092 | xTokens |XCM V3 |
| Litmus | [Website](https://litentry.com/) |[Github](https://github.com/litentry/litentry-parachain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.litmus-parachain.litentry.io#/explorer)|2106 | xTokens |XCM V1 |
| Mangata | [Website](https://www.mangata.finance/) |[Github](https://github.com/mangata-finance/mangata-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-archive.mangata.online#/explorer)|2110 | xTokens |XCM V3 |
| Moonriver | [Website](https://moonbeam.network/networks/moonriver/) |[Github](https://github.com/PureStake/moonbeam)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmoonriver.api.onfinality.io%2Fpublic-ws#/explorer)|2023 | xTokens |XCM V3 |
| ParallelHeiko | [Website](https://parallel.fi/) |[Github](https://github.com/parallel-finance/parallel)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fheiko-rpc.parallel.fi#/explorer)|2085 | xTokens |XCM V1 |
| Picasso | [Website](https://picasso.xyz/) |[Github](https://github.com/ComposableFi/composable)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpicasso-rpc.composable.finance#/explorer)|2087 | xTokens |XCM V3 |
| Quartz | [Website](https://unique.network/quartz/) |[Github](https://github.com/usetech-llc/polkadot_api_dotnet)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus-ws-quartz.unique.network#/explorer)|2095 | polkadotXCM |XCM V3 |
| Robonomics | [Website](https://robonomics.network/) |[Github](https://github.com/airalab/robonomics)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frobonomics.api.onfinality.io%2Fpublic-ws#/robotomics)|2048 | polkadotXCM |XCM V1 |
| Shiden | [Website](https://shiden.astar.network/) |[Github](https://github.com/AstarNetwork/Astar)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fshiden.api.onfinality.io%2Fpublic-ws#/explorer)|2007 | polkadotXCM |XCM V3 |
| Turing | [Website](https://oak.tech/turing/home/) |[Github](https://github.com/OAK-Foundation/OAK-blockchain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fturing-rpc.dwellir.com#/explorer)|2114 | xTokens |XCM V3 |
