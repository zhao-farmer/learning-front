function logData<T>(data: T): T {
    console.log(data);
    return data;
}

logData<number>(100);
logData<string>("hello");

export {}