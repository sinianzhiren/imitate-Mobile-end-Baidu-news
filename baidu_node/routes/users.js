var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    hostname: 'localhost',
    port: 3306,
    user: 'root',
    password: "",
    database: 'news'
});
/* 后台页面响应 */
//获取新闻列表
router.get('/getnews', function (req, res, next) {
    connection.query('SELECT * FROM `baidunews`', function (err, rows) {
        res.json(rows);
    })
});
//确认更新
router.post('/updated', function (req, res) {
    //获取请求值
    var
        unewstype = req.body.unewstype,
        unewstitle = req.body.unewstitle,
        unewsimg = req.body.unewsimg,
        unewstime = req.body.unewstime,
        unewssrc = req.body.unewssrc,
        id = req.body.id;
    connection.query("UPDATE `baidunews` SET  `newstype`=?,`newstitle`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id` = ?", [ unewstype, unewstitle, unewsimg, unewstime, unewssrc, id], function (err, rows) {
        res.json(rows);
        //console.log(err);
    })
});
//修改操作
router.get('/update',function (req,res) {
   var newsId = req.query.newsId;
   connection.query("SELECT * FROM `baidunews` WHERE `id` = ?",[newsId],function (err,rows) {
       //console.log(rows);
       res.json(rows);
   })
});
//删除操作
router.post('/delete',function (req,res) {
    var newsid = req.body.newsId;
    connection.query("DELETE FROM `baidunews` WHERE `baidunews`.`id` = ?",[newsid],function (err,rows) {
        res.json(rows);
    })
});
//提交添加
router.post('/insert',function (req,res) {
   var $newstype = req.body.$newstype,
       $newstitle = req.body.$newstitle,
       $newsimg = req.body.$newsimg,
       $newstime = req.body.$newstime,
       $newssrc = req.body.$newssrc;
   connection.query("INSERT INTO `baidunews` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)",[$newstype,$newstitle,$newsimg,$newstime,$newssrc],function (err,rows) {
           res.json(rows);
   })
});
module.exports = router;
