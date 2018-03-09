var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/*在主页获取响应*/
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;
  //连接数据库
    var connection = mysql.createConnection({
      hostname: 'localhost',
        port: 3306,
        user: 'root',
        password: "",
        database: 'news'
    });
    connection.connect();
    connection.query("SELECT * FROM `baidunews` WHERE `newstype`=?",[newstype],function (err,rows,fields) {
        if(err){
          console.log(err);
        }else {
          res.json(rows);
        }
    })
});

module.exports = router;
