// main.js（主线程）
const myWorker = new Worker('./worker.js');

const obj = {name: '小明'};
myWorker.addEventListener('message', e => { 
    console.log(e.data === obj); // false
});
myWorker.postMessage(obj);