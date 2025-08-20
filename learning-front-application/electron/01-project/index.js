const {app,BrowserWindow} = require('electron');

let win = null;

app.on('ready', function() {
    win = new BrowserWindow({
        // 为页面集成Node.js环境
        webPreferences: {
            nodeIntegration: true
        }
    });
    // 访问资源文件
    win.loadFile('index.html');

    // 程序启动后开启 开发者工具
    // win.webContents.openDevTools();
    
    win.on('close',function() {
        win = null;
    })
});

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed',function() {
    app.quit();
})

