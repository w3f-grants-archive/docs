# Starting local network

Starting local network on UI is `very simple`. First we need to make sure that our `pre-requirements` are installed and set.

ParaSpell tries to make this as `simple` as possible for you here.

You can install required prerequisites for starting network with simple command:
```
//linux
sudo make initialize

//if you have mac
sudo make initializemac
```

Then you have to compile network config file and launch it onto docker as containers (make sure docker deamon is running)
```
make install
```

Relaunching network after it was put down is necessary. It can be done by following command
```
make launch
```