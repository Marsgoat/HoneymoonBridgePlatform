const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  });

  window.loadFile('./src/index.html');
  buildMenu();

  window.once('ready-to-show', () => {
    window.show();
  });
}

function buildMenu() {
  const template = Menu.buildFromTemplate(require('./menu'));
  Menu.setApplicationMenu(template);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
