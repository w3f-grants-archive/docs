# Starting local network

Starting a local network on UI is `very simple`. First, we need to make sure that our `pre-requirements` are installed and set.

ParaSpell tries to make this as `simple` as possible for you here.

You can install the required prerequisites for starting the network with a simple command:
```
//linux
sudo make initialize

//if you have mac
sudo make initializemac
```

Then you have to compile the network config file and launch it onto docker as containers (make sure docker daemon is running)
```
make install
```

Relaunching the network after it was put down is necessary. It can be done by the following command
```
make launch
```