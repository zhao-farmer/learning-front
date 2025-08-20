let obj = Object.assign({ b: "c" }, { [Symbol("c")]: "d" });
console.log(obj);