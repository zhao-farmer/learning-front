const { app, BrowserWindow } = require("electron");
const path = require('path');

// 创建窗口
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800, // 宽度
        height: 600, // 高度
        // 预加载页面
        webPreferences: {
            // 加载渲染进程
            preload: path.join(__dirname, "./preload.js"),
            // 允许渲染进程直接访问Node.js API
            nodeIntegration: true,
        },
    });

     // 绑定index
     mainWindow.loadFile("./pages/index.html");
}


//当app准备好后，执行createwindow创建窗口
app.on( 'ready' ,()=>{
    createWindow()
    console.log('应用加载完成');
})
