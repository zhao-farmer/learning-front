class Person {
    constructor(
        public name: string,
        public age: number,
        // IDCard属性为私有的 (private)属性，只能在【类内部】使⽤
        private IDCard: string
    ) {}
    private getPrivateInfo() {
        // 类内部可以访问私有的 (private)属性 —— IDCard
        return `身份证号码为：${this.IDCard}`;
    }
    getInfo() {
        // 类内部可以访问受保护的(protected)属性 —— name和age
        return `我叫: ${this.name}, 今年刚满${this.age}岁`;
    }
    getFullInfo() {
        // 类内部可以访问公开的 getInfo⽅法，也可以访问私有的getPrivateInfo⽅法
        return this.getInfo() + "， " + this.getPrivateInfo();
    }
}
const p1 = new Person("张三", 18, "110114198702034432");
console.log(p1.getFullInfo());
console.log(p1.getInfo());
// 以下代码均报错
// p1.name
// p1.age
// p1.IDCard
// p1.getPrivateInfo()

export {}