<?php
/**
 * Created by PhpStorm.
 * User: 杨培肖
 * Date: 2017/2/9
 * Time: 18:21
 */
//设置头部分
header("Content-type: application/json; charset=utf-8");
require_once ('db.php');
    if ($link){
        //插入新闻
        $newsType = $_POST['$newstype'];
        $newsTitle = $_POST['$newstitle'];
        $newsImg = $_POST['$newsimg'];
        $newsTime = $_POST['$newstime'];
        $newsSrc = $_POST['$newssrc'];
        $sql = "INSERT INTO `news` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`) VALUES 
          ('{$newsType}','{$newsTitle}','{$newsImg}','{$newsTime}','{$newsSrc}')";
        mysqli_query($link,"set names 'utf8'");
        $result = mysqli_query($link,$sql);
        echo json_encode(array('success'=>'ok'));
    }
//    mysqli_close($link);
?>