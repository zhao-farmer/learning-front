<template>
    <div class="person">
      姓：<input type="text" v-model="firstName"> <br>
      名：<input type="text" v-model="lastName"><br>
      <button @click="changeFullName">将全名改为li-si</button><br>
      全名：<span>{{ fullName }}</span><br>
      全名：<span>{{ fullName }}</span><br>
      全名：<span>{{ fullName2() }}</span><br>
      全名：<span>{{ fullName2() }}</span><br>
    </div>
  </template>
  




<script setup lang="ts"> 
  import { ref ,computed} from 'vue';
  let firstName = ref('zhang');
  let lastName = ref('san');
  
  // 这么定义的fullNam是一个计算属性，且是只读的
  // let fullName = computed(()=>{
  //   console.log(1);
  //   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "~" + lastName.value;
  // })

  // 这么定义的fullNam是一个计算属性，可度可写的
  let fullName = computed({
    get(){
      console.log(1);
      return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "~" + lastName.value;
    },
    set(val){
      const [str1,str2] = val.split('-');
      firstName.value = str1;
      lastName.value = str2;
    }
  })

  function fullName2() {
    console.log(2);
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "~" + lastName.value;
  }

  function changeFullName(){
    fullName.value = 'li-si'
  }

</script>
  
  <style scoped>
    .person {
      background-color: skyblue;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
    }
    button{
        margin: 0 15px;
    }
    li{
      font-size: 20px;
    }
  </style>