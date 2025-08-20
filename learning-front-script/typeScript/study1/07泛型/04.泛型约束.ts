interface LengthInterface {
    length: number;
}
// 约束规则是：传⼊的类型T必须具有 length 属性
function logPerson<T extends LengthInterface>(data: T): void {
    console.log(data.length);
}
logPerson<string>("hello");
// 报错：因为 number不具备length 属性
// logPerson<number>(100)



export {}