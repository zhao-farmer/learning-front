//限制throwErrori函数不需要有任何返回值，任何值都不行，像undeifned、null都不行
function throwError(str: string): never {
    throw new Error('程序异常退出：' + str)
}

export {}