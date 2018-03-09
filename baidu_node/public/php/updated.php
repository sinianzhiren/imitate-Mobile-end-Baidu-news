<?php
/**
 * Created by PhpStorm.
 * User: 杨培肖
 * Date: 2017/2/9
 * Time: 23:17
 */
header("Content-type: application/json; charset=utf-8");
require_once ('db.php');
if ($link){
    //插入新闻
    $newsId = $_POST['unewsid'];
    $newsType = $_POST['unewstype'];
    $newsTitle = $_POST['unewstitle'];
    $newsImg = $_POST['unewsimg'];
    $newsTime = $_POST['unewstime'];
    $newsSrc = $_POST['unewssrc'];
    $Id = $_POST['id'];
    $sql = "UPDATE `news` SET `id`='{$newsId}', `newstype`='{$newsType}',`newstitle`='{$newsTitle}',
`newsimg`='{$newsImg}',`newstime`='{$newsTime}',`newssrc`='{$newsSrc}' WHERE `id` = {$Id}";
    mysqli_query($link,"set names 'utf8'");
    $result = mysqli_query($link,$sql);
    echo json_encode(array('success'=>$sql));
}
    mysqli_close($link);




?>