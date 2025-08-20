<template>
 <div class="main">
    <div>
        <div class="canvas_title">
          <span>拖拽</span>
        </div>
        <div class="canvas_box">
          <canvas height="400px" width="400px" id="c1"></canvas>
        </div>
    </div>
    <div >
      <div class="canvas_title">
        <el-button  @click="onManualScale(-100)">放大</el-button>
        <el-button  @click="onManualScale(100)">缩小</el-button>
      </div>
      <div class="canvas_box">
        <canvas :height="canvasBoxHeight + 'px'" :width="canvasBoxWidth + 'px'" id="c2"></canvas>
      </div>
    </div>
    <div>
      <div class="canvas_title">
        <span>使用鼠标在中心点放大</span>
      </div>
      <div class="canvas_box">
        <canvas height="400px" width="400px" id="c3"></canvas>
      </div>
    </div>
 </div>
</template>

<script>
export default {
 components:{

 },
 data () {
  return {
    lastPosX:0,
    lastPosY:0,
    canvasBoxWidth:500,
    canvasBoxHeight:500,
    isDragging:false,
    canvas1:null,
  }
 },
 created(){

 },
 mounted() {
    //获取canvas对象
    this.canvas1 = new fabric.Canvas('c1');
    this.canvas2 = new fabric.Canvas('c2');
    this.canvas3 = new fabric.Canvas('c3');
    this.load()
    this.canvas1.on('mouse:down', this.onMouseDown)
    this.canvas1.on('mouse:move', this.onMouseMove)
    this.canvas1.on('mouse:up', this.onMouseUp)
    
    this.canvas3.on('mouse:wheel', this.onMouseWheel)
 },
 methods:{
    load(){
        //将图片加载到画布上
        const imageUrl = require("../assets/images/meinv.jpeg");
        // 正常照片
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(1.2)
            this.canvas1.add(img)
           
        })
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(1.3)
            img.left = 200
            img.top = 200
            this.canvas2.add(img)
           
        })
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(1.4)
            img.left = 100
            img.top = 100
            this.canvas3.add(img)
           
        })

    },
    onMouseDown(opt) {
        this.lastPosX = opt.e.clientX
        this.lastPosY = opt.e.clientY
        this.isDragging = true
      },
      // 监听鼠标移动事件
      onMouseMove(opt) {
        if (this.isDragging) {
          this.canvas1.viewportTransform[4] += opt.e.clientX - this.lastPosX
          this.canvas1.viewportTransform[5] += opt.e.clientY - this.lastPosY
          this.canvas1.requestRenderAll()
          this.lastPosX = opt.e.clientX
          this.lastPosY = opt.e.clientY
        }
      },
      // 监听鼠标松开事件
      onMouseUp(opt) {
        if (this.isDragging) {
          this.canvas1.setViewportTransform(this.canvas1.viewportTransform)
          this.isDragging = false
        }
      },
      // 中心点缩放画布
      onManualScale(delta) {
        let zoom = this.canvas2.getZoom() // 获取画布当前缩放值
        zoom *= 0.999 ** delta
        zoom = zoom > 10 ? 10 : (zoom < 0.1 ? 0.1 : zoom) // 最大放大10倍，最小缩小至10%
        this.canvas2.zoomToPoint({ // 以画布中心点为基准缩放
          x: this.canvasBoxWidth / 2,  // canvasBoxWidth 画布宽度
          y: this.canvasBoxHeight / 2  // canvasBoxHeight 画布高度
        }, zoom)
      },
      // 监听鼠标放大缩小事件
      onMouseWheel(opt) {
          let delta = opt.e.deltaY // 滚轮，向上滚一下是 -100，向下滚一下是 100
          let zoom = this.canvas3.getZoom() // 获取画布当前缩放值
          zoom *= 0.999 ** delta
          zoom = zoom > 10 ? 10 : (zoom < 0.1 ? 0.1 : zoom) // 最大放大10倍，最小缩小至10%
          this.canvas3.zoomToPoint({ // 以鼠标指针位置为基准缩放
            x: opt.e.offsetX,
            y: opt.e.offsetY
          }, zoom)
          opt.e.preventDefault()
          opt.e.stopPropagation()
      },


    },
    beforeDestroy(){

    }
}

</script>

<style  scoped>
.main{
    display: grid;
    grid-template-columns: 600px 600px 600px;
    grid-template-areas: 
    "a1 a2 a3 ";
    gap: 10px;
    margin-left: 50px;
}
.canvas_title{
  height: 40px;
  display: flex;
  padding: 0 10px;
  align-items: center;
}
.canvas_box{
  border: 1px solid #ccc;
  height: 600px;
  width: 600px;
}
#c1,#c2,#c3{
  border: 1px solid blue;
}

</style>
