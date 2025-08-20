// FlyInterface 接⼝
interface FlyInterface {
    fly(): void;
}
// 定义 SwimInterface 接⼝
interface SwimInterface {
    swim(): void;
}
// Duck 类实现了FlyInterface 和SwimInterface 两个接⼝
class Duck implements FlyInterface, SwimInterface {
    fly(): void {
        console.log("鸭⼦可以⻜");
    }
    swim(): void {
        console.log("鸭⼦可以游泳");
    }
}
// 创建⼀个 Duck 实例
const duck = new Duck();
duck.fly(); // 输出: 鸭⼦可以⻜
duck.swim(); // 输出: 鸭⼦可以游泳


export {}