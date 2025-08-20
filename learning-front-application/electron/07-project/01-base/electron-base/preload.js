const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("versions", {
    getVersions: name => {
        return process.versions[name];
    },
});

contextBridge.exposeInMainWorld("jinlin", {
    pika: "皮卡丘",
});

contextBridge.exposeInMainWorld("sex", "男");

contextBridge.exposeInMainWorld("dirname", ipcRenderer.invoke("__dirname"));
