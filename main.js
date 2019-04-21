// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow () {
  // Create the browser window.
  //가로, 새로, frame-> 윈도우 창 없음, transparent -> 투명, alwaysOnTop-> 최상단
  mainWindow = new BrowserWindow({
    width: 1280, 
    height: 720, 
    transparent: true,  //투명 유무
    frame: true,  //윈도우창 유무
    alwaysOnTop : false,  //최상단에 올라올건지
    minimizable: false, 
    maximizable: false,
    title: '웹뷰',
    acceptFirstMouse: true
  })
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  //강제로 최상단에 떠있도록 구성
  //setTimeout(function() { mainWindow.setAlwaysOnTop(true) },3000);
  //mainWindow에서 alwaysOnyop 하면 됌

  //메뉴 제거
  mainWindow.setMenu(null);

  //터치영역 전체 차단
  //mainWindow.setIgnoreMouseEvents(true);
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

let onlineStatusWindow

app.on('ready', createWindow)

/*
app.on('ready', () => {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/onlin-test.html`)

  console.log(`file://${__dirname}/onlin-test.html`)

})
*/


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



