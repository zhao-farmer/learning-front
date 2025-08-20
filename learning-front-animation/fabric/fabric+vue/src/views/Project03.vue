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
        canvas3 = new fabric.Canvas('c3');
      
        var circle = new fabric.Circle({
            radius: 100,
            fill: '#eef',
            scaleY: 0.5,
            originX: 'center',
            originY: 'center'
        });
        var text = new fabric.Text('hello world', {
            fontSize: 30,
            originX: 'center',
            originY: 'center'
        });
        //添加分组
        let group = new fabric.Group([ circle, text ], {
            left: 150,
            top: 100,
            angle: -10
        });
        
        canvas1.add(group);

        //修改分组中的信息
        var circle2 = new fabric.Circle({
            radius: 100,
            fill: '#eef',
            scaleY: 0.5,
            originX: 'center',
            originY: 'center'
        });
        var text2 = new fabric.Text('hello world', {
            fontSize: 30,
            originX: 'center',
            originY: 'center'
        });
        let group2 = new fabric.Group([ circle2, text2 ], {
            left: 150,
            top: 100,
            angle: -10
        });
        group2.item(0).set('fill', 'red');
        group2.item(1).set({
            text: 'trololo',
            fill: 'white'
        });
        canvas2.add(group2);


        //分组加载图片
        const imageUrl = require("../assets/images/meinv.jpeg");
        fabric.Image.fromURL(imageUrl, function(img) {
            var img1 = img.scale(0.6).set({ left: 10, top: 10 });
            fabric.Image.fromURL(imageUrl, function(img) {
                var img2 = img.scale(0.6).set({ left: 90, top: 90 });
                fabric.Image.fromURL(imageUrl, function(img) {
                    var img3 = img.scale(0.6).set({ left: 170, top: 170 });
                    canvas3.add(new fabric.Group([ img1, img2, img3], { left: 20, top: 20 }))
                });
            });
        });

    
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
