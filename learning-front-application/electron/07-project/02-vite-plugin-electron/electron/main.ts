import { app, BrowserWindow,ipcMain } from 'electron'
import path from 'path'
import fs from 'fs';

let win: BrowserWindow | null = null

// 创建窗口
function createWindow() {
     win = new BrowserWindow({
        width: 800, 
        height: 600,
        // 预加载页面
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
             // 允许渲染进程直接访问Node.js API
            nodeIntegration: true,
            // 隔离上下文 设置false 为了vue直接获取一些信息
            contextIsolation: true
        }
    })
    
    // 加载url 还是 文件
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
        // 加载您的文件
        win.loadFile('dist/index.html');
    }
}

//当app准备好后，执行createwindow创建窗口
app.on( 'ready' ,()=>{
    createWindow()
    console.log('应用加载完成');
})

// 写入文件
ipcMain.on("create-file",function(event,systemPath,data){
    fs.writeFileSync(systemPath,data);
})

// 读取文件
ipcMain.handle('file-read', function(event,systemPath){
  const res = fs.readFileSync(systemPath).toString();
  return res;
});