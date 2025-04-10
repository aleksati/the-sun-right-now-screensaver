# The Sun Right Now Screensaver

Desktop screensaver showing near realtime images of the sun, sourced from [NASA SDO](https://sdo.gsfc.nasa.gov/). Images update every 5 minutes. 

Project built Using React + Vite and Electron to create the app window.

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
