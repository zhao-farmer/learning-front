function logMessage(msg: string): undefined {
    console.log(msg)
}
let result = logMessage('你好')
if (result) {  //此行无警告
    console.log('logMessage?有返回值')
}


export {}