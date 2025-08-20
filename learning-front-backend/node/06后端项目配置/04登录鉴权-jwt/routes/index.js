var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// const token = JWT.generate({name:"kerwin"},"10s")
// JWT.verify(token)


module.exports = router;
