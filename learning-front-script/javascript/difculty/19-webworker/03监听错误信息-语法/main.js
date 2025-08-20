// main.js（主线程）
const myWorker = new Worker('./worker.js'); // 创建worker

myWorker.addEventListener('error', err => {
    console.log(err.message);
});
myWorker.addEventListener('messageerror', err => {
    console.log(err.message)
});