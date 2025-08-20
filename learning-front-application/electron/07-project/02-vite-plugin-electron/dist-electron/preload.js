"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  nodeVersion: process.version,
  chromeVersion: process.versions.chrome,
  electronVersion: process.versions.electron,
  saveFile(systemPath, str) {
    electron.ipcRenderer.send("create-file", systemPath, str);
  },
  readFile: (systemPath) => {
    return electron.ipcRenderer.invoke("file-read", systemPath);
  }
});
