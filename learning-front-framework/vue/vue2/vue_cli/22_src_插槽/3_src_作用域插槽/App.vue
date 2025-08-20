<template>
  <div class="container">
    
    <Category title="游戏" >
      <template scope="atguigu">
         <ul>
          <li v-for="(g,index) of atguigu.games" :key="index">{{g}}</li>
        </ul>
      </template> 
    </Category>

    <Category title="游戏" >
     <template scope="{games}">
         <ol>
          <li style="color:red" v-for="(g,index) of games" :key="index">{{g}}</li>
        </ol>
      </template> 
    </Category>

    <!-- slot-scope 是新的api  -->
    <Category title="游戏">
        <template slot-scope="{games}">
          <h4 v-for="(g,index) of games" :key="index">{{g}}</h4>
      </template> 
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
  export default {
      name:'App',
      components:{Category},
      
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
