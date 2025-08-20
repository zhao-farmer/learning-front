// worker.js（worker线程）

self.addEventListener('message', e => {
    postMessage('Greeting from Worker');
});