import { app, BrowserWindow } from "electron";
import path from "path";

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


function testpath(){
    console.log(app.getPath('appData')); // C:\Users\zhaojianhui\AppData\Roaming
    console.log(app.getPath('userData')); // C:\Users\zhaojianhui\AppData\Roaming\electron_basic04 （此处为 Windows 系统）
    console.log(app.getPath('home')); // C:\Users\zhaojianhui
    console.log(app.getPath('desktop')); // C:\Users\zhaojianhui\Desktop
}

function restart(){
    console.log(app.getPath('appData')); // 修改前：C:\Users\zhaojianhui\AppData\Roaming

    // 重置用户数据目录（参数一：要重置的路径的名称，参数二：具体的路径）
    app.setPath('appData','D:\\test')

    console.log(app.getPath('appData')); // 修改后：D:\test
}

function writeFile(){
    let dataPath = app.getPath("userData");
    // 写入的文件路径
    dataPath = path.join(dataPath, "test.txt");

    console.log(dataPath);
    fs.writeFileSync(dataPath, 'abc', { encoding: 'utf8' })
}



//当app准备好后，执行createwindow创建窗口
app.on( 'ready' ,()=>{
    createWindow()
    console.log('应用加载完成');
    // 测试路径
    testpath()
    restart()
    writeFile()
})
