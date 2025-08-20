// worker.js（worker线程）
self.addEventListener('message', e => {
    self.postMessage(e.data); // 将接收到的数据直接返回
});