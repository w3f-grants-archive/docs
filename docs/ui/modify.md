## Updating network config
Network configuration can be found in the file "[paraspell-network-config.yml](https://github.com/dudo50/ParaSpell/blob/main/paraspell-network-config.yml)". We will explain how a new node can be added by explaining part of config file on one example node.
![carbon (31)](https://user-images.githubusercontent.com/55763425/186969086-f5875cb1-61d4-4d0b-89b1-e373b61fa515.png)
This example is for the Pichiu node. In order to avoid the same Parachain ID, it needs to be overridden to 2001 (default is 2000 which is same as Acala). Every node requires a docker image, base name and volume path. There can be standard flags included. Flags usually differ in purpose. Some are meant for the Relay chain and some for the node itself. In order to use node with API, we need to add wsPort and specify it to concrete value. Collators also have to be added for Parachain to produce blocks (Alice & Bob in this case). More possible options for customization of network config can be found in the Parachain-launch repository [here](https://github.com/open-web3-stack/parachain-launch).

## Adding a node to the UI
There are five screens and areas that need to get updated when a new node is added. Always search for the comment "Here add your new node" it is written above areas that require an update when a new node is added.

![carbon (25)](https://user-images.githubusercontent.com/55763425/186940822-346b296d-a355-427b-93f8-f87e0f850d1e.png)
<br /> Starting with the [Open channel screen](https://github.com/paraspell/ui-v1/blob/main/src/views/OpenChannel.vue), there are two areas that require updating. The first area is in the mounted function which is responsible for extracting connected Parachains to the Relay chain. The second area is in function responsible for opening channels. There is a need to convert selected Parachains back from text to Parachain IDs for API calls.

![carbon (30)](https://user-images.githubusercontent.com/55763425/186945150-7ebc2e48-9e7c-472d-be54-6eeb9e4f7214.png)
<br />The [closing channel screen](https://github.com/paraspell/ui-v1/blob/main/src/views/CloseChannel.vue) has two areas that require updating. The first area is in the function that executes on the mount which is responsible for extracting open HRMP channels. The second area is in function responsible for closing channels. There is a need to convert selected Parachains back from text to Parachain IDs for API call.

![carbon (26)](https://user-images.githubusercontent.com/55763425/186943761-bcc0ce7c-0026-4df0-b451-d0f92a3e040b.png)
<br />The [Para to Para screen](https://github.com/paraspell/ui-v1/blob/main/src/views/ParaToPara.vue) has two areas that require updating. The first area is in the function that executes on the mount which is responsible for extracting connected Parachains. The second area is in function responsible for XCM transfers. There is a need to convert selected Parachains back from text to Parachain IDs for API calls. 

![carbon (29)](https://user-images.githubusercontent.com/55763425/186944330-779f6137-5c0b-4dbf-be0c-a5a22dd96acd.png)
<br />The [Para to Relay screen](https://github.com/paraspell/ui-v1/blob/main/src/views/ParaToRelay.vue) has only one area that requires updating. It is in the function that executes on the mount which is responsible for extracting connected Parachains.

![carbon (28)](https://user-images.githubusercontent.com/55763425/186944207-4f78afd7-16f5-48e7-8bfe-de1c9a3e3d77.png)
<br />The [Relay to Para screen](https://github.com/paraspell/ui-v1/blob/main/src/views/RelayToPara.vue) has two areas that require updating. The first area is in the function that executes on the mount which is responsible for extracting connected Parachains. The second area is in function responsible for XCM transfers. There is a need to convert selected Parachains back from text to Parachain IDs for API calls.
