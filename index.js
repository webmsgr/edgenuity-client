const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const {Base64} = require('js-base64');
//skipper = Base64.encode(fs.readFileSync("js/skipper/release/skipper.min.js"))

//waitforinject = fs.readFileSync("js/waitforinject.js","ascii")
//waitforinject = waitforinject.replace("$code",skipper)
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL('https://www.edgenuity.com/')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on("web-contents-created",(event, contents) => {
  contents.on("dom-ready",() => {
    url = contents.getURL()
    //if (url == "https://r05.core.learn.edgenuity.com/Player/") {
    //  contents.executeJavaScript(waitforinject).then((e) => {console.log("Injected")})
    // }
  })
})