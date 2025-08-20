//预加载脚本
import { contextBridge, ipcRenderer } from "electron";

// 绑定node版本数据
contextBridge.exposeInMainWorld("electronAPI", {
    nodeVersion: process.version,
    chromeVersion: process.versions.chrome,
    electronVersion: process.versions.electron,
    saveFile(systemPath:String,str:String) {
        ipcRenderer.send("create-file", systemPath,str);
    },
    readFile: (systemPath:String) => {
        return ipcRenderer.invoke("file-read",systemPath);
    },
});
