# HRMP pallet

```js
//hrmp pallet:
paraspell.closeChannels.closeChannel(
    api: ApiPromise,
    origin: origin Parachain ID,
    inbound: number,
    outbound: number
)
```

```js
//parasSudoWrapper pallet:
paraspell.openChannels.openChannel(
    api: ApiPromise,
    origin: origin Parachain ID,
    destination: destination Parachain ID,
    maxSize: number,
    maxMessageSize: number
)
```

