# List of interesting ParaSpell✨ repositories

## Fully maintained repositories 🧰

### XCM-API (LightSpell⚡️)
[API Link](https://github.com/paraspell/xcm-api) |
API serves as `XCM`, `HRMP`, `Asset pallet` enhancement to ease developers' life. It integrates XCM-SDK and allows dApp developers to integrate XCM interoperability without need of installing any packages. This saves time and also costs as heavy computing (call generating) is lifted from the application.

### XCM-SDK
[SDK Link](https://github.com/paraspell/xcm-sdk) |
SDK groups different pallets in uniform way. These Pallets consist of: `XCM`, `HRMP`, `Asset pallet`, `XYK pallet`. SDK includes support for 44 XCM compatible Parachains and is easy to implement as it is hiding most of complex logic from user that needs to enter only few necessary easy to understand details.

### Docs
[Docs Link](https://github.com/paraspell/docs) | Docs demonstrate how XCM API, XCM SDK or XCM UI can be used. They also contain useful `links` and important information about `Paraspell`.

### Sub scaffold template
[Sub-scaffold Link](https://github.com/kodadot/sub-scaffold) | Sub-scaffold is a substrate project template that helps developers to onboard Polkadot ecosystem and build dApps much faster. Template contains preinstalled packages and useful modules for managing `logging in`, `asset decimals` and more. It also implements `Paraspell XCM-SDK` out of the box.

## Archived repositories ⚰️

### UI-V1
[UI-V1 Link](https://github.com/paraspell/ui-v1) | UI was the enhancement of `XCM SDK` and also allowed Parachain developers to test their Parachains `locally`. Another benefit it brought was, that it allowed users to open HRMP channels between already preconfigured Parachans and also try to send `XCM` messages across them. UI also served as an example of learning how `XCM` works in practice.

### UI-V2
[UI-V2 Link](https://github.com/paraspell/ui-v2) | Was version of UI-V1 mentioned above. It used a Sub-scaffold template, state-of-the-art Vue3 and Nuxt to deliver maximum performance and utility. The design was also slightly more intuitive to use and more modern. UI proposed a good example of how interoperable dApp can be built.

### Moondo
[Moondo Link](https://github.com/paraspell/moondo) | Moondo was created for the Moonbeam hackathon. It contains a simple example of `Axelar GMP` that can be launched locally. It also demonstrated `XCM` usability on `Test net`. Lastly, it used a special pallet called `XCM Transactor` which allowed the user to execute commands on the Relay chain from Parachain. 

### Astarot
[Astarot Link](https://github.com/paraspell/astarot) | Astarot was built in a hackathon for `Astar`. It contains `XCM SDK` and was deployed on `Main net`. Users were able use it to transfer `DOT/KSM` between the Relay chain & Astar as well as transfer `ASTR/SDN` tokens from Astar.