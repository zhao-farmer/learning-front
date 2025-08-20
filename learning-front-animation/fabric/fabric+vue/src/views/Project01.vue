<template>
  <div class="main">
    <div class="button-box">
      <el-button @click="handleCopy()">复制</el-button>
      <el-button @click="handlePaste()">粘贴</el-button>
    </div>
    <div class="button-canvas">
      <canvas id="c" width="400px" height="400px" ></canvas>
    </div>
</div>
</template>

<script>
export default {
 components:{

 },
 data () {
  return {
    canvas:null,
    cloneObjects:null,
  }
 },
 created(){

 },
 mounted () {
  this.loadRect();
 },
 methods:{
  //画图
  loadRect(){
    //获取对象
    this.canvas = new fabric.Canvas('c')
    //深红
    var rect1 = new fabric.Rect({
      //长宽
      width: 60,
      height: 60,
      //距离
      left: 60,
      top: 30,
      //填充色 
      fill: '#d6195e',
      //边框颜色与边框宽度
      stroke : '#111',
      strokeWidth: 2,
      //旋转角度
      angle: 45,
      //圆角
      rx: 8,
      ry: 4, 
    });
    //浅红
    var rect2 = new fabric.Rect({
      width: 60,
      height: 60,
      left: 120,
      top: 30,
      fill: '#ef608f',
      stroke : '#111',
      strokeWidth: 2,
      angle: 45,
      rx: 4,
      ry: 8, 
    });
    this.canvas.add(rect1);
    this.canvas.add(rect2);

  },

  //复制
  handleCopy() {
    if (!this.canvas.getActiveObject()) {
      this.$message.warning('请先选择元素')
      return
    }
    this.canvas.getActiveObject().clone(cloned => {
      this.cloneObjects = cloned
    })
  },

  //粘贴
  handlePaste() {
    if (!this.cloneObjects) {
      return this.$message.warning('还没复制过任何内容')
    }
    this.cloneObjects.clone(cloned => {
      this.canvas.discardActiveObject() // 取消选择
      // 设置新内容的坐标位置
      cloned.set({
        left: cloned.left + 10,
        top: cloned.top + 10,
        evented: true
      })
      if (cloned.type === 'activeSelection') { // 如果复制的是多个对象，则需要遍历克隆对象
        cloned.canvas = this.canvas;
        cloned.forEachObject(obj => {
          this.canvas.add(obj)
        })
        cloned.setCoords()
      } else {
        this.canvas.add(cloned)
      }
      this.cloneObjects.top += 10
      this.cloneObjects.left += 10
      this.canvas.setActiveObject(cloned)
      this.canvas.requestRenderAll()
    })
  }
 },
 beforeDestroy(){

 }
}

</script>

<style  scoped>
.button-box{
  display: flex;
  gap: 5px;
  margin-bottom: 3px;
}
.button-canvas{
  border: 1px solid #ccc;
  height: 400px;
  width: 400px;
}
</style>
