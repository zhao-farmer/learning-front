<template>
  <div id="app">
    <Person />
  </div>
</template>

<script>
import Person from './components/Person.vue';

export default {
  name: 'App',
  components: {
    Person
  },
  date(){
    return{
      isShow:true,
    }
  }
}
</script>

<style>

</style>
