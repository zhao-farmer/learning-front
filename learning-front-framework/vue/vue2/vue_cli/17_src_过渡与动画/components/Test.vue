<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
         <!-- 直接使用css动画 -->
        <!-- <h1 v-show="isShow" class="come">你好啊！</h1> -->
        <!-- 没有名字使用v-enter-active与v-leave-active  -->
        <!-- <transition>
             <h1 v-show="isShow" >你好啊！</h1>
        </transition> -->
        <!-- 有名字使用hello-enter-active与hello-leave-active  -->
        <!-- :appear="true" 直接执行动画 -->
        <transition class="hello" appear>
             <h1 v-show="isShow" >你好啊！</h1>
        </transition>
      
    </div>
</template>

<script>
export default {
    name:'test',
    data(){
        return{
            isShow:true,
        }
    }
}
</script>

<style>
    h1{
        background-color: orange;
    }

    /* vue设定动画效果 */
    .v-enter-active{
         animation: atguigu 1s;
    }
    .v-leave-active{
         animation: atguigu 1s reverse;
    }

    /* 起名后 */
    .hello-enter-active{
         animation: atguigu 0.5s linear;
    }
    .hello-leave-active{
         animation: atguigu 0.5s linear reverse;
    }
    


    .come{
        animation: atguigu 1s;
    }
    /* reverse 是反转 */
    .go{
        animation: atguigu 1s reverse;
    }


    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to{
             transform: translateX(0px);
        }
    }
</style>