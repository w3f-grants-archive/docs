# xcmPallet, every possible call variation explained
### There are three scenarios we use in our SDK. These are:
- Relay chain to Parachain XCM transfer 
- Parachain to Relay chain XCM transfer
- Parachain to Parachain XCM transfer

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
      .currency('DOT')          // Token symbol (String) || TokenID (Number)
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
  currency,     // Token symbol (String) || TokenID (Number)
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