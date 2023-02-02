# This section goes through XCM call examples in UI

### Make sure to install all prerequisites and launch network first
You can find out how in [starting network section](https://paraspell.github.io/docs/ui/local.html).

## DMP: Relay chain to Parachain transfer example
First example our UI supports is creating transfer from Relay chain to Parachain called Downward-message-passing (DMP). We will demonstrate transfer from Relay chain to Karura in this example.
- Our first step is to navigate into teleport section and select "Relay chain -> Parachain" 

<img width="728" alt="Screenshot 2023-02-02 at 19 32 00" src="https://user-images.githubusercontent.com/55763425/216466094-f0a8e228-1881-43fa-bc47-a6d1e77cbd5c.png">

- Once you arrive you can login with any of the prefunded accounts

<img width="728" alt="Screenshot 2023-02-02 at 19 32 05" src="https://user-images.githubusercontent.com/55763425/216466103-f04c0e49-2159-4a05-ae43-e0b0b817f2f8.png">

- Next step would be opening our Relay chain node and Karura node in polkadotJS so we can verify our transactions were executed

Link to our localhost Relay chain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)

Link to our localhost Karura Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9999#/explorer)

- We can copy the Alice address from Karura and input 1 KSM

<img width="728" alt="Screenshot 2023-02-02 at 19 33 30" src="https://user-images.githubusercontent.com/55763425/216466112-c427e637-0e41-4b91-b3bc-0094539af056.png">

- Last thing is just to hit send button and observe both chains for events:

We can see, that palletXCM was executed and tokens left for destination parachain with id 2000.

<img width="682" alt="Screenshot 2023-02-02 at 18 24 40" src="https://user-images.githubusercontent.com/55763425/216453024-029620ae-3fb4-4dde-989e-93fa00cca01c.png">

On Karura we can see, that tokens were successfuly deposited.

<img width="682" alt="Screenshot 2023-02-02 at 18 25 07" src="https://user-images.githubusercontent.com/55763425/216453017-2355756c-c0b2-447f-bf7a-215f11ce245d.png">
## UMP: Parachain to Relay chain transfer example

Second example our UI supports is creating transfer from Parachain to Relay chain called Upward-message-passing (UMP). We will demonstrate transfer from Karura to Relay chain in this example.
- Our first step is to navigate into teleport section and select "Parachain -> Relay chain" 

<img width="728" alt="Screenshot 2023-02-02 at 19 36 11" src="https://user-images.githubusercontent.com/55763425/216466232-a3bf5d65-890d-4d04-86c2-5777fef23ccb.png">
- Once you arrive you can login with any of the prefunded accounts

<img width="728" alt="Screenshot 2023-02-02 at 19 35 46" src="https://user-images.githubusercontent.com/55763425/216466246-04b679fb-0242-4992-8a2d-569e1fdc65dd.png">
- Next step would be opening our Relay chain node and Karura node in polkadotJS so we can verify our transactions were executed

Link to our localhost Relay chain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)

Link to our localhost Karura Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9999#/explorer)

- We can copy our own address from Relay chain and input 1 KSM (Make sure to transfer from Relay chain to account you wish to send from.)

<img width="728" alt="Screenshot 2023-02-02 at 19 35 26" src="https://user-images.githubusercontent.com/55763425/216466239-1b8ef0a4-fee2-466c-8c48-ea65bd60fbf9.png">

- Last thing is just to hit send button and observe both chains for events:

We can see, that palletXCM was executed and tokens left from destination parachain with id 2000 and were deposited on our account on Relay chain.
<img width="603" alt="Screenshot 2023-02-02 at 18 35 49" src="https://user-images.githubusercontent.com/55763425/216455048-444520e9-115f-4098-ace7-75c89290ba62.png">

<img width="693" alt="Screenshot 2023-02-02 at 18 36 21" src="https://user-images.githubusercontent.com/55763425/216455057-ec1146a5-addf-4bcd-86fd-aa9fd58d8ab8.png">

## HRMP: Parachain to Parachain transfer example
Last XCM message type is HRMP (Horizontally-relay-routed-message). We start same way as in other scenarios. We will demonstrate transfer from Karura to Bifrost in this example.
- Our first step is to navigate into teleport section and select "Parachain -> Parachain" 

<img width="728" alt="Screenshot 2023-02-02 at 19 36 29" src="https://user-images.githubusercontent.com/55763425/216466295-480b41e7-fd45-4c1c-95f3-c2e33a8c1728.png">
- Once you arrive you can login with any of the prefunded accounts

<img width="728" alt="Screenshot 2023-02-02 at 19 36 35" src="https://user-images.githubusercontent.com/55763425/216466299-e737694c-bed8-4871-9ca0-2da37e60600f.png">
- Next step would be opening our Relay chain node and Karura node in polkadotJS so we can verify our transactions were executed

Link to our localhost Bifrost Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9995#/explorer)

Link to our localhost Karura Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9999#/explorer)

- We can copy the Bob address from Bifrost and input 1 KSM

<img width="728" alt="Screenshot 2023-02-02 at 19 37 30" src="https://user-images.githubusercontent.com/55763425/216466305-1152daf0-114f-4c81-909a-2a1c45ea7c41.png">

- Last thing is just to hit send button and observe both chains for events:

<img width="621" alt="Screenshot 2023-02-02 at 18 43 48" src="https://user-images.githubusercontent.com/55763425/216456457-5c0df55a-d9ed-4152-802c-c1cc6745dbf4.png">

What we can observe on Bifrost is, that it received Downward message rather than other type. This is because XCM messages are through HRMP routed through Relay chain right now. This means, that message has to first travel upwards and then downwards to destination.
<img width="621" alt="Screenshot 2023-02-02 at 18 44 12" src="https://user-images.githubusercontent.com/55763425/216456464-df794fd0-9b93-4699-9e02-0d61ea2c0c11.png">

