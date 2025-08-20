<template>
 <div class="main">
    <div class="example">
        <div class="title">
            <span>示例1：绘制直线</span>
        </div>
        <div class="canvas_box">
            <canvas height="400px" width="400px" id="c1"></canvas>
        </div>
    </div>
    <div class="example">
        <div class="title">
            <span>示例2：绘制虚线</span>
        </div>
        <div class="canvas_box">
            <canvas height="400px" width="400px" id="c2"></canvas>
        </div>
    </div>
    <div class="example">
        <div class="title">
            <span>示例3：绘制路径</span>
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
    
  }
 },
 created(){

 },
 mounted() {
    this.load()
 },
 methods:{
    load(){
        const canvas1 = new fabric.Canvas('c1'),
        canvas2 = new fabric.Canvas('c2'),
        canvas3 = new fabric.Canvas('c3');
        
        let line1 = new fabric.Line([0, 100, 100, 100], {
            fill: 'green', // 填充色
            stroke: 'green', // 笔触颜色
            strokeWidth: 2, // 笔触宽度
        });
        canvas1.add(line1);

        let line2 = new fabric.Line([0, 100, 100, 100], {
            fill: 'green', // 填充色
            stroke: 'green', // 笔触颜色
            strokeWidth: 2, // 笔触宽度
            strokeDashArray:[3,1]
        });
        canvas2.add(line2);

        let path3 = new fabric.Path('M 0 0 L 200 100 L 170 200 z')
        path3.set({
            top: 120, // 距离容器顶部距离 120px
            left: 120, // 距离容器左侧距离 120px
            fill: 'hotpink', // 填充 亮粉色
            opacity: 0.5, // 不透明度 50%
            stroke: 'black', // 描边颜色 黑色
            strokeWidth: 10 // 描边粗细 10px
        })
        canvas3.add(path3);

    },
 },
 beforeDestroy(){

 }
}

</script>

<style  scoped>
.main{
    display: grid;
    grid-template-columns: 400px 400px 400px;
    /* grid-template-rows: 400px 400px; */
    grid-template-areas: 
    "a1 a2 a3 ";
    gap: 10px;
    margin-left: 50px;
}
.example{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.title{
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.canvas_box{
    border: 1px solid #ccc;
}

</style>
