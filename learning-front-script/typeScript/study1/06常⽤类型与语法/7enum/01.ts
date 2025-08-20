function walk(str: string) {
    if (str === "up") {
        console.log("向【上】⾛");
    } else if (str === "down") {
        console.log("向【下】⾛");
    } else if (str === "left") {
        console.log("向【左】⾛");
    } else if (str === "right") {
        console.log("向【右】⾛");
    } else {
        console.log("未知⽅向");
    }
}
walk("up");
walk("down");
walk("left");
walk("right");

export {}