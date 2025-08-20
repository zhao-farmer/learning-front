const express = require('express');
const app = express();

 
app.get('/',(req,res)=>{
    // res.send(`
    //     <html>
    //         <h1>hello world</h2>
    //     </html>
    // `)
    res.send({
        name:'kerwin',
        age:100
    })
})

app.get('/login',(req,res)=>{
    res.write('login')
    res.end()
})

const func1 = (req,res,next) =>{
    // 验证用户token过期，cookie过期
    console.log('验证token');
    
    const isValid = true
    if(isValid){
        res.kerwin = '这是func1计算的结果'
        next()
    }else{
        // 返回结果
        res.send('error')
    }
}


const func2 = (req,res) =>{
    // 查询数据库
    // 返回内容
    console.log(res.kerwin);
    res.send({list:[1,2,3]})
}

app.get('/home',[func2])

app.get('list',(req,res)=>{
    res.send('list')
})

// 启动服务器
app.listen(3000, () => {
    console.log(`Server start`);
});