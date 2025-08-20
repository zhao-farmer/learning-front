<template>
 <div class="main">
    <div class="lock-one">
        <canvas height="400px" width="400px" id="c1"></canvas>
    </div>
    <div class="lock-twp">
        <canvas height="400px" width="400px" id="c2"></canvas>
    </div>
    <div class="lock-three">
        <canvas height="400px" width="400px" id="c3"></canvas>
    </div>
    <div class="lock-four">
        <canvas height="400px" width="400px" id="c4"></canvas>
    </div>
    <div class="lock-five">
        <canvas height="400px" width="400px" id="c5"></canvas>
    </div>
    <div class="lock-six">
        <canvas height="400px" width="400px" id="c6"></canvas>
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
    this.load()
 },
 methods:{
    load(){
        //x轴锁定
        const canvas1 = new fabric.Canvas('c1'),
        canvas2 = new fabric.Canvas('c2'),
        canvas3 = new fabric.Canvas('c3'),
        canvas4 = new fabric.Canvas('c4'),
        canvas5 = new fabric.Canvas('c5'),
        canvas6 = new fabric.Canvas('c6');
        var rect1 = new fabric.Rect({
            width: 100,
            height: 50,
            fill: '#ffde7d',
            top: 20,
            left: 20
        })
        var rect2 = new fabric.Rect({
            width: 100,
            height: 50,
            fill: '#ffde7d',
            top: 20,
            left: 20
        })
        var rect3 = new fabric.Rect({
            width: 100,
            height: 50,
            fill: '#ffde7d',
            top: 20,
            left: 20
        })
        var rect4 = new fabric.Rect({
            width: 100,
            height: 50,
            fill: '#ffde7d',
            top: 20,
            left: 20
        })
        var rect5 = new fabric.Rect({
            width: 100,
            height: 50,
            fill: '#ffde7d',
            top: 20,
            left: 20
        })

        //静止水平移动
        
        rect1.lockMovementX = true
        canvas1.add(rect1)

        //静止垂直移动
      
        rect2.lockMovementY = true
        canvas2.add(rect2)

        //静止旋转
      
        rect3.lockRotation = true
        canvas3.add(rect3)

        //静止水平缩放
      
        rect4.lockScalingX = true
        canvas4.add(rect4)

        //静止水平缩放

        rect5.lockScalingY = true
        canvas5.add(rect5)


        let boundingBox = new fabric.Rect({
            top: 50,
            left: 50,
            width: 300,
            height: 300,
            fill: '#f95959',
            //不可旋转
            selectable: false
        })
        let movingBox = new fabric.Rect({
            top: 100,
            left: 100,
            width: 50,
            height: 50,
            fill: 'yellow',
            //选中时是否显示无边框
            hasBorders: false,
            //能移动不能（编辑）操作
            hasControls: false,
            //覆盖时鼠标指针样式
            hoverCursor: 'move'
        })
        canvas6.add(boundingBox);
        canvas6.add(movingBox);
        canvas6.on("object:moving", (opt) => {
            let top = movingBox.top;
            let left = movingBox.left;
            let topBound = boundingBox.top;
            let bottomBound = topBound + boundingBox.height;
            let leftBound = boundingBox.left;
            let rightBound = leftBound + boundingBox.width;
            opt.target.left = Math.min(Math.max(left, leftBound), rightBound - movingBox.width)
            opt.target.top = Math.min(Math.max(top, topBound), bottomBound - movingBox.height)
        })

    }
 },
 beforeDestroy(){

 }
}

</script>

<style  scoped>
.main{
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 400px 400px;
    grid-template-areas: 
    "a1 a2 a3 "
    "a4 a5 a6 ";
    gap: 10px;
    margin-left: 50px;
}
.main>div{
    border: 1px solid #ccc;
}

</style>
