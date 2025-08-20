<template>
   <div class="todo-footer" v-show="total">
        <label>
         
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <!-- 使用双向绑定 绑定的值不是data中的 而是计算属性（里面必须写上get与set） -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成 {{doneTotal}}</span> / 全部 {{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:"MyFooter",
    props:["todos","checkAlltodo","clearAllTodo"],
    computed:{
        total(){
            return this.todos.length;
        },
        doneTotal(){
            // reduce执行length次数项
            // 传入两个值 第一个值是当前返回的值 第二个值是初始值
            // pre上一次的值 current是当前的对象
            // const x = this.todos.reduce((pre,current)=>{
            //     console.log('@',pre,current);
            //     return pre + (current.done ? 1 : 0)
            // },0)
            return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1:0),0)
          
        },
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total >0;
            },
            set(value){
                 this.checkAlltodo(value)
            }
           
        },
    },
    methods:{
        // checkAll(e){
        //     this.checkAlltodo(e.target.checked)
        // },

        clearAll(){
            this.clearAllTodo();
        }
    }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>