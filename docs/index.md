# Introduction

ParaSpell is XCM & XCMP related tool built to save developers time when interacting with the network. It is no longer necessary to search for correct XCM pallets, fill lengthy XCM messages with all the required details or go through research on launching network. Developers can use ParaSpell to download/install/start necessary nodes with a single command, execute XCM transactions from a user-friendly UI, or open & close HRMP channels between nodes in the launched network from a user-friendly UI.

## Overview
ParaSpell main advantages can be summarized in the following list:

 1. ParaSpell is a platform that allows developers to use specific XCM & XCMP related tasks from a user-friendly interface.
 2. ParaSpell focuses on ease of use, broad scale of use cases, and bringing XCM & XCMP utilization & documentation closer to developers.
 3. ParaSpell guarantees to be a completely decentralized, open-source platform that does not collect any user data.

One of the ParaSpell main goals is to reduce the time necessary to create XCM calls or open HRMP channels.

![comparison](https://user-images.githubusercontent.com/55763425/198574715-1a94a865-671d-4407-b509-9611d661b914.jpg)

As we can see in the figure above, the amount of details the user has to fill to transfer the XCM message is drastically reduced. As an example, users do not need to specify a specific route from origin to destination chain. These details are filled for them.

Another goal of ParaSpell is having network installation, compilation & startup done as simply as possible. This is achieved by makefile that groups commands into fewer much more intuitive commands and by network startup configuration file. Together, these two files take care of the network side, and adding new nodes into these files is intuitive. Starting the application is also very simple and done by one command. Communication between application and network is made possible with Polkadot API libraries.

ParaSpell focuses mainly on substrate developers. Added value comes from being user friendly SDK for simplifying development by saving time necessary to install & launch network, open HRMP channels or create XCM transfers between nodes available in network.

Overall ParaSpell is all about developer experience.
