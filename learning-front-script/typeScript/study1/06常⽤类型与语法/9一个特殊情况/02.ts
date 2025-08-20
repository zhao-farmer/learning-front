type LogFunc = () => void;

const f1: LogFunc = () => {
    return 100; // 允许返回⾮空值
};

const f2: LogFunc = () => 200; // 允许返回⾮空值

const f3: LogFunc = function () {
    return 300; // 允许返回⾮空值
};


export {}