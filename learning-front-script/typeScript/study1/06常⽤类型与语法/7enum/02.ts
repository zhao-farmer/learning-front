// 定义⼀个描述【上下左右】⽅向的枚举Direction
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction); // 打印Direction会看到如下内容
/* 
 {
    0:'Up', 
    1:'Down', 
    2:'Left', 
    3:'Right', 
    Up:0, 
    Down:1, 
    Left:2,
    Right:3
 } 
*/
// 反向映射
console.log(Direction.Up);
console.log(Direction[0]);
// 此⾏代码报错，枚举中的属性是只读的
Direction.Up = "shang";

export {}