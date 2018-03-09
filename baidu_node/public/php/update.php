<?php
/**
 * Created by PhpStorm.
 * User: 杨培肖
 * Date: 2017/2/9
 * Time: 22:24
 */
header("Content-type: application/json; charset=utf-8");
require_once ('db.php');
if ($link){
    $newsId = $_GET['newsId'];
    mysqli_query($link,"set names 'utf8'");
    $sql = "SELECT * FROM `news` WHERE `id` = {$newsId}";
    $result = mysqli_query($link,$sql);
    $resultArr = array();
    while ($row = mysqli_fetch_assoc($result)){
        array_push($resultArr,array(
            'id'=>$row['id'],
            'newstype'=>$row['newstype'],
            'newstitle'=>$row['newstitle'],
            'newsimg'=>$row['newsimg'],
            'newssrc'=>$row['newssrc'],
            'newstime'=>$row['newstime']
        ));
    }
    echo json_encode($resultArr);

}

mysqli_close($link);



?>