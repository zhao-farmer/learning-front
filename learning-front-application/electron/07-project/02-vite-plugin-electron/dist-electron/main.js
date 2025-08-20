"use strict";
const electron = require("electron");
const path = require("path");
const fs = require("fs");
let win = null;
function createWindow() {
  win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    // 预加载页面
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // 允许渲染进程直接访问Node.js API
      nodeIntegration: true,
      // 隔离上下文 设置false 为了vue直接获取一些信息
      contextIsolation: true
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile("dist/index.html");
  }
}
electron.app.on("ready", () => {
  createWindow();
  console.log("应用加载完成");
});
electron.ipcMain.on("create-file", function(event, systemPath, data) {
  fs.writeFileSync(systemPath, data);
});
electron.ipcMain.handle("file-read", function(event, systemPath) {
  const res = fs.readFileSync(systemPath).toString();
  return res;
});
