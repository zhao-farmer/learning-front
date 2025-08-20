interface CountInterface {
    (a: number, b: number): number;
}
const count: CountInterface = (x, y) => {
    return x + y;
};


export {}