<template>
 <div class="main">
    <div class="lock-one">
        <canvas height="400px" width="400px" id="c1"></canvas>
    </div>
    <div class="lock-two">
        <canvas height="400px" width="400px" id="c2"></canvas>
    </div>
    <div class="lock-three">
        <canvas height="400px" width="400px" id="c3"></canvas>
    </div>
    
    <img src="../assets/images/meinv.jpeg" id="logo">

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
        const imageUrl = require("../assets/images/meinv.jpeg");

        //x轴锁定
        const canvas1 = new fabric.Canvas('c1'),
        canvas2 = new fabric.Canvas('c2'),
        canvas3 = new fabric.Canvas('c3');
        
        // 方式一 调用img图片实例
        let img = document.getElementById('logo')
        img.onload = () => {
            let canvasImage1 = new fabric.Image(img, {
                left: 200, // 距离画布左侧距离
                top: 200, // 距离画布顶部距离
                width: 200, // 图片宽度
                height: 200, // 图片高度
                angle: 50, // 旋转
                opacity: 1 // 透明度
            })
            canvas1.add(canvasImage1)
        }

        // 自己创建图片对象
        let newImg = new Image();
        newImg.src = imageUrl;

        newImg.onload = () => {
            let canvasImage1 = new fabric.Image(newImg, {
                left: 200, // 距离画布左侧距离
                top: 200, // 距离画布顶部距离
                width: 200, // 图片宽度
                height: 200, // 图片高度
                angle: -50, // 旋转
                opacity: 1 // 透明度
            })
            canvas3.add(canvasImage1)
        }

        // 方式3 调用url直接展示
        fabric.Image.fromURL(imageUrl, img => {
            let canvasImage2 = img.set({
                scaleX: 2,
                scaleY: 2,
                left:100,
                top:100
            })
            canvas2.add(canvasImage2)
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
