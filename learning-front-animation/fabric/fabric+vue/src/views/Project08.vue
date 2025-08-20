<template>
    <div class="canvas-box" ref="canvasBox">
      <canvas id="canvas" width="400px" height="400px"></canvas>
      <div id="delMenu" ref="delMenu" v-show="isShowDelMenu" :style="delMenuStyle" @contextmenu.prevent="">
        <el-button type="iconButton" icon="h-icon-delete" @click="handleDeleteMenu">删除</el-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'PointerDetail',
    data () {
      return {
        canvas: null,
        activeEle: null, // 上次选中元素
        isShowDelMenu: false, // 是否显示删除弹窗
        delMenuStyle: '' // 删除弹窗定位样式
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      // 初始化
      init() {
        this.canvas = new fabric.Canvas('canvas', {
          fireRightClick: true, // 启用右键，button的数字为3
          stopContextMenu: true, // 禁止默认右键菜单
        })
       

        
        this.canvas.on('mouse:down', this.onMouseDown)

        const imageUrl = require("../assets/images/meinv.jpeg");
        fabric.Image.fromURL(imageUrl, img => {
            img.scale(2)
            img.left = 100
            img.top = 100
            this.canvas.add(img)
        })
      },
      // 监听鼠标按下事件
      onMouseDown(opt) {
        console.log('1111');
        
        // 还原上次选中状态
        if (this.activeEle) {
          this.activeEle.set('fill', 'transparent')
          this.canvas.renderAll()
        }
        this.activeEle = opt.target || null
        // 按下鼠标右键
        console.log(opt.button);
        console.log(opt.target.type);
        
        
        if (opt.button === 3) {
          // 点击到非图片控件 显示删除弹窗和填充控件背景色
          if (opt.target && opt.target.type === 'image') {
            this.activeEle.set('fill', 'rgba(100, 100, 255, 0.3)')
            this.canvas.renderAll()
            this.isShowDelMenu = true
            this.$nextTick(() => {
              this.delMenuStyle = this.getMenuStyle(this.$refs.delMenu, opt)
              console.log( this.delMenuStyle);
              
            })
          } else {
            // 否则隐藏删除弹窗
            this.hiddenMenu()
          }
        // 按下鼠标左键
        } else {
          this.hiddenMenu()
        }
      },
      // 获取弹窗坐标
      getMenuStyle(ele, opt) {
        let menuWidth = ele.offsetWidth
        let menuHeight = ele.offsetHeight
        let pointX = opt.pointer.x + 2
        let pointY = opt.pointer.y + 2
        if (this.$refs.canvasBox.offsetWidth - pointX <= menuWidth) {
          pointX -= menuWidth
        }
        if (this.$refs.canvasBox.offsetHeight - pointY <= menuHeight) {
          pointY -= menuHeight
        }
        return `left: ${pointX}px; top: ${pointY}px;`
      },
      // 隐藏菜单
      hiddenMenu() {
        this.activeEle = null
        this.isShowDelMenu = false
      },
      // 删除选中元素
      handleDeleteMenu() {
        this.canvas.remove(this.activeEle)
        this.canvas.requestRenderAll()
        this.hiddenMenu()
      }
    }
  }
  
</script>

<style  scoped>

.canvas-box{
  border: 1px solid #ccc;
  height: 600px;
  width: 600px;
}
#canvas{
    border: 1px solid blue;
}

</style>
