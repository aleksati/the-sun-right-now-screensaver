// Hosts the node project as a desktop App using Electron

const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev").default; // Import the electron-is-dev package

// Start my Express server
require("./api.js");

// Function to create the main screensaver window
function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, 'preloader.js'),
      nodeIntegration: true,
    },
  });

  // Log to see if we are in development mode or production
  // console.log("isDev:", isDev); // ← TEMP: add this for debugging
  // win.webContents.openDevTools()

  // const startUrl = process.env.ELECTRON_START_URL || `file://${path.join(__dirname, "dist", "index.html")}`;
  // win.loadURL(startUrl);

  if (isDev) {
    win.loadURL("http://localhost:8000");
    console.log("Loading from dev server:", "http://localhost:8000");
  } else {
    const filePath = path.join(__dirname, "dist", "index.html");
    console.log("Loading from file:", filePath);
    win.loadFile(filePath);
  }

  // Exit screensaver on mouse or keyboard activity
  win.webContents.on("before-input-event", (event, input) => {
    if (["mouseDown", "mouseMove", "keyDown"].includes(input.type)) {
      app.quit();
    }
  });
}

// Optional: Config window (currently just logs)
function showConfig() {
  console.log("Screensaver config requested.");
  // You can implement a settings window here if desired
}

// app.whenReady().then(() => {
//   createWindow();
//   app.on('activate', function () {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// // Handle command-line arguments
const args = process.argv.slice(1); // slice out the first one (electron binary)

app.whenReady().then(() => {
  if (args.some((arg) => arg.toLowerCase() === "/s")) {
    createWindow();
  } else if (args.some((arg) => arg.toLowerCase() === "/c")) {
    showConfig();
    app.quit();
  } else if (args.some((arg) => arg.toLowerCase() === "/p")) {
    // Preview mode (not handled here)
    app.quit();
  } else {
    // Default behavior: launch screensaver
    createWindow();
  }
});

app.on("window-all-closed", () => {
  app.quit();
});
