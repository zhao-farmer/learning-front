
import axios from "axios";
import { nanoid } from "nanoid";
// 人员管理相关的配置
const personOptions = {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            console.log(value);
            
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('').then(
                response =>{
                    context.commit(ADD_PERSON,{id:nanoid(),name:response.data})
                },
                error =>{
                    alert(error.message)
                }
            )
        },
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log("mutations中的ADD_PERSON被调用了"); 
            state.personList.unshift(value);
        }
        
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}

export default personOptions