const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', {
    isShow: false,
    error: '',
  });
});

router.post('/', (req, res) => {
    console.log(req.body);
    
  if (req.body.username === 'ds' && req.body.password === '123') {
    console.log('登录成功');
    // res.send("成功")
    // 重定向到home
    res.redirect('/index');
  } else {
    console.log('登录失败');
    res.render('login', { error: '用户名密码不匹配', isShow: true });
  }
});

module.exports = router;