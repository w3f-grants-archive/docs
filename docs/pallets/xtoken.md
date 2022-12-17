# xToken pallet

```js
paraspell.xTokens.transferParaToPara(
    api: ApiPromise,
    origin: origin Parachain name string,
    destination: destination Parachain ID,
    currency: currency symbol string,
    amount: any,
    to: destination address string
)
```

```js
paraspell.xTokens.transferParaToRelay(
    api: ApiPromise,
    origin: origin Parachain name string,
    currency: currency symbol string,
    amount: any,
    to: destination address string
)
```

```js
paraspell.xTokens.transferRelayToPara(
    api: ApiPromise,
    destination: destination Parachain ID,
    amount: any,
    to: destination address string
)
```