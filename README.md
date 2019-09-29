# optimize-homeseer-zwave

Optimize a Homeseer ZWave network from the command line.

# Installation

```bash
yarn install
```

Set your HOST, CONTROLLER and ID in the .env file.

CONTROLLER and ID can be found if you open up Plug-ins > Z-Wave > Controller Management.

Open up your browser's network inspector, and start an optimization. Find the outgoing request and make a note of these parameters. Use that in your .env file.

![CONTROLLER and ID can be found in Chrome's network inspector](/docs/config.png?raw=true)

# Usage

Use

```bash
yarn optimize
```

to do a normal optimize without return route changes, or

```bash
yarn optimize full
```

to do a full optimize
