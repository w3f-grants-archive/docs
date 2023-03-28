# This section goes through XCM call examples in UI

### Make sure to install all prerequisites and launch the network first
You can find out how in [starting network section](https://paraspell.github.io/docs/ui/local.html).

## DMP: Relay chain to Parachain transfer example
First example our UI supports is creating a transfer from the Relay chain to Parachain called Downward-message-passing (DMP). We will demonstrate transfer from the Relay chain to Karura in this example.
- Our first step is to navigate into the teleport section and "From Relay chain" 
<img width="1260" alt="Screenshot 2023-02-02 at 17 28 12" src="https://user-images.githubusercontent.com/55763425/216442889-7a5ef570-b092-4787-9e8a-0fb0c0a99d9f.png">
- Once you arrive you can log in with any of the pre-funded accounts
<img width="1260" alt="Screenshot 2023-02-02 at 17 28 25" src="https://user-images.githubusercontent.com/55763425/216442894-20d0de52-0864-48e2-9a28-07e39caf0ab0.png">
- Next step would be opening our Relay chain and Karura Parachain in polkadotJS so we can verify our transactions were executed

Link to our localhost Relay chain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)

Link to our localhost Karura Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9999#/explorer)

- We can copy the Alice address from Karura and input 1 KSM
<img width="1090" alt="Screenshot 2023-02-02 at 17 35 06" src="https://user-images.githubusercontent.com/55763425/216443670-0df262b5-0398-4ac8-ae09-af37d68a20c5.png">

- The last thing is just to hit send button and observe both chains for events:

We can see, that palletXCM was executed and tokens left for destination Parachain with id 2000.
<img width="682" alt="Screenshot 2023-02-02 at 18 24 40" src="https://user-images.githubusercontent.com/55763425/216453024-029620ae-3fb4-4dde-989e-93fa00cca01c.png">

On Karura we can see, that tokens were successfully deposited.
<img width="682" alt="Screenshot 2023-02-02 at 18 25 07" src="https://user-images.githubusercontent.com/55763425/216453017-2355756c-c0b2-447f-bf7a-215f11ce245d.png">
## UMP: Parachain to Relay chain transfer example

The second example our UI supports is creating a transfer from Parachain to a Relay chain called Upward-message-passing (UMP). We will demonstrate transfer from Karura to the Relay chain in this example.
- Our first step is to navigate into the teleport section and "To Relay chain" 
<img width="1096" alt="Screenshot 2023-02-02 at 18 29 23" src="https://user-images.githubusercontent.com/55763425/216453907-7123f949-a659-4535-81bc-0e41f54e6eb5.png">
- Once you arrive you can log in with any of the pre-funded accounts
<img width="1096" alt="Screenshot 2023-02-02 at 18 29 32" src="https://user-images.githubusercontent.com/55763425/216453928-04138f3c-c7b8-4907-bc17-19139fc33e88.png">
- Next step would be opening our Relay chain and Karura Parachain in polkadotJS so we can verify our transactions were executed

Link to our localhost Relay chain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)

Link to our localhost Karura Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9999#/explorer)

- We can copy our address from the Relay chain and input 1 KSM (Make sure to transfer from the Relay chain to the account you wish to send from.)
<img width="1096" alt="Screenshot 2023-02-02 at 18 30 12" src="https://user-images.githubusercontent.com/55763425/216453933-7fff1ab7-9fa0-4524-b010-6aea6936e0be.png">

- The last thing is just to hit send button and observe both chains for events:

We can see, that palletXCM was executed and tokens left from the destination Parachain with id 2000 and were deposited on our account on the Relay chain.
<img width="603" alt="Screenshot 2023-02-02 at 18 35 49" src="https://user-images.githubusercontent.com/55763425/216455048-444520e9-115f-4098-ace7-75c89290ba62.png">

<img width="693" alt="Screenshot 2023-02-02 at 18 36 21" src="https://user-images.githubusercontent.com/55763425/216455057-ec1146a5-addf-4bcd-86fd-aa9fd58d8ab8.png">

## HRMP: Parachain to Parachain transfer example
The last XCM message type is HRMP (Horizontally-relay-routed-message). We start the same way as in other scenarios. We will demonstrate the transfer from Karura to Bifrost in this example.
- Our first step is to navigate into the teleport section and "Para to Para" 
<img width="1123" alt="Screenshot 2023-02-02 at 18 42 09" src="https://user-images.githubusercontent.com/55763425/216456428-ff3c66fc-b7ed-4f56-b91a-b6b3b3c795f4.png">
- Once you arrive you can log in with any of the pre-funded accounts
<img width="1133" alt="Screenshot 2023-02-02 at 18 42 20" src="https://user-images.githubusercontent.com/55763425/216456447-87fca209-552c-4b92-9baa-e1084c553381.png">
- Next step would be opening our Relay chain and Karura Parachain in polkadotJS so we can verify our transactions were executed

Link to our localhost Bifrost Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9995#/explorer)

Link to our localhost Karura Parachain:
[link](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9999#/explorer)

- We can copy the Bob address from Bifrost and input 1 KSM
<img width="1133" alt="Screenshot 2023-02-02 at 18 42 49" src="https://user-images.githubusercontent.com/55763425/216456454-bcce7d23-984b-4e67-9f01-d1f532045afc.png">

- The last thing is just to hit send button and observe both chains for events:

<img width="621" alt="Screenshot 2023-02-02 at 18 43 48" src="https://user-images.githubusercontent.com/55763425/216456457-5c0df55a-d9ed-4152-802c-c1cc6745dbf4.png">

What we can observe on Bifrost is, that it received a Downward message rather than other types. This is because XCM messages are through HRMP routed through the Relay chain right now. This means that message has to first travel upwards and then downwards to the destination.
<img width="621" alt="Screenshot 2023-02-02 at 18 44 12" src="https://user-images.githubusercontent.com/55763425/216456464-df794fd0-9b93-4699-9e02-0d61ea2c0c11.png">

