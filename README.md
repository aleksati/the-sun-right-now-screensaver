# The Sun Right Now - Screensaver

The Sun Right Now is a desktop screensaver showing slideshows of near-realtime 4K images of the sun. The photos are fetched from the database of the [NASA SDO](https://sdo.gsfc.nasa.gov/) satellite observatory, which is currently orbiting Earth. The screensaver is auto-refreshed every 5 minutes in order to show the latest images. Built with Nodejs, React and Electron. Available for Windows and OSX.

Check out the live browser version (HD) at: [https://aleksati.net/thesunrightnow](https://aleksati.net/thesunrightnow)

<div align="left">
 <img src="/public/pic.jpg" width=600>
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
Then, to make the screensaver: 
```
1. edit extension of ./build/APP_NAME.exe to ./build/APP_NAME.scr.
2. right click on the .scr file and hit Install 
```

## Ports in use
The dev server runs on port 8000. Com to the local API node server (that fetches the images from NASA) runs on port 8001. **NB!** The API port also running during production. 