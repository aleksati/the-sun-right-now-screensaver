// Hosts the node project as a desktop App using Electron
import { app, BrowserWindow, screen } from "electron";
import isDev from "electron-is-dev";
import { fileURLToPath } from "url";
import path from "path";
import { startAPI } from "./api.mjs";

// Start my Express API server for fetchin images
// import "./api.mjs";

//NEW!!
// Maybe this to make macOS may run the app headless
if (process.platform === "darwin") {
  app.setActivationPolicy("regular");
}

//true if running "npm run start" (checking prod build in dev mode). false for dev and production.
const checkBuild = true;

// Function to create the main screensaver window
const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,

    // NEW
    // show: false,
    // focusable: true,

    webPreferences: {
      nodeIntegration: true,
    },
  });

  // for debugging
  // win.webContents.openDevTools()

  if (isDev && checkBuild) {
    console.log("Dev and checkBuild env");
    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory
    const filePath = path.join(__dirname, "dist", "index.html");
    console.log("Loading from file:", filePath);
    win.loadFile(filePath);
  } else if (isDev) {
    console.log("Dev env");
    win.loadURL("http://localhost:8000");
    console.log("Loading from dev server:", "http://localhost:8000");
  } else {
    // this is production
    console.log("Production env");
    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory
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

  // NEW!!
  // win.once("ready-to-show", () => {
  //   win.show();
  //   win.focus();
  // });

  // Extra exit method for mouse movements
  const monitorMouseMovement = () => {
    let lastPos = screen.getCursorScreenPoint();
    const interval = setInterval(() => {
      const currentPos = screen.getCursorScreenPoint();
      if (currentPos.x !== lastPos.x || currentPos.y !== lastPos.y) {
        clearInterval(interval);
        app.quit();
      }
      lastPos = currentPos;
    }, 1000); // check every second
  };

  monitorMouseMovement();
};

// Optional: Config window (currently just logs)
function showConfig() {
  console.log("Screensaver config requested.");
  // You can implement a settings window here if desired
}

// // Handle command-line arguments
const args = process.argv.slice(1); // slice out the first one (electron binary)

app.whenReady().then(() => {
  // Start my Express API server for fetchin images
  startAPI();

  // Start my Express API server for fetchin images
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

    // macOS apps generally continue running even without any windows open. Activating the app when no windows are available should open a new one.
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  }
});

app.on("window-all-closed", () => {
  app.quit();
});
