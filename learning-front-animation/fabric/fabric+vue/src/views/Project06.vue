<template>
    <div class="main">
       <div class="lock-one">
           <canvas height="400px" width="400px" id="c1"></canvas>
       </div>
       <div class="lock-twp">
           <canvas height="400px" width="400px" id="c2"></canvas>
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
           canvas2 = new fabric.Canvas('c2');

            //线性渐变
            let circle = new fabric.Circle({
                left: 100,
                top: 100,
                radius: 50,
            })
            //渐变设定
            let gradient = new fabric.Gradient({
                type: 'linear', // linear or radial
                gradientUnits: 'pixels', // pixels or pencentage 像素 或者 百分比
                coords: { x1: 0, y1: 0, x2: circle.width, y2: 0 }, // 至少2个坐标对（x1，y1和x2，y2）将定义渐变在对象上的扩展方式
                colorStops:[ // 定义渐变颜色的数组
                    { offset: 0, color: 'red' },
                    { offset: 0.2, color: 'orange' },
                    { offset: 0.4, color: 'yellow' },
                    { offset: 0.6, color: 'green' },
                    { offset: 0.8, color: 'blue' },
                    { offset: 1, color: 'purple' },
                ]
            })
            circle.set('fill', gradient);
            canvas1.add(circle)

            
            //径向渐变
            let circle2 = new fabric.Circle({
                left: 100,
                top: 100,
                radius: 50
            })
            let gradient2 = new fabric.Gradient({
                type: 'radial',
                coords: {
                    r1: 50,
                    r2: 0,
                    x1: 50,
                    y1: 50,
                    x2: 50,
                    y2: 50,
                },
                colorStops: [
                    { offset: 0, color: '#fee140' },
                    { offset: 1, color: '#fa709a' }
                ]
            })
            circle2.set('fill', gradient2);
            canvas2.add(circle2)

       
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
   