// main.js（主线程）
const myWorker = new Worker('./worker.js'); // 创建 worker

myWorker.addEventListener('message', e => {
    console.log(e.data);
    myWorker.terminate(); // 关闭 worker
});

myWorker.postMessage('Greeting from Main.js');