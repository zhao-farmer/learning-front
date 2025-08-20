//预加载脚本
const { contextBridge ,ipcRenderer,shell} =require ('electron'); 

contextBridge.exposeInMainWorld('myAPI',{
    openDialog() {
        ipcRenderer.send("openDialog");
    },
    // 提示信息
    showNotify1() {
        new window.Notification("预加载",{ body: '预加载脚本的具体消息内容' });
    },
    showNotify2() {
        ipcRenderer.send("show-notify");
    },
    openBaidu(){
      // 直接使用默认浏览器跳转
      shell.openExternal('https://www.baidu.com');
    },
    openBB(){
      ipcRenderer.send("show-test");
    }
})
