// app 模块，它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const createWindow = () => {
    // 创建一个浏览器窗口对象
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // 窗口对象对应的html文件
    // win.loadFile("./pages/index.html");
    win.loadFile("./dist/index.html");
    // win.loadURL('http://localhost:5173/')
};

// app模块准备完成，创建窗口
app.whenReady().then(() => {
    ipcMain.handle("__dirname", () => __dirname);
    createWindow();
});
