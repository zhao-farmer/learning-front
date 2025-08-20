const { app, BrowserWindow,Menu,ipcMain,dialog,globalShortcut,Tray,clipboard,Notification} = require("electron");
const path = require('path');
let mainWindow = null;

// 导入自定义菜单规则
const mouseMenu = require('./common/MouseMenu.js');
const menu = require('./common/Menu.js');

// 应用自定义菜单
Menu.setApplicationMenu(menu);

function createTray(){
    const tray = new Tray('./assets/image/icon1.png');
    const contextMenu = Menu.buildFromTemplate([
        { label: '显示窗口', click: () => mainWindow.show() },
        { label: '退出', click: () => {
                // 事件回调默认退出
                // app.quit()
                // 强制退出
                app.exit()
            } 
        }
    ]);
    tray.setContextMenu(contextMenu);
    tray.setToolTip('应用名称'); // 悬浮提示‌
    tray.on('click', () => {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
        mainWindow.setSkipTaskbar(!mainWindow.isVisible()); // 同步任务栏状态
    });
}

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

    // 右键菜单
    mainWindow.webContents.on('context-menu', (event, params) => {
        // 阻止默认事件，但会导致 app.quit() 无法退出
        // event.preventDefault()

        // 如果属于复制与粘贴
        if(clipboard.readText() || params.selectionText){
            const menuItems = []
            // 智能识别内容类型
            if (params.selectionText) {
              menuItems.push({
                label: '复制',
                // 选择的文本放入剪贴板中
                click: () => clipboard.writeText(params.selectionText)  
              })
            }
            // 有读取到文本
            if (clipboard.readText()) {
              menuItems.push({
                label: '粘贴',
                click: () => {
                    // 数据粘贴
                    mainWindow.webContents.paste()
                    // 清理剪贴板
                    setTimeout(() => {
                        clipboard.clear()
                    }, 200);
                }
              })
            }
            Menu.buildFromTemplate(menuItems).popup()  // 动态生成菜单
        }else{
            // 加载右键
            mouseMenu.popup({ 
                window: mainWindow, 
                x: params.x, 
                y: params.y 
            });
        }
    });

     // 绑定index
     mainWindow.loadFile("./pages/index.html");

    // 关闭时触发
     mainWindow.on('close', (e) => {
        e.preventDefault(); // 阻止默认关闭行为
        mainWindow.hide();         // 隐藏窗口
        mainWindow.setSkipTaskbar(true); // 从任务栏移除‌
    });
    
}

// 打开文件
ipcMain.on('openDialog', (event, action) => {
    dialog.showOpenDialog({
        title: "选择文件",
        buttonLabel: "打开文件",
        defaultPath: app.getPath('desktop'),
        properties: ['multiSelections'],
        filters: [
            { name: "图片", extensions: ["jpg", "png", "gif"] },
            { name: "视频", extensions: ["mkv", "avi", "mp4"] }
        ]
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
})

// 打开文件
ipcMain.on('show-notify', (event, action) => {
    const notify = new Notification({
        title: '主进程',
        body: '主进程的具体消息内容',
        silent: true // 禁用提示音
    })
    notify.show()
})

const { shell } = require("electron");
// 打开文件
ipcMain.on('show-test', (event, action) => {
    shell.beep()
})



//当app准备好后，执行createwindow创建窗口
app.on( 'ready' ,()=>{
    // 创建窗口
    createWindow()
    // 创建图标
    createTray()
    // 注册快捷键
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        // 打开开发者工具
        mainWindow.webContents.openDevTools();
        console.log('全局快捷键触发');
    });
})

// 应用退出
app.on('will-quit', () => {
    // 退出快捷键
    globalShortcut.unregisterAll();
});

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed',function() {
    app.quit();
})
