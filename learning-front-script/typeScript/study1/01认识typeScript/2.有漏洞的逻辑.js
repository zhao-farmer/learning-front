const str = Date.now() % 2 ? "奇数" : "偶数";
if (str !== "奇数") {
    alert("hello");
} else if (str === "偶数") {
    alert("world");
}