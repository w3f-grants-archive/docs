MAKE THIS BETTER !

# Introduction
ParaSpell is XCM & XCMP related tool built to save developers time when interacting with the network. You as a developer can save time by simply installing our sdk on the frontend. It is no longer necessary for you to search for correct XCM pallets, fill lengthy XCM messages with all the required details or go through research on launching a network. By using the ParaSpell sdk you can download/install/start necessary nodes with a single command, execute XCM transactions or open & close HRMP channels between nodes.


This guide will give you a general overview of what XCM is and how to use our SDK to ease development. It will also give a deep dive on how to form raw XCM messages with the 

This guide will show you how to leverage the x-tokens pallet to send XC-20s from a Moonbeam-based network to other chains in the ecosystem (relay chain/parachains). Moreover, you'll also learn how to use the x-tokens precompile to perform the same actions via the Ethereum API.


## What is XCM
Simply, it is a standard that allows protocol developers to define the data and origins which their chains can send and receive from. Gavin Wood tried to explain it as an analogy: think of XCM as a language that can be spoken in a call; while XCMP is like a kind of telephone. ["XCM is nothing but a language, albeit a very specialised one. It is a means for consensus systems to talk to one another."](https://polkadot.network/blog/xcm-part-two-versioning-and-compatibility/)

> Developers must understand that sending incorrect XCM messages can result in the loss of funds. Consequently, it is essential to test XCM features on a TestNet before moving to a production environment.

## Transport systems for passing messages
Polkadot has three main transport systems for passing messages between chains all of which will use this format: XCMP (sometimes known as HRMP) together with the two kinds of VMP: UMP and DMP.

XCMP Cross-Chain Message Passing secure message passing between parachains. There are two variants: Direct and Relayed.
With Direct, message data goes direct between parachains and is O(1) on the side of the Relay-chain and is very scalable.
With Relayed, message data is passed via the Relay-chain, and piggy-backs over VMP. It is much less scalable, and parathreads in particular may not receive messages due to excessive queue growth.
VMP Vertical Message Passing message passing between the Relay-chain itself and a parachain. Message data in both cases exists on the Relay-chain. This includes:
UMP Upward Message Passing message passing from a parachain to the Relay-chain.
DMP Downward Message Passing message passing from the Relay-chain to a parachain.




 - XCM — stands for cross-consensus message. It is a general way for consensus systems to communicate with each other
VMP , one of the transport methods for XCMs. 
    - UMP (upward message passing) enables parachains to send messages to their relay chain
    - DMP (downward message passing) enables the relay chain to pass messages down to one of their parachains
    - VMP (vertical message passing) it allows parachains to exchange messages with the relay chain
    - GPMP; Grandpa protocol message passage; between subsrate chain and relay chain’s parachain and relay chain itself
    - SCMP: Subsrate chain and smart contract
 - XCMP — stands for cross-consensus message passing, one of the transport methods for XCMs. It allows parachains to exchange messages with other parachains on the same relay chain
 - HRMP — stands for horizontal relay-routed message passing, a stop-gap protocol while a full XCMP implementation is launched. It has the same interface as XCMP, but messages are stored on the relay chain
Sovereign account — an account each chain in the ecosystem has, one for the relay chain and the other for other parachains. It is calculated as the blake2 hash of a specific word and parachain ID concatenated (blake2(para+ParachainID) for the sovereign account in the relay chain, and blake2(sibl+ParachainID) for the sovereign account in other parachains), truncating the hash to the correct length. The account is owned by root and can only be used through SUDO (if available) or democracy (technical committee or referenda). The sovereign account typically signs XCM messages in other chains in the ecosystem
 - Multilocation — a way to specify a point in the entire relay chain/parachain ecosystem relative to a given origin. For example, it can be used to specify a specific parachain, asset, account, or even a pallet inside a parachain. In general terms, a multilocation is defined with a parents and an interior. Parents refers to how many "hops" into a parent blockchain you need to take from a given origin. The interior refers to how many fields you need to define the target point. For example, to target a parachain with ID 1000 from another parachain, the multilocation would be { "parents": 1, "interior": { "X1": [{ "Parachain": 1000 }]}}
 
 
Building an XCM message for fungible asset transfers is not an easy task. Consequently, there are wrapper functions/pallets that developers can leverage to use XCM features on Polkadot/Kusama.

One example of such wrappers is the x-tokens pallet, which provides different methods to transfer fungible assets via XCM.
