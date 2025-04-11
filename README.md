# The Sun Right Now Screensaver

Desktop screensaver with slideshow of realtime NASA images of the sun. the images are fetched from the [NASA SDO](https://sdo.gsfc.nasa.gov/) database, and updated every 5 minutes. Built with Nodejs, React and Electron. Available for Win and OSX

<div align="left">
 <img src="/public/pic.jpg" width=600>
</div>
</br>

# Usage

First, from root dir:
```
npm i
```

Just dev:
```
edit line 35 in ./main.js from false to true

npm run dev
```

The best way to check screensaver prod in dev:
```
edit line 35 in ./main.j from true to false

1. npm run build

edit <script> and <link> paths in the ./dist/index.html files from src="/assets/..." to src="./assets/...".

2. npm run electron
```

To build: 
```
edit line 35 in ./main.js from true to false

1. npm run build

edit <script> and <link> paths in the ./dist/index.html files from src="/assets/..." to src="./assets/...".

2. npm run build:electron

edit extension of ./build/APP_NAME.exe to ./build/APP_NAME.scr. 

right click on .scr and hit install
```
