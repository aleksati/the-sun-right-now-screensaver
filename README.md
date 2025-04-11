# The Sun Right Now - Screensaver

Desktop screensaver with slideshow of realtime NASA images of the sun. The images are fetched from the [NASA SDO](https://sdo.gsfc.nasa.gov/) database and refreshed every 5 minutes. Built with Nodejs, React and Electron. Available for Win and OSX.

Check live browser version at [https://aleksati.net/thesunrightnow](https://aleksati.net/thesunrightnow)

<div align="left">
 <img src="/public/pic.jpg" width=600>
</div>
</br>

# Usage

Com on port localhost ports 8001 and 8000.

I had issues with the Electron isDev feature. It should tell me when the app is running in dev or production is main.js. process doesnt work beacuse the Electron main.js runs before that. Apparantly.

## Dev
First:
```
cd ROOT/DIR
npm i
```

 dev:
```
edit line 35 in ./main.js from false to true

npm run dev
```

Check screensaver production build in dev mode:
```
edit line 35 in ./main.j from true to false

1. npm run build

edit <script> and <link> paths in the ./dist/index.html files from src="/assets/..." to src="./assets/...".

2. npm run electron
```

## Build into screensaver or desktop app

Check the releases tab for the newest releases.
 You can also:
 ```
cd ROOT/DIR
npm i
```
Then:
```
edit line 35 in ./main.js from true to false

1. npm run build

edit <script> and <link> paths in the ./dist/index.html files from src="/assets/..." to src="./assets/...".

2. npm run build:electron

edit extension of ./build/APP_NAME.exe to ./build/APP_NAME.scr. 

right click on .scr and hit install
```
