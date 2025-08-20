interface PersonInterface {
    name: string; // 姓名
    age: number; // 年龄
}
interface PersonInterface {
    speak: () => void;
}
interface StudentInterface extends PersonInterface {
    grade: string; // 年级
}
const student: StudentInterface = {
    name: "李四",
    age: 18,
    grade: "⾼⼆",
    speak() {
        console.log(this.name, this.age, this.grade);
    },
};


export {}