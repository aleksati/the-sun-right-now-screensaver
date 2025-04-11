# The Sun Right Now Screensaver

Desktop screensaver that shows slideshow with realtime NASA images of the sun. Images update every 5 minutes, sourced from [NASA SDO](https://sdo.gsfc.nasa.gov/).

Project built Using React + Vite and Electron to create a standalone desktop app.

IMAGE

# Usage

First:
```
npm i
```

The best way to check prod in dev:
```
edit line 35 in main.js from true to false

1. npm run build

edit paths in the dist/index.html files from src="/assets/..." to be src="./assets/...".

2. npm run electron
```

Just dev:
```
edit line 35 in main.js from false to true

npm run dev
```

To build: 
```
edit line 35 in main.js from true to false

1. npm run build

edit paths in the dist/index.html files from src="/assets/..." to be src="./assets/...".

2. npm run build:electron

edit extension of ./build/app.exe to ./build/app.scr. 

right click on .scr and hit install
```
