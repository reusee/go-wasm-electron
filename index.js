const electron = require('electron')

const {
  app,
  BrowserWindow,
} = electron

function newWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    center: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(newWindow)

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length == 0) {
    newWindow()
  }
})

