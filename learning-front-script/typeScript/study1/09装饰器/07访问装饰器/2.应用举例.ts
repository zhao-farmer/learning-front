function RangeValidate(min: number, max: number) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        // 保存原始的 setter 方法，以便在后续调用中使用
        const originalSetter = descriptor.set;
        // 重写 setter 方法，加入范围验证逻辑
        descriptor.set = function (value: number) {
            // 检查设置的值是否在指定的最小值和最大值之间
            if (value < min || value > max) {
                // 如果值不在范围内，抛出错误
                throw new Error(`${propertyKey}的值应该在 ${min} 到 ${max}之间！`);
            }
            // 如果值在范围内，且原始 setter 方法存在，则调用原始 setter 方法
            if (originalSetter) {
                originalSetter.call(this, value);
            }
        };
    };
}
class Weather {
    private _temp: number;
    constructor(_temp: number) {
        this._temp = _temp;
    }
    // 设置温度范围在 -50 到 50 之间
    @RangeValidate(-50, 50)
    set temp(value) {
        this._temp = value;
    }
    get temp() {
        return this._temp;
    }
}
const w1 = new Weather(25);
console.log(w1);
w1.temp = 67;
console.log(w1);


export {}