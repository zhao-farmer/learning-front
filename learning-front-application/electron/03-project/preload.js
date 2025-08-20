const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("myAPI", {
  controlBtn(type) {
    // 直接传递类型数据
    ipcRenderer.send("window-control", type);
  },
  winChange(state){
    // 传递状态数据
    ipcRenderer.send("window-change", state);
  }

});

