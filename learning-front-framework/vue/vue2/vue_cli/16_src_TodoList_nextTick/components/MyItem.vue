<template>
   <li>
        <label>
        <!-- @click 与 @change 都可以 -->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        
        <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
     
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input v-show="todo.isEdit" type="text" ref="inputTitle" :value="todo.title" @blur="handleBlur(todo,$event)">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>

         <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todo'],

    methods:{
        // 勾选
        handleCheck(id){
           // 触发全局事件总线
           this.$bus.$emit('checkTodo',id)
        },
        // 删除
        handleDelete(id){
            if(confirm('确定删除吗')){
                // 使用函数调用
                // this.deleteTodo(id);
                // 触发全局事件总线
                // this.$bus.$emit('deleteTodo',id);
                // 消息订阅与发布
                pubsub.publish('deleteTodo',id);
            }
        },
        handleEdit(todo){
          // 如果todo身上有isEdit
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true;
          }else{
            // 原本没有属性的 使用 this.$set 
            this.$set(todo,'isEdit',true)
          }
          // DOM节点执行完毕之后 再执行
          this.$nextTick(function(){
             this.$refs.inputTitle.focus();
          })
        
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){

           todo.isEdit = false;
           if(!e.target.value.trim()) return alert('输入不能为空') 
           this.$bus.$emit('updateTodo',todo.id,e.target.value);
        }
    }
}
</script>

<style scoped>


/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
    background-color: #ddd;
}

li:hover button{
    display: unset;
}
</style>