function B1(){
    _b1()
    console.log("B1");
}
function _b1(){
    console.log("_b1");
}
function B2(){
    console.log("B2");
}

// 第二种写法
exports.B1 = B1
exports.B2 = B2