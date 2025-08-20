interface PersonInterface {
    name: string; // 姓名
    age: number; //  年龄
}
interface StudentInterface extends PersonInterface {
    grade: string; //  年级
}
const stu: StudentInterface = {
    name: "张三",
    age: 25,
    grade: "⾼三 ",
};

export {}