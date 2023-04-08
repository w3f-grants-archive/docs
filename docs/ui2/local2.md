# Starting local network

Starting local network on UI-V2 is `very simple` and same as on V1. The only change is, that we  have added "Zombienet" startup configurator along "Parachain-Launch" configurator to better suit broader scale of developers. First we need to make sure that our `pre-requirements` are installed and set.

ParaSpell tries to make this as `simple` as possible for you here.

You can install required prerequisites for starting network with simple command:
```
//linux
sudo make initialize

//if you have mac
sudo make initializemac
```

Then you have to compile network config file

### You have 2 tracks to choose from depending on which startup configurator you wish to use.

#### Parachain-launch
```
make install-parachain-launch
```

#### Relaunch network after it was put down.
```
make launch-parachain-launch
```

#### Zombienet - Linux (Ubuntu)
```
make install-zombienet-linux
```

#### Relaunch network after it was put down.
```
make launch-zombienet-linux
```

Zombienet for MacOs is also implemented, however there is an issue with Podman. Once they resolve it, it will be added as compatible also.