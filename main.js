const {
  app,
  BrowserWindow
} = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //mainWindow.setMenu(null);
  //mainWindow.maximize();

  mainWindow.loadFile('ui/index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.webContents.on('console-message', function (event, level, message) {
    console.log("[WebClient Log] " + message + level);
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});