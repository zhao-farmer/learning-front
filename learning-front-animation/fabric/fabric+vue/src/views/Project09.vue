<template>
 <div class="main">
    <div>
        <el-button @click="openDrawing()">开始绘图</el-button>
        <el-button @click="closeDrawing()">结束绘图</el-button>
    </div>
    <div class="lock-one">
        <canvas height="600px" width="600px" id="canvas"></canvas>
    </div>
 </div>
</template>

<script>
export default {
 components:{

 },
 data () {
  return {
    
  }
 },
 created(){

 },
 mounted() {
    this.init()
 },
 methods:{
    init(){
        this.canvas = new fabric.Canvas('canvas', {
            isDrawingMode: false 
        })
        this.canvas.freeDrawingBrush.color = '#11999e' // 设置画笔颜色
        this.canvas.freeDrawingBrush.width = 10 // 设置画笔粗细
        this.canvas.freeDrawingBrush.shadow = new fabric.Shadow({ // 设置画笔投影
            blur: 10,
            offsetX: 10,
            offsetY: 10,
            affectStroke: true,
            color: '#30e3ca'
        })
    },
    // 开启绘图模式
    openDrawing(){
        this.canvas.isDrawingMode = true;
    },
    //关闭绘图模式
    closeDrawing(){
        this.canvas.isDrawingMode = false;
    }

 },
 beforeDestroy(){

 }
}

</script>

<style  scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.lock-one{
    height: 600px;
    width: 600px;
    border: 1px solid #ccc;
}

</style>
