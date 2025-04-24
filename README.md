# The Sun Right Now - Screensaver

The Sun Right Now is a desktop screensaver showing 4K image slideshows of the sun. The photos are shot and stored by the [NASA SDO](https://sdo.gsfc.nasa.gov/) in realtime, a satellite observatory which is currently orbiting Earth. The screensaver is auto-refreshed every 5 minutes in order to show the latest images on-screen. Built with Nodejs, React and Electron. 

Available for Windows (and OSX soon).

Check out the live browser version at: [https://aleksati.net/thesunrightnow](https://aleksati.net/thesunrightnow)

<div align="left">
 <img src="./public/pic.png">
</div>
</br>

# Usage

First:
```
cd ROOT/DIR
npm i
```

## Dev

Host the app for development at localhost:8000:
```
1. ensure checkBuild flag in ./main.js line 11 is set to false.
2. npm run dev
```

While running, you can also launch the Electron desktop app window by:
```
npm run electron
```

The local API node server that fetches the images from NASA runs concurrently on port 8001. **NB!** This API also runs during production and might cause some security warnings on your machine.  

## Build

### Build Test in Dev Mode
To build the Electron app and then check the build in dev mode before production: 
```
1. set checkBuild flag in ./main.js line 11 to true.
2. npm run start
```
This is handy for troubleshooting and testing.


### Build Screensaver
To build the final executable (.exe) for the screensaver, first run:
```
npm run build:electron
```
Then, to make the screensaver on WIN: 
```
1. edit extension of ./build/APP_NAME.exe to ./build/APP_NAME.scr.
2. right click on the .scr file and hit Install 
```
on OSX:
```
Coming soon
```

<!-- 
For package.json when Mac build

"mac" : {
      "target": ["dmg"],
      "arch": ["x64", "arm64"],
      "identity": null,
      "hardenedRuntime": true,
      "category": "public.app-category.utilities"
    },
    "dmg": {
      "contents": [
        {
          "x": 130,
          "y": 220
        },
        {
          "x": 410,
          "y": 220,
          "type": "link",
          "path": "/Applications"
        }
      ]
    }, 
    -->
