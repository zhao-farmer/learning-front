// main.js（主线程）
const myWorker = new Worker('/worker.js'); // 创建worker

const fun = () => {};

myWorker.postMessage(fun); // Error：Failed to execute 'postMessage' on 'Worker': ()=>{} could not be cloned.