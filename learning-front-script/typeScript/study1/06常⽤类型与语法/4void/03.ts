function logMessage(msg: string): void {
    console.log(msg)
}

let result = logMessage('你好')
if (result) { //此行报错：无法测试"void"类型的表达式的真实性
    console.log('logMessage有返▣值')
}


export {}