function logData<T, U>(data1: T, data2: U): T | U {
    console.log(data1, data2);
    return Date.now() % 2 ? data1 : data2;
}
logData<number, string>(100, "hello");
logData<string, boolean>("ok", false);


export {}