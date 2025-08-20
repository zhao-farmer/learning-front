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
    </div>
   </template>
   
   <script>
   export default {

    mounted() {
       this.load()
    },
    methods:{
       load(){
           //x轴锁定
           const canvas1 = new fabric.Canvas('c1'),
           canvas2 = new fabric.Canvas('c2'),
           canvas3 = new fabric.Canvas('c3');
         
           let rect1 = new fabric.Rect({
                left: 100,
                top: 100,
                width: 100,
                height: 100,
                fill: 'red'
            })
            rect1.animate("angle", 45, {
                onChange: canvas1.renderAll.bind(canvas1)
            })
            canvas1.add(rect1)

            let rect2 = new fabric.Rect({
                left: 100,
                top: 100,
                width: 100,
                height: 100,
                fill: 'red'
            })
            rect2.animate("angle", 45, {
                from: 0, 
                duration: 1000, 
                easing: fabric.util.ease.easeOutBounce, 
                onChange: canvas2.renderAll.bind(canvas2), 
                onComplete: (e) => { console.log(e) } 
            })
            canvas2.add(rect2)
   
       


            let rect3 = new fabric.Rect({
                left: 100,
                top: 100,
                width: 100,
                height: 100,
                fill: 'red'
            })
            // 向右移动100px
            rect3.animate('left', '+=100', {
                onChange: canvas3.renderAll.bind(canvas3)
            })
            
            // 逆时针旋转5度
            rect3.animate('angle', '-=5', {
                onChange: canvas3.renderAll.bind(canvas3)
            })
            canvas3.add(rect3)
       }
    },
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
   