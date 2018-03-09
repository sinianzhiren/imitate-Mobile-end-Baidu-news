<?php
/**
 * Created by PhpStorm.
 * User: 杨培肖
 * Date: 2017/2/9
 * Time: 21:14
 */
header("Content-type: application/json; charset=utf-8");
require_once ('db.php');
if ($link){
    $newsId = $_POST['newsId'];
    mysqli_query($link,"set names 'utf8'");
    $sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsId}";
    mysqli_query($link,$sql);
    echo json_encode(array('删除状态'=>'成功'));
}else{
    echo "error";
}
mysqli_close($link);


?>