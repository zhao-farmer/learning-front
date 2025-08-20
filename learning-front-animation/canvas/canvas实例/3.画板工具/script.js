//获取对象
const canvas = document.querySelector("canvas"),
//获取所有的点击标签
toolBtns = document.querySelectorAll(".tool"),
//获取填充颜色对象
fillColor = document.querySelector("#fill-color"),
//获取线条宽度
sizeSlider = document.querySelector("#size-slider"),
//获取颜色选中按钮
colorBtns = document.querySelectorAll(".colors .option"),
//获取颜色选中按钮
colorPicker = document.querySelector("#color-picker"),
//获取清除画板
clearCanvas = document.querySelector(".clear-canvas"),
//保存图片
saveImg = document.querySelector(".save-img"),

//2D类型
ctx = canvas.getContext("2d");

let prevMouseX,prevMouseY,snapshot,
isDrawing = false,
selectedTool = "brush",
brushWidth = 5,
selectedColor = "#000";

const setCanvasBackground = () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = selectedColor;
}

//初始化
window.addEventListener("load",() => {
    //设置画布的宽度与高度
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
})

//画线
const startDraw = (e) =>{
    isDrawing = true;
    //将鼠标初识位置 赋予设定的值
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;

    //设置开始，不让连线
    ctx.beginPath();
    //设置线的宽度
    ctx.lineWidth = brushWidth;
    //设置当前选中的颜色
    ctx.strokeStyle = selectedColor
    ctx.fillStyle = selectedColor
    //获取画板上所有的像素
    snapshot = ctx.getImageData(0,0,canvas.width,canvas.height)
}

//画线
const drawing = (e) =>{
    //判断鼠标点击时才会出现画线操作
    if(!isDrawing) return;
    //移动中每次都将鼠标未松开的画像清除
    ctx.putImageData(snapshot,0,0);

    //如果选中的id等于brush 能够画线  eraser等于橡皮
    if(selectedTool === 'brush' || selectedTool === 'eraser'){
        //如果是橡皮 设置成白色 其他类型使用 选中的颜色
        ctx.strokeStyle = selectedTool === "eraser" ? "#fff" :selectedColor;
        //线条
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke()
    }else if(selectedTool === 'rectangle'){
        //矩形
        drawRect(e);
    }else if(selectedTool === 'circle'){
        //圆形
        drawCircle(e);
    }else if(selectedTool === 'triangle'){
        //三角形
        drawTriangle(e);
    }
}
//画矩形
const drawRect = (e) =>{
    if(!fillColor.checked){
       return ctx.strokeRect(e.offsetX,e.offsetY,prevMouseX - e.offsetX,prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX,e.offsetY,prevMouseX - e.offsetX,prevMouseY - e.offsetY);
}
//画圆
const drawCircle = (e) => {
    //圆必须要有开始
    ctx.beginPath();
    //获取 pow 幂（原始数，元多次） sqrt平方根   移动的长与宽的2次幂相加 开平方
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX),2) + Math.pow((prevMouseY - e.offsetY),2))
    ctx.arc(prevMouseX,prevMouseY,radius,0, 2 * Math.PI);
    //判断是填充还是边框
    fillColor.checked?ctx.fill() : ctx.stroke();
}
//画三角形
const  drawTriangle = (e) =>{
    
    ctx.beginPath();
    //获取初识位置
    ctx.moveTo(prevMouseX,prevMouseY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY)
    ctx.closePath()
    fillColor.checked?ctx.fill() : ctx.stroke();
  
};

toolBtns.forEach(btn => {
    //所有class带有tool 点击时移除原来的active 将当前元素添加active
    btn.addEventListener("click",() => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active")
        selectedTool = btn.id;

    })
});

//设置线条大小
sizeSlider.addEventListener("change", ()=>
   brushWidth = sizeSlider.value
);


//设置选中的颜色
colorBtns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        //选择器交换
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected")
        //将背景颜色替换给自由选择
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
        console.log(btn);
    });
});

//第五项选颜色项
colorPicker.addEventListener("change",() =>{
    //将当前选择的颜色赋予上一层的背景色
    colorPicker.parentElement.style.background = colorPicker.value
    //触发父组件 点击事件
    colorPicker.parentElement.click();
});

//清理画布
clearCanvas.addEventListener("click",() =>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    setCanvasBackground();
})
//保存图片
saveImg.addEventListener('click',() =>{
    const link = document.createElement('a');
    link.download = `${Date.now()}` + '.jpg';
    link.href = canvas.toDataURL();
    link.click();
});

//绑定鼠标点击
canvas.addEventListener("mousedown",startDraw);
//绑定鼠标松开
canvas.addEventListener("mouseup",()=>  isDrawing = false);
//绑定鼠标移动
canvas.addEventListener("mousemove",drawing);