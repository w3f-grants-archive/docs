# Starting local network

Starting local network on UI-V2 is `very simple` and same as on V1. First we need to make sure that our `pre-requirements` are installed and set.

ParaSpell tries to make this as `simple` as possible for you here.

You can install required prerequisites for starting network with simple command:
```
//linux
sudo make initialize

//if you have mac
sudo make initialize
```

Then you have to compile network config file
```
make install
```

Lastly you launch it onto docker as containers (make sure docker deamon is running)
```
make install
```

Relaunching network after it was put down is necessary. It can be done by following command
```
make launch
```