// worker.js（worker线程）

self.addEventListener('message', e => {

    postMessage('Greeting from Worker');
    
    self.close(); // 关闭 worker
    
    setTimeout(() => {
        console.log('setTimeout run');
        postMessage('Greeting from SetTimeout');
    },1000);
    
    Promise.resolve().then(() => {
        console.log('Promise run');
        postMessage('Greeting from Promise');
    })
    
    for (let i = 0; i < 1001; i++) {
        if (i === 1000) {
            console.log('Loop run');
            postMessage('Greeting from Loop');
        }
    }
    
});