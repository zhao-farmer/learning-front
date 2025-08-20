interface UserInterface {
    name: string;
    readonly gender: string; // 只读属性
    age?: number; // 可选属性
    run: (n: number) => void;
}

const user: UserInterface = {
    name: "张三",
    gender: "男",
    age: 18,
    run(n) {
        console.log(`奔跑了 ${n}⽶`);
    },
};


export {}