class Point {
    constructor(x, y) {
        Object.assign(this, { x, y })
        console.log(this)
    }
}
const p1 = new Point('12', '23')
console.log(p1);