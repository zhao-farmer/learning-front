const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');

// 创建窗口
function createWindow() {
    mainWindow = new BrowserWindow({
        // 完全移除边框和标题栏
        frame: false,
        width: 800, // 宽度
        height: 600, // 高度
        autoHideMenuBar: true, // 自动隐藏菜单栏（默认是false）

         // 禁用窗口默认边框
        frame: false,
        // 窗口的透明属性
        transparent: true,
        // 窗口大小不可调整
        resizable: false,
        // 禁止窗口最大化
        maximizable: false,


        // 预加载页面
        webPreferences: {
            // 加载渲染进程
            preload: path.join(__dirname, "./preload.js"),
            // 允许渲染进程直接访问Node.js API
            nodeIntegration: true,
            // 禁用上下文隔离，意味着渲染进程的JavaScript环境与Electron内部环境共享同一个全局命名空间。
            // 常用于vue 直接获取上下文对象
            // contextIsolation: false
        },
    });

    // 窗口控制IPC监听
    ipcMain.on('window-control', (event, action) => {
        switch(action) {
            case 'minimize':
                mainWindow.minimize()
                break
            case 'maximize':
                if (mainWindow.isMaximized()) {
                    mainWindow.unmaximize() // 还原窗口
                } else {
                    mainWindow.maximize()   // 最大化窗口
                }
                break
            case 'close':
                mainWindow.close()
                break
        }
    });
    // 绑定index
    mainWindow.loadFile("./pages/index.html");
}

// 调整为圆形窗口
ipcMain.on('window-change', (event, action) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    if(action){
        // setIgnoreMouseEvents：使窗口忽略窗口内的所有鼠标事件，
        // 并且在此窗口中发生的所有鼠标事件都将被传递到此窗口背后的内容
        // forward：true 只有点击事件会穿透窗口，鼠标移动事件仍会正常触发
        win.setIgnoreMouseEvents(true, { forward: true });
   }else{
        win.setIgnoreMouseEvents(false);
    }
})


app.on("ready", () => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("closed", function () {
    mainWindow = null;
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
