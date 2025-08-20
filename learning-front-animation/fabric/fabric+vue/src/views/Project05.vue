<template>
    <div >
        <canvas height="600px" width="600px" id="c1"></canvas>
    </div>
</template>

<script>
export default {

 mounted() {
    this.load()
 },
 methods:{
   async load(){
        //x轴锁定
        const canvas = new fabric.Canvas('c1');

        const imageUrl = require("../assets/images/meinv.jpeg");
        // 正常照片
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(1.2)
            canvas.add(img)
        })
 
        // 单个滤镜
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(1.2)
            img.left = 200
            // 添加滤镜
            img.filters.push(new fabric.Image.filters.Grayscale())
            // 图片加载完成之后，应用滤镜效果
            img.applyFilters()
            canvas.add(img)
        })
 
        // 叠加滤镜
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(1.2)
            img.set({
                left: 200,
                top: 250,
            })
            img.filters.push(
                new fabric.Image.filters.Grayscale(),
                new fabric.Image.filters.Sepia(), //色偏
                new fabric.Image.filters.Brightness({ brightness: 0.2 }) //亮度
            )
            img.applyFilters()
            canvas.add(img)
        })

    }
 },

}

</script>

<style  scoped>

</style>
