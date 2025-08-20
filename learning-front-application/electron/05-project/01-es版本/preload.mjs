//预加载脚本
import { contextBridge ,ipcRenderer } from 'electron';

// 绑定node版本数据
contextBridge.exposeInMainWorld('myAPI',{
    nodeVersion:process.version,
    chromeVersion:process.versions.chrome,
    electronVersion:process.versions.electron
})
