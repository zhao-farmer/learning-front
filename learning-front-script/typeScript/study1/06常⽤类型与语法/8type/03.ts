//⾯积
type Area = {
    height: number; //⾼
    width: number; //宽
};

//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};

// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: "702",
};


export {}