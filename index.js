const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.loadFile('index.html');
  win.maximize();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})