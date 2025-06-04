# The Sun Right Now - Screensaver

The Sun Right Now is a desktop screensaver that displays real-time 4K images of the sun in a mesmerizing slideshow. The photos are fetched from the [NASA SDO](https://sdo.gsfc.nasa.gov/), a satellite observatory currently orbiting Earth. The images are updated automatically every 5 minutes to ensure only the very latest captures are shown. Built with Nodejs, React and Electron. 

Available for Windows (and OSX soon).

For a quick preview, check out a live browser version [here](https://aleksati.net/thesunrightnow-preview).

<div align="left">
 <img src="./public/pic.png">
</div>
</br>

# Dev

First:
```
cd ROOT/DIR
npm i
```

## Local dev

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
