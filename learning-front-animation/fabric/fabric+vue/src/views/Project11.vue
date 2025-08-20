<template>
    <div class="main">
       <div class="example">
           <div class="title">
               <span>示例1：基础用法</span>
           </div>
           <div class="canvas_box">
               <canvas height="400px" width="400px" id="c1"></canvas>
           </div>
       </div>
       <div class="example">
           <div class="title">
               <span>示例2：文本修饰</span>
           </div>
           <div class="canvas_box">
               <canvas height="400px" width="400px" id="c2"></canvas>
           </div>
       </div>
       <div class="example">
           <div class="title">
               <span>示例3：可编辑文本</span>
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
            
            let text = new fabric.Text('Hello World!', {
                left: 40,
                top: 10,
                fontFamily: 'Comic Sans', // 字体
                fontSize: 40, // 字号
                fontWeight: 600, // 字体重量（粗细），normal、bold 或 数字（100、200、400、600、800）
                fontStyle: 'normal', // 字体风格 正常 normal 或 斜体 italic
                charSpacing: 100, // 字距
                fill: 'red', // 字体颜色
                cornerColor: 'pink', // 角的颜色（被选中时）
                angle: 30, // 旋转
                backgroundColor: '#ffd460', // 背景色
                borderColor: 'yellowGreen', // 边框颜色（被选中时）
                borderScaleFactor: 4, // 边框粗细（被选中时）
                borderDashArray: [10, 4, 20], // 创建边框虚线
                stroke: '#3f72af', // 文字描边颜色（蓝色）
                strokeWidth: 2, // 文字描边粗细
                textAlign: 'left', // 对齐方式：left 左对齐； right 右对齐； center 居中
                opacity: 0.8, // 不透明度
                // text: '雷猴', // 文字内容，会覆盖之前设置的值
                selectable: true, // 能否被选中，默认true
                shadow: 'rgba(0, 0, 0, 0.5) 5px 5px 5px', // 投影
            });
            canvas1.add(text)

            // 下划线
            let underlineText = new fabric.Text("I am an undrline text", {
                fontSize: 30, 
                underline: true
                
            })
            canvas2.add(underlineText)
            
            // 贯穿线
            let strokeThroughText = new fabric.Text("I am a stroke-through text", {
                fontSize: 30, 
                linethrough: true,
                top: 40
            })
            canvas2.add(strokeThroughText)
            
            // 上划线
            let overlineText = new fabric.Text("I am overline text", {
                fontSize: 30, 
                overline:true,
                top: 80
            })
            canvas2.add(overlineText)

            let IText = new fabric.IText('雷猴啊，双击打几个字试下~', {
                fontSize: 30, 
                top: 40,
                fontFamily: 'Comic Sans'
            })
            canvas3.add(IText)

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
