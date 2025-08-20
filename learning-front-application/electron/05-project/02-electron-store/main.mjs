import { app, BrowserWindow,ipcMain } from "electron";
import path from "path";
import Store from 'electron-store';

const store = new Store();
let mainWindow = null;

// 创建窗口
function createWindow() {

    mainWindow = new BrowserWindow({
        width: 800, // 宽度
        height: 600, // 高度
        // 预加载页面
        webPreferences: {
            // 加载渲染进程
            preload: path.join(import.meta.dirname, "./preload.mjs"),
            // 允许渲染进程直接访问Node.js API
            nodeIntegration: true,
        },
    });
     // 绑定index
     mainWindow.loadFile("./pages/index.html");
}

// 存入数据
ipcMain.on('setData', (event, params) => {
    console.log(params);
    store.set('testData', params);
})

// 获取数据 要使用handle
ipcMain.handle('getData', (event, params) => {
    return store.get("testData");
})

//当app准备好后，执行createwindow创建窗口
app.on( 'ready' ,()=>{
    createWindow()
    console.log('应用加载完成');
})
