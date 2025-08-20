const express = require('express');
const app = express();
const port = 3000;
 
// 主页路由
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
 
// RESTful API 接口
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
});
 
// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});