var express = require('express');
var router = express.Router();

// 渲染到login
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
