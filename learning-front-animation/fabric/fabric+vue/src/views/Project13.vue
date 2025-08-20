<template>
    <div class="main">
       <div class="example">
           <div class="title">
               <span>示例1：自由绘制矩形</span>
               <el-button  type="primary" plain size="small" @click="handleActiveRect">{{buttonRectName}}</el-button>
           </div>
           <div class="canvas_box" >
               <canvas width="600px" height="600px" id="c1"></canvas>
           </div>
       </div>
       <div class="example">
           <div class="title">
               <span>示例2：由绘制圆形</span>
               <el-button  type="primary" plain size="small" @click="handleActiveCircle">{{buttonCircleName}}</el-button>
           </div>
           <div class="canvas_box">
               <canvas width="600px" height="600px" id="c2"></canvas>
           </div>
       </div>
       <div class="example">
           <div class="title">
               <span>示例3：自由绘制椭圆形</span>
               <el-button  type="primary" size="small" @click="handleActiveEllipse"  plain>{{buttonEllipseName}}</el-button>
           </div>
           <div class="canvas_box">
               <canvas width="600px" height="600px" id="c3"></canvas>
           </div>
       </div>
       <div class="example">
        <div class="title">
            <span>示例4：自由绘制三角形</span>
            <el-button  type="primary" plain size="small" @click="handleActiveTriangle">{{buttonTriangleName}}</el-button>
        </div>
        <div class="canvas_box">
            <canvas width="600px" height="600px"  id="c4"></canvas>
        </div>
    </div>
    <div class="example">
        <div class="title">
            <span>示例5：自由绘制多边形</span>
            <el-button  type="primary" plain size="small" @click="handleActivePolygon">{{buttonPolygonName}}</el-button>
        </div>
        <div class="canvas_box">
            <canvas width="600px" height="600px" id="c5"></canvas>
        </div>
    </div>
    </div>
</template>
   
