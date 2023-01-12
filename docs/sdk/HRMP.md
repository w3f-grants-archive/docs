# HRMP pallet, every possible call variation explained
### There are two scenarios we use in our SDK. These are:
- Opening HRMP channels between nodes
- Closing HRMP channels between nodes

### There are also two possible ways that our SDK allows you to contruct your HRMP calls:
- Construct your calls via Builder pattern (reconmended, easy to use)
- Construct them classic function like call way

Both of these ways will be explained.

*(This pallet only works on Locally launched network. These functions require sudo access)*

## Builder pattern HRMP call to open channels
When opening a new channel the operation has to be specified by providing `origin` & `destination` nodes, calling `openChannel()` method and then providing `maxSize` and `maxMessageSize` parameters.

```js
    Builder(api)
      .from('Karura')               // Origin node
      .to('Pichiu')                 // Destination node
      .openChannel()                // Call to open channel
      .maxSize(maxSize)             // Max size
      .maxMessageSize(maxMsgSize)   // Max message size
      .build()
```

## Builder pattern HRMP call to close channels
When closing channels the operation has to be specified by providing `origin` node, calling `closeChannel()` method and then providing `inbound` and `outbound` parameters.
```js
    Builder(api)
      .from('Karura')          //Origin node
      .closeChannel()          //Call to close channels
      .inbound(inbound)        //Inbound
      .outbound(outbound)      //Outbound
      .build()
```

## Function pattern HRMP call to open channel
Same as Builder pattern, this pattern requires same details to construct. When opening a new channel the operation has to be specified by providing `origin` & `destination` nodes, calling `openChannel()` method and then providing `maxSize` and `maxMessageSize` parameters.

```js
paraspell.openChannels.openChannel(
    api,
    origin,             // Origin node
    destination,        // Destination node
    maxSize,            // Max size
    maxMessageSize      // Max message size
    )

```
## Function pattern HRMP call to close channel
Same as Builder pattern, this pattern requires same details to construct. When closing channels the operation has to be specified by providing `origin` node, calling `closeChannel()` method and then providing `inbound` and `outbound` parameters.
```js
paraspell.closeChannels.closeChannel(
    api,              
    origin,            // Origin node 
    inbound,           // Inbound
    outbound           // Outbound
    )

```

## Developer experience

### Builder pattern experience
When developing with Builder pattern, the developer is guided by the typescript and thus knows which parameter can be added as next. This increases the developer experience and makes SDK easier to use.
<img width="498" alt="Screenshot 2023-01-08 at 14 27 53" src="https://user-images.githubusercontent.com/79721475/211198665-ffb3eeb0-402d-4fad-9705-9a863fb894c6.png">