<template>

  <div class="container">
    <Category title="美食" >
      <img slot="center" src="./assets/food.jpg" alt="">
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">更多美食</a>
      </div>
    </Category>
    <Category title="游戏" >
      <ul slot="center">
        <li v-for="(g,index) of games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
          <a href="http://www.baidu.com">单击游戏</a>
          <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" >
      <video slot="center" controls src="./assets/movie.mp4" />
      <!-- <div class="foot" slot="footer">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎前来观看电影！</h4> -->

      <template v-slot:footer>
           <div class="foot" >
              <a href="http://www.baidu.com">经典</a>
              <a href="http://www.baidu.com">热门</a>
              <a href="http://www.baidu.com">推荐</a>
          </div>
          <h4>欢迎前来观看电影！</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
  export default {
      name:'App',
      components:{Category},
      data(){
        return{
              foods:['火锅','烧烤','小龙虾','牛排'],
              games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
              films:['《教父》','《拆弹专家》','《流浪地球》','《尚硅谷》'],
          }
      },
  }
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }    

  .foot{
     display: flex;
      justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>
