function A1(){
    _a1()
    console.log("A1");
}
function _a1(){
    console.log("_a1");
}
function A2(){
    console.log("A2");
}

// module.exports = A1
// 会替代前面的
// module.exports = A2

module.exports = {
    A1,
    A2
}