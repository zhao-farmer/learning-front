enum Direction {
    Up,
    Down,
    Left,
    Right,
}

function walk(n: Direction) {
    if (n === Direction.Up) {
        console.log("向【上】⾛");
    } else if (n === Direction.Down) {
        console.log("向【下】⾛");
    } else if (n === Direction.Left) {
        console.log("向【左】⾛");
    } else if (n === Direction.Right) {
        console.log("向【右】⾛");
    } else {
        console.log("未知⽅向");
    }
}
walk(Direction.Up);
walk(Direction.Down);


export {}