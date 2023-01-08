# XCM versions

The XCM language is a work-in-progress. XCM v2 is currently deployed on Polkadot and v3 is in development.


## Version 3
The XCM version 3 is still in development, but after the [Gavin Wood's update]() it is clear that it will focus on Programmability, Functional multichain decomposition and bridging.

### Programmability
Allows xcm messages to express and execute more sophisticated concepts such as expectations and branching; introspection and safe dispatches and asset exchange & NFTs.

### Multichain Decomposition Features
Allows mechanisms to be built whose logic is spread over multi chains which is essential for Polkadot’s long term vision to be a functionally minimal Relay

### Providing Remote locking
In situation’s like One chain use an asset exist in another chain and requesting that another chain to lock an asset.

### Bridging features
Allows XCM to function transparently over bridges and other multi-hop routes.


--------------------------------------------------------------------------------------------------

But there are issues XCM can not solve. Not because of the language, because of TRUST.

For example:

> A user on Moonbeam wants to send AUSD from Phala to Moonbean, where the AUSD is held as a reserve asset on Acala.
>
> The problem is that Phala and Moonbeam don’t trust each other
>
> What they do?
>
> Phala (on behalf of user) sends message to Acala instructing transfer of AUSD to Moonbeam and then notifies Moonbeam to credit Phala user’s account on Moonbeam with local AUSD. Afterward Phala (on behalf of the user) sends a message to Moonbeam instructing the execution of the desired contract.

As you can see 