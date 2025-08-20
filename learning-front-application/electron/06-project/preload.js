//预加载脚本
const { contextBridge ,ipcRenderer } =require ('electron') 

 
// 绑定node版本数据
contextBridge.exposeInMainWorld('myAPI',{
    nodeVersion:process.version,
    chromeVersion:process.versions.chrome,
    electronVersion:process.versions.electron
})
