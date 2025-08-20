<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/project01">复制粘贴</router-link> | 
      <router-link to="/project02">锁定</router-link> | 
      <router-link to="/project03">分组</router-link> | 
      <router-link to="/project04">动画</router-link> | 
      <router-link to="/project05">滤镜</router-link> | 
      <router-link to="/project06">渐变</router-link> | 
      <router-link to="/project07">拖拽和缩放画布</router-link> | 
      <router-link to="/project08">删除</router-link> | 
      <router-link to="/project09">开启绘图</router-link> | 
      <router-link to="/project10">绘制背景图片</router-link> | 
      <router-link to="/project11">绘制文本</router-link> | 
      <router-link to="/project12">绘制线和路径</router-link> | 
      <router-link to="/project13">自由绘制图形</router-link> | 

      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
