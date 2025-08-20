// 引入mitt
import mitt from 'mitt'

// 调用mitt的带emitter,emitter能：绑定事件、触发事件
const emitter = mitt()

/* 
// 绑定事件
emitter.on('test1',()=>{
    console.log('test1被调用了');
})
emitter.on('test2',()=>{
    console.log('test2被调用了');
})

//触发事件
setTimeout(()=>{
    emitter.emit('test1')
    emitter.emit('test2')
},2000)


setTimeout(()=>{
    //关闭事件
    // emitter.off('test1')
    // emitter.off('test2')

    //全部清理
    emitter.all.clear()
},3000)
 */
// 暴露emitter
export default emitter