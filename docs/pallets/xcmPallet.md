# xcmPallet, every possible call variation explained
### There are three scenarios we use in our SDK. These are:
- Relay chain to Parachain XCM transfer 
- Parachain to Relay chain XCM transfer
- Parachain to Parachain XCM transfer

### There are also two possible ways that our SDK allows you to contruct your XCM calls:
- Construct your calls via Builder pattern (reconmended, easy to use)
- Construct them classic function like call way

Both of these ways will be explained.


## Builder pattern XCM call from Relay chain to Parachain
Only `from` parameter is provided, thus the relaychain to parachain scenario will be used.

```js
  Builder(api)
      .to('Basilisk')       // Destination node
      .amount(amount)       // Token amount
      .address(address)     // AccountId32 or AccountKey20 address
      .build()              // Function called to build call
```

AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Builder pattern XCM call from Parachain chain to Relay chain
Only `to` parameter is provided, thus the parachain to relaychain scenario will be used.

```js
    Builder(api)
      .from('Acala')            // Origin node
      .currency('KSM')          // Token symbol if needed (if not just insert random string, it will not be considered)
      .currencyId(currencyId)   // CurrencyID if needed (if not just insert random number, it will not be considered)
      .amount(amount)           // Token amount
      .address(address)         // AccountId32 address
      .build()                  // Function called to build call
```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Builder pattern XCM call from Parachain to Parachain
Both `from` and `to` parameters are provided, thus the parachain to parachain scenario will be used.

```js
  Builder(api)
      .from('Karura')           // Origin node
      .to('Basilisk')           // Destination node
      .currency('KSM')          // Token symbol if needed (if not just insert random string, it will not be considered)
      .currencyId(currencyId)   // CurrencyID if needed (if not just insert random number, it will not be considered)
      .amount(amount)           // Token amount
      .address(address)         // AccountId32 or AccountKey20 address
      .build()                  // Function called to build call
```
AccountId32 and AccountKey20 address can be directly copied from PolkadotJS as our SDK has handler to convert it into desired hex string automatically. 

Eg. use standard public key `141NGS2jjZca5Ss2Nysth2stJ6rimcnufCNHnh5ExSsftn7U`
Instead of `0x84fc49ce30071ea611731838cc7736113c1ec68fbc47119be8a0805066df9b2b`

## Function pattern XCM call from Relay chain to Parachain

## Function pattern XCM call from Parachain to Relay chain

## Function pattern XCM call from Parachain to Parachain


## Developer experience

### Builder pattern experience
When developing with Builder pattern, the developer is guided by the typescript and thus knows which parameter can be added as next. This increases the developer experience and makes SDK easier to use.
<img width="498" alt="Screenshot 2023-01-08 at 14 27 53" src="https://user-images.githubusercontent.com/79721475/211198665-ffb3eeb0-402d-4fad-9705-9a863fb894c6.png">

### Control messages into console 
Once call is being constructed developer is warned about major details in regards to call into console. This way they can assure, that call they wanted to create is being created.
<img width="409" alt="Screenshot 2023-01-12 at 11 37 35" src="https://user-images.githubusercontent.com/55763425/212045110-c001fcb7-8cc2-421c-9cd0-6d8205b3b11f.png">