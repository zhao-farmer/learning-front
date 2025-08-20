
<template>
    <button @click="getMsg">获取node版本信息</button>
    <button @click="setData">【D://hello.txt】写入文本 </button>
    <button @click="getData">【D://hello.txt】读取文本 </button>
</template>
<script setup lang="ts">
function getMsg(){
    alert('此应用的node版本: ' +  window.electronAPI?.nodeVersion
        + '\n此应用的chrome版本: '+ window.electronAPI?.chromeVersion 
        + '\n此应用的electron版本: '+ window.electronAPI?.electronVersion 
    )
}
function setData(){
    window.electronAPI.saveFile("D://hello.txt","测试写入文本")
}
async function getData(){
    let res = await window.electronAPI.readFile("D://hello.txt")
    console.log(res);
    
}
</script>