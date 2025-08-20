//预加载脚本
import { contextBridge, ipcRenderer } from "electron";

// 绑定node版本数据
contextBridge.exposeInMainWorld("myAPI", {
    // 同步类型
    setData(data) {
        ipcRenderer.send("setData",data);
    },
    // 异步数据
    getData: ()=> {
        return ipcRenderer.invoke("getData");
    },
});