<script>
export default {
    data () {
        return {
            canvasRect:null,
            lastPointRect: null, // 上次鼠标点位坐标
            strokeColorRect: 'transparent', // 轮廓填充颜色
            isActiveRect: false, // 是否激活绘制矩形
            rectList: [], // 绘制的矩形列表
            buttonRectName:'激活',


            canvasCircle:null,
            circle:null,//绘制的圆形
            downPointCircle: null, // 鼠标按下时鼠标点位坐标
            strokeColorCircle: 'transparent', // 轮廓填充颜色
            isActiveCircle: false, // 是否激活绘制圆形
            circleList: [], // 绘制的圆形列表
            buttonCircleName:'激活',


            canvasEllipse: null,
            ellipse:null,
            downPointEllipse: null,
            strokeColorEllipse: 'transparent', // 轮廓填充颜色
            isActiveEllipse: false, // 是否激活绘制椭圆形
            ellipseList: [] ,
            buttonEllipseName:'激活',


            canvasTriangle: null,
            triangle:null,
            downPointTriangle: null,
            strokeColorTriangle: 'transparent', // 轮廓填充颜色
            isActiveTriangle: false, // 是否激活绘制三角形
            triangleList: [], // 绘制的三角形列表
            buttonTriangleName:'激活',

            polygon: null,
            canvasPolygon: null,
            strokeColorPolygon: 'transparent', // 轮廓填充颜色
            isActivePolygon: false, // 是否激活绘制多边形
            polygonList: [] ,// 绘制的多边形列表

            buttonPolygonName:'激活',
        }
    },

    mounted() {
        this.init()
    },
    methods:{
        init(){
            this.canvasRect = new fabric.Canvas('c1', {
                backgroundColor: '#2E3136',
                selectionColor: 'transparent',
                selectionBorderColor: 'transparent',
                hoverCursor: 'default'
            })
            this.canvasRect.on('mouse:down', this.onMouseDownRect)
            this.canvasRect.on('mouse:up', this.onMouseUpRect)
            this.canvasRect.on('object:added', this.onObjectAddedRect)



            this.canvasCircle = new fabric.Canvas('c2', {
                backgroundColor: '#2E3136',
                selectionColor: 'transparent',
                selectionBorderColor: 'transparent',
                hoverCursor: 'default'
            })
            
            this.canvasCircle.on('mouse:down', this.onMouseDownCircle)
            this.canvasCircle.on('mouse:move', this.onMouseMoveCircle)
            this.canvasCircle.on('mouse:up', this.onMouseUpCircle)
            this.canvasCircle.on('object:added', this.onObjectAddedCircle) 
            
            

            this.canvasEllipse = new fabric.Canvas('c3', {
             
                backgroundColor: '#2E3136',
                selectionColor: 'transparent',
                selectionBorderColor: 'transparent',
                hoverCursor: 'default'
            })
            this.canvasEllipse.on('mouse:down', this.onMouseDownEllipse)
            this.canvasEllipse.on('mouse:move', this.onMouseMoveEllipse)
            this.canvasEllipse.on('mouse:up', this.onMouseUpEllipse)
            this.canvasEllipse.on('object:added', this.onObjectAddedEllipse)



            this.canvasTriangle = new fabric.Canvas('c4', {
                backgroundColor: '#2E3136',
                selectionColor: 'transparent',
                selectionBorderColor: 'transparent',
                hoverCursor: 'default'
            })
            this.canvasTriangle.on('mouse:down', this.onMouseDownTriangle)
            this.canvasTriangle.on('mouse:move', this.onMouseMoveTriangle)
            this.canvasTriangle.on('mouse:up', this.onMouseUpTriangle)
            this.canvasTriangle.on('object:added', this.onObjectAddedTriangle)

            

            this.canvasPolygon = new fabric.Canvas('c5', {
                backgroundColor: '#2E3136',
                selectionColor: 'transparent',
                selectionBorderColor: 'transparent',
                hoverCursor: 'default'
            })
            this.canvasPolygon.on('mouse:down', this.onMouseDownPolygon)
            this.canvasPolygon.on('mouse:move', this.onMouseMovePolygon)
            this.canvasPolygon.on('mouse:dblclick', this.onDblclickPolygon)
            this.canvasPolygon.on('object:added', this.onObjectAddedPolygon)

        },

         // 监听鼠标按下事件
        onMouseDownRect(opt) {
            if (this.isActiveRect) {
                this.lastPointRect = opt.absolutePointer || null
                this.strokeColorRect = '#00FF64'
            }
        },
        // 监听鼠标松开事件
        onMouseUpRect(opt) {
            if (this.isActiveRect) {
                this.drawRect(opt.absolutePointer)
            }
        },
        // 绘制完成元素事件
        onObjectAddedRect(opt) {
            let target = opt.target
            if (target.stroke === '#00FF64') {
                this.isActiveRect && this.rectList.push(target)
            }
        },
        // 绘制矩形
        drawRect(pointer) {
            if (!this.lastPointRect || JSON.stringify(this.lastPointRect) === JSON.stringify(pointer)) { // 点击事件，不生成矩形
                return
            }
            console.log(this.lastPointRect);
            let top = Math.min(this.lastPointRect.y, pointer.y)
            let left = Math.min(this.lastPointRect.x, pointer.x)
            let width = Math.abs(this.lastPointRect.x - pointer.x)
            let height = Math.abs(this.lastPointRect.y - pointer.y)
            let rect = new fabric.Rect({ 
                top, 
                left,
                width,
                height,
                fill: 'transparent',
                stroke: this.strokeColorRect,
                selectable: false
            })
            this.canvasRect.add(rect)
            this.lastPointRect = null
            this.strokeColorRect = 'transparent'
        },
        // 激活绘制矩形
        handleActiveRect() {
            this.isActiveRect = !this.isActiveRect
            
            //设置按钮名称
            if(this.isActiveRect){
                this.buttonRectName = '关闭';
            }else{
                this.buttonRectName = '激活';
            }
            if(this.isActiveRect) {
                this.canvasRect.selectionBorderColor = '#00FF64'
            }
        },








        // 监听鼠标按下事件
        onMouseDownCircle(opt){
            if (this.isActiveCircle) {
                this.downPointCircle = opt.absolutePointer
                this.strokeColorCircle = '#00FF64'
                this.circle = new fabric.Circle({
                    top: this.downPointCircle.y,
                    left: this.downPointCircle.x,
                    radius: 0,
                    fill: 'transparent',
                    stroke: this.strokeColorCircle,
                    strokeWidth: 2,
                    selectable: false,
                })
                this.canvasCircle.add(this.circle)
            }
        },
        // 监听鼠标移动事件
        onMouseMoveCircle(opt) {
            if (this.isActiveCircle && this.circle) {
                let radius = Math.min(Math.abs(this.downPointCircle.x - opt.absolutePointer.x), Math.abs(this.downPointCircle.y - opt.absolutePointer.y)) / 2
                let top = opt.absolutePointer.y > this.downPointCircle.y ? this.downPointCircle.y : this.downPointCircle.y - radius * 2
                let left = opt.absolutePointer.x > this.downPointCircle.x ? this.downPointCircle.x :  this.downPointCircle.x - radius * 2
                this.circle.set('radius', radius)
                this.circle.set('top', top)
                this.circle.set('left', left)
                this.canvasCircle.requestRenderAll()
            }
        },
        // 监听鼠标松开事件
        onMouseUpCircle(opt) {
            if (this.isActiveCircle) {
                if (JSON.stringify(this.downPointCircle) === JSON.stringify(opt.absolutePointer)) {
                    this.canvasCircle.remove(this.circle)
                } else {
                    if (this.circle){
                        this.circle.set('stroke', this.strokeColorCircle)
                    }
                }
                this.circle = null
            }
        },
        // 绘制完成元素事件
        onObjectAddedCircle(opt) {
            let target = opt.target
            if (target.stroke === '#00FF64') {
                this.isActiveCircle && this.circleList.push(target)
            }
        },
        // 激活绘制圆形
        handleActiveCircle() {
            this.isActiveCircle = !this.isActiveCircle
             //设置按钮名称
            if(this.isActiveCircle){
                this.buttonCircleName = '关闭';
            }else{
                this.buttonCircleName = '激活';
            }
            if(this.isActiveCircle) {
                this.canvasCircle.selectionBorderColor = '#00FF64'
            }
        },




         // 监听鼠标按下事件
        onMouseDownEllipse(opt) {
            if (this.isActiveEllipse) {
                this.downPointEllipse = opt.absolutePointer
                this.strokeColorEllipse = '#00FF64'
                this.ellipse = new fabric.Ellipse({
                    top: this.downPointEllipse.y,
                    left: this.downPointEllipse.x,
                    rx: 0,
                    ry: 0,
                    fill: 'transparent',
                    stroke: this.strokeColorEllipse,
                    strokeWidth: 2,
                    selectable: false,
                })
                this.canvasEllipse.add(this.ellipse)
            }
        },
        // 监听鼠标移动事件
        onMouseMoveEllipse(opt) {
            if (this.isActiveEllipse && this.ellipse) {
                let rx = Math.abs(this.downPointEllipse.x - opt.absolutePointer.x) / 2
                let ry = Math.abs(this.downPointEllipse.y - opt.absolutePointer.y) / 2
                let top = opt.absolutePointer.y > this.downPointEllipse.y ? this.downPointEllipse.y : this.downPointEllipse.y - ry * 2
                let left = opt.absolutePointer.x > this.downPointEllipse.x ? this.downPointEllipse.x :  this.downPointEllipse.x - rx * 2
                this.ellipse.set('rx', rx)
                this.ellipse.set('ry', ry)
                this.ellipse.set('top', top)
                this.ellipse.set('left', left)
                this.canvasEllipse.requestRenderAll()
            }
        },
        // 监听鼠标松开事件
        onMouseUpEllipse(opt) {
            if (this.isActiveEllipse) {
                if (JSON.stringify(this.downPointEllipse) === JSON.stringify(opt.absolutePointer)) {
                this.canvasEllipse.remove(this.ellipse)
                } else {
                if (this.ellipse){
                    this.ellipse.set('stroke', this.strokeColorEllipse)
                }
                }
                this.ellipse = null
            }
        },
        // 绘制完成元素事件
        onObjectAddedEllipse(opt) {
            let target = opt.target
            if (target.stroke === '#00FF64') {
                this.isActiveEllipse && this.ellipseList.push(target)
            }
        },
        // 激活绘制椭圆形
        handleActiveEllipse() {
            this.isActiveEllipse = !this.isActiveEllipse
            if(this.isActiveEllipse){
                this.buttonEllipseName = '关闭';
            }else{
                this.buttonEllipseName = '激活';
            }
            if(this.isActiveEllipse) {
                this.canvasEllipse.selectionBorderColor = '#00FF64'
            }
        },

        

         // 监听鼠标按下事件
        onMouseDownTriangle(opt) {
            if (this.isActiveTriangle) {
                this.downPointTriangle = opt.absolutePointer
                this.strokeColorTriangle = '#00FF64'
                this.triangle = new fabric.Triangle({
                    top: this.downPointTriangle.y,
                    left: this.downPointTriangle.x,
                    width: 0,
                    height: 0,
                    fill: 'transparent',
                    stroke: this.strokeColorTriangle,
                    strokeWidth: 2,
                    selectable: false,
                })
                this.canvasTriangle.add(this.triangle)
            }
        },
        // 监听鼠标移动事件
        onMouseMoveTriangle(opt) {
            if (this.isActiveTriangle && this.triangle) {
                let width = Math.abs(this.downPointTriangle.x - opt.absolutePointer.x)
                let height = Math.abs(this.downPointTriangle.y - opt.absolutePointer.y)
                let top = opt.absolutePointer.y > this.downPointTriangle.y ? this.downPointTriangle.y : opt.absolutePointer.y
                let left = opt.absolutePointer.x > this.downPointTriangle.x ? this.downPointTriangle.x : opt.absolutePointer.x
                this.triangle.set('width', width)
                this.triangle.set('height', height)
                this.triangle.set('top', top)
                this.triangle.set('left', left)
                this.canvasTriangle.requestRenderAll()
            }
        },
        // 监听鼠标松开事件
        onMouseUpTriangle(opt) {
            if (this.isActiveTriangle) {
                if (JSON.stringify(this.downPointTriangle) === JSON.stringify(opt.absolutePointer)) {
                    this.canvas.remove(this.triangle)
                } else {
                    if (this.triangle){
                        this.triangle.set('stroke', this.strokeColorTriangle)
                    }
                }
                this.triangle = null
            }
        },
        // 绘制完成元素事件
        onObjectAddedTriangle(opt) {
            let target = opt.target
            if (target.stroke === '#00FF64') {
                this.isActiveTriangle && this.triangleList.push(target)
            }
        },
        // 激活绘制矩形
        handleActiveTriangle() {
            
            this.isActiveTriangle = !this.isActiveTriangle

            if(this.isActiveTriangle){
                this.buttonTriangleName = '关闭';
            }else{
                this.buttonTriangleName = '激活';
            }
            if(this.isActiveTriangle) {
                this.canvasTriangle.selectionBorderColor = '#00FF64'
            }
        },
        







         // 监听鼠标按下事件
        onMouseDownPolygon(opt) {
            if (this.isActivePolygon) {
                this.strokeColorPolygon = '#00FF64'
                if (this.polygon === null) {
                    this.createPolygon(opt)
                } else {
                    this.changeCurrentPolygon(opt)
                }
            }
        },
        // 监听鼠标移动事件
        onMouseMovePolygon(opt) {
            if (this.isActivePolygon && this.polygon) {
                this.changePolygonBelt(opt)
            }
        },
        // 鼠标双击事件
        onDblclickPolygon(opt) {
            this.finishPolygon(opt)
        },
        // 绘制完成元素事件
        onObjectAddedPolygon(opt) {
            let target = opt.target
            if (target.stroke === '#00FF64') {
                this.isActivePolygon && this.polygonList.push(target)
            }
        },
        // 创建多边形
        createPolygon(opt) {
            this.polygon = new fabric.Polygon(
                [
                    { x: opt.absolutePointer.x, y: opt.absolutePointer.y },
                    { x: opt.absolutePointer.x, y: opt.absolutePointer.y }
                ], 
                {
                    fill: 'transparent',
                    stroke: this.strokeColorPolygon,
                    objectCaching: false
                }
            )
            this.canvasPolygon.add(this.polygon)
        },
        // 修改当前正在创建的多边形
        changeCurrentPolygon(opt) {
            let points = this.polygon.points
            points.push({
                x: opt.absolutePointer.x,
                y: opt.absolutePointer.y
            })
            this.canvasPolygon.requestRenderAll()
        },
        // 多边形橡皮带
        changePolygonBelt(opt) {
            let points = this.polygon.points
            points[points.length - 1].x = opt.absolutePointer.x
            points[points.length - 1].y = opt.absolutePointer.y
            this.canvasPolygon.requestRenderAll()
        },
        // 完成多边形绘制
        finishPolygon(opt) {
            let points = this.polygon.points
            points[points.length - 1].x = opt.absolutePointer.x
            points[points.length - 1].y = opt.absolutePointer.y
            points.pop()
            points.pop()
            this.canvasPolygon.remove(this.polygon)
            if (points.length > 2) {
                let polygon = new fabric.Polygon(points, {
                    stroke: this.strokeColorPolygon,
                    fill: 'transparent',
                    selectable: false
                })
                this.canvasPolygon.add(polygon)
            } else {
                this.$message.warning('标记框小于最小标定像素！')
            }
            this.polygon = null
            this.canvasPolygon.requestRenderAll()
            this.strokeColorPolygon = 'transparent'
        },
        // 激活绘制多边形
        handleActivePolygon() {
            this.isActivePolygon = !this.isActivePolygon
            if(this.isActivePolygon) {
                this.canvasPolygon.selectionBorderColor = '#00FF64'
            }
        }

    },
   
}
   
   </script>
   
   <style  scoped>
   .main{
       display: grid;
       grid-template-columns: 600px 600px 600px;
       /* grid-template-rows: 600px 600px; */
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
       justify-content: space-between;
       align-items: center;
   }
   .canvas_box{
       border: 1px solid #ccc;
   }
   
   </style>
   