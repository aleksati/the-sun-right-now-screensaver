
// Hosts the node project as a desktop App using Electron

const { app, BrowserWindow } = require('electron');
const path = require('path');

// Start the Express API server
require("./api")

function createWindow () {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadURL('http://localhost:5173'); // Vite dev server
  // win.webContents.openDevTools(); // Uncomment for devtools

  win.webContents.on('before-input-event', (event, input) => {
    if (['mouseDown', 'mouseMove', 'keyDown'].includes(input.type)) {
      app.quit();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => app.quit());