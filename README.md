# optimize-homeseer-zwave

Optimize a Homeseer ZWave network from the command line.

Note: You don't really need this library, as long as you have curl installed you can achieve the same result by running:

```
curl 'http://192.168.1.123/ZWaveControllers' --data 'OpSelect_CONTROLLER=12&id=GO_CONTROLLER-12_ID12345&GO_CONTROLLER-12=Submit'
curl 'http://192.168.1.123/ZWaveControllers' --data 'OpSelect_CONTROLLER=13&id=GO_CONTROLLER-13_ID12345&GO_CONTROLLER-13=Submit'
```

Replace CONTROLLER and 12345 with parameters as described in the Installation chapter.

The first command is to optimize, the second to do a full optimize. The numbers (12 and 13) may vary according to which controller you have. I've got an Aeotec Z-Stick Gen5.

# Installation

```bash
git clone https://github.com/audunru/optimize-homeseer-zwave.git
cd optimize-homeseer-zwave
yarn install
```

Set your HOST, CONTROLLER and ID in the .env file.

CONTROLLER and ID can be found if you go to Plug-ins > Z-Wave > Controller Management.

Open up your browser's network inspector, and start an optimization. Find the outgoing request and make a note of these parameters. Use that in your .env file.

![CONTROLLER and ID can be found in Chrome's network inspector](/docs/config.png?raw=true)

# Usage

Optimize without return route changes:

```bash
yarn optimize
```

Full optimize:

```bash
yarn optimize full
```

# Cron

Example crontab that will run optimize every night at 2.00, 2.15, and 2.30, and then a full optimize at 3.00:

```
0,15,30 2 * * * cd /home/user/optimize-homeseer-zwave && yarn optimize
0 3 * * * cd /home/user/optimize-homeseer-zwave && yarn optimize full
```
