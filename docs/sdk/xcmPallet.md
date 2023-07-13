# xcmPallet, every possible call variation explained
### There are three scenarios we use in our SDK. These are:
- Relay chain to Parachain XCM transfer 
- Parachain to Relay chain XCM transfer
- Parachain to Parachain XCM transfer

## New video guide for this section:
[
![xcmPallet](https://user-images.githubusercontent.com/55763425/238154617-0b57c5c8-76cf-490c-812d-481f097f4977.png)
](https://youtu.be/MoCrt2vYJJU)

### There are also two possible ways that our SDK allows you to construct your XCM calls:
- Construct your calls via Builder pattern (recommended, easy to use)
- Construct them classic function like call way

Both of these ways will be explained.

## Builder pattern XCM call from Relay chain to Parachain
Only `from` parameter is provided, thus the Relay chain to Parachain scenario will be used.

```js
  Builder(api)
      .to('Basilisk')       // Destination Parachain
      .amount(amount)       // Token amount
      .address(address)     // AccountId32 or AccountKey20 address
      .build()              // Function called to build call
```

AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Builder pattern XCM call from Parachain chain to Relay chain
Only `to` parameter is provided, thus the Parachain to Relay chain scenario will be used.

```js
    Builder(api)
      .from('Acala')            // Origin Parachain
      .amount(amount)           // Token amount
      .address(address)         // AccountId32 address
      .build()                  // Function called to build call
```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Builder pattern XCM call from Parachain to Parachain
Both `from` and `to` parameters are provided, thus the Parachain to Parachain scenario will be used.

```js
  Builder(api)
      .from('Karura')           // Origin Parachain
      .to('Basilisk')           // Destination Parachain
      .currency('KSM')          // Token symbol (String) || TokenID (Number)
      .amount(amount)           // Token amount
      .address(address)         // AccountId32 or AccountKey20 address
      .build()                  // Function called to build call
```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Function pattern XCM call from Relay chain to Parachain
This XCM constructor uses a native Relay chain XCM pallet. It is very straightforward to implement.

```js
paraspell.xcmPallet.transferRelayToPara(
  api,
  destination,  // Destination Parachain
  amount,       // Token amount
  to            // AccountId32 or AccountKey20 address
  )

```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Function pattern XCM call from Parachain to Relay chain
This XCM constructor uses send function same as Parachain to Parachain scenario. The difference is, that this scenario does `not specify destination Parachain`. This way function knows that the transfer is to the Relay chain.

```js
paraspell.xcmPallet.send(
  api,
  origin,       // Origin Parachain
  amount,       // Token amount
  to            // AccountId32 or AccountKey20 address
  )

```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Function pattern XCM call from Parachain to Parachain
This XCM constructor uses send function same as Parachain to Relay chain scenario. The difference is, that this scenario `does specify destination Parachain`. This way function knows that the transfer is to another Parachain.
```js
paraspell.xcmPallet.send(
  api, 
  origin,       // Origin Parachain
  currency,     // Token symbol (String) || TokenID (Number)
  amount,       // Token amount
  to,           // AccountId32 or AccountKey20 address
  destination   // Destination Parachain
  )
```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has a handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`



## Developer experience

### Builder pattern experience
When developing with the Builder pattern, the developer is guided by the typescript and thus knows which parameter can be added next. This increases the developer experience and makes SDK easier to use.
<img width="459" alt="builder" src="https://user-images.githubusercontent.com/55763425/214562882-dd1a052e-c420-4131-bb50-3b656fabd10c.png">


### Control messages into the console 
Once the call is being constructed developer is warned about major details regarding the call into the console. This way they can assure, that call they wanted to create is being created.
<img width="409" alt="212045110-c001fcb7-8cc2-421c-9cd0-6d8205b3b11f" src="https://user-images.githubusercontent.com/55763425/212065770-48ff4b35-2463-48b3-bd51-bae56b2105a8.png">

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
| Acala | [Website](https://acala.network/) |[Github](https://github.com/AcalaNetwork/Acala)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2F1rpc.io%2Faca#/explorer)|2000 | xTokens |XCM V1 |
| Astar | [Website](https://astar.network/) |[Github](https://github.com/AstarNetwork/Astar)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar-rpc.dwellir.com#/explorer)|2006 | polkadotXCM |XCM V3 |
| BifrostPolkadot | [Website](https://thebifrost.io/) |[Github](https://github.com/bifrost-finance/bifrost)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fhk.p.bifrost-rpc.liebi.com%2Fws#/explorer)| 2030| xTokens |XCM V3 |
| Centrifuge | [Website](https://centrifuge.io/) |[Github](https://github.com/centrifuge/centrifuge-chain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fcentrifuge-rpc.dwellir.com#/explorer)|2031 | xTokens |XCM V1 |
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
| Altair | [Website](https://centrifuge.io/altair/) |[Github](https://github.com/centrifuge/centrifuge-chain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Faltair-rpc.dwellir.com#/explorer)| 2088| xTokens |XCM V1 |
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
| Integritee | [Website](https://integritee.network/) |[Github](https://github.com/integritee-network/integritee-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fintegritee-ksm-rpc.dwellir.com#/explorer)|2015 | xTokens |XCM V1 |
| InvArchTinker | [Website](https://invarch.network/tinkernet) |[Github](https://github.com/InvArch/InvArch-Node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Finvarch-tinkernet.api.onfinality.io%2Fpublic-ws#/explorer)| 2125| xTokens |XCM V1 |
| Karura | [Website](https://acala.network/karura) |[Github](https://github.com/AcalaNetwork/Acala)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkarura-rpc-2.aca-api.network%2Fws#/explorer)|2000 | xTokens |XCM V3 |
| Kintsugi | [Website](https://kintsugi.interlay.io/bridge?tab=issue) |[Github](https://github.com/interlay/interbtc-ui)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fapi-kusama.interlay.io%2Fparachain#/explorer)|2092 | xTokens |XCM V3 |
| Litmus | [Website](https://litentry.com/) |[Github](https://github.com/litentry/litentry-parachain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.litmus-parachain.litentry.io#/explorer)|2106 | xTokens |XCM V1 |
| Mangata | [Website](https://www.mangata.finance/) |[Github](https://github.com/mangata-finance/mangata-node)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmangata-x.api.onfinality.io%2Fpublic-ws#/explorer)|2110 | xTokens |XCM V3 |
| Moonriver | [Website](https://moonbeam.network/networks/moonriver/) |[Github](https://github.com/PureStake/moonbeam)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmoonriver.api.onfinality.io%2Fpublic-ws#/explorer)|2023 | xTokens |XCM V3 |
| ParallelHeiko | [Website](https://parallel.fi/) |[Github](https://github.com/parallel-finance/parallel)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fheiko-rpc.parallel.fi#/explorer)|2085 | xTokens |XCM V1 |
| Picasso | [Website](https://picasso.xyz/) |[Github](https://github.com/ComposableFi/composable)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpicasso-rpc.composable.finance#/explorer)|2087 | xTokens |XCM V3 |
| Quartz | [Website](https://unique.network/quartz/) |[Github](https://github.com/usetech-llc/polkadot_api_dotnet)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fus-ws-quartz.unique.network#/explorer)|2095 | polkadotXCM |XCM V3 |
| Robonomics | [Website](https://robonomics.network/) |[Github](https://github.com/airalab/robonomics)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frobonomics.api.onfinality.io%2Fpublic-ws#/robotomics)|2048 | polkadotXCM |XCM V1 |
| Shiden | [Website](https://shiden.astar.network/) |[Github](https://github.com/AstarNetwork/Astar)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fshiden.api.onfinality.io%2Fpublic-ws#/explorer)|2007 | polkadotXCM |XCM V3 |
| Turing | [Website](https://oak.tech/turing/home/) |[Github](https://github.com/OAK-Foundation/OAK-blockchain)| [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fturing-rpc.dwellir.com#/explorer)|2114 | xTokens |XCM V3 |
