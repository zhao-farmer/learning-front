const express = require('express');
const server = express();
//配置解析post参数的-不用下载第三方 ,内置
//解析post参数-(url-ky格式) username=kerwin&password=1234
// app.use(express.urlencoded({ extended: false }));
//解析post参数-(json字符串) {name:"",age:100}
app.use(express.json());
server.post('/people', (req, resp) => {
  console.log(req.body);
  resp.send('')
})
server.listen(5050, () => console.log('服务器已就绪'))