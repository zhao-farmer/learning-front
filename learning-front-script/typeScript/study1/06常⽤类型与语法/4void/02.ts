//无警告
function logMessage(msg: string): void {
    console.log(msg)
}
//无警告
function logMessage2(msg: string): void {
    console.log(msg)
    return;
}
//无警告
function logMessage3(msg: string): void {
    console.log(msg)
    return undefined
}


export {}