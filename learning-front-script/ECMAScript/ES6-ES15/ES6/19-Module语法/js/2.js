function A1(){
    _a1()
    console.log("A1");
}
// __proto__ 私有方法依然能访问
function _a1(){
    console.log("a1");
}

function A2(){
    console.log("A2");
}