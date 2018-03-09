<?php
/**
 * Created by PhpStorm.
 * User: 杨培肖
 * Date: 2017/2/9
 * Time: 12:21
 */
header("Content-type: application/json; charset=utf-8");
require_once ('db.php');
    if ($link){
        //执行成功的过程
        if (isset($_GET['newstype'])){
            $newstype = $_GET['newstype'];
            $sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}'";
            mysqli_query($link,"set names 'utf8'");
            $result = mysqli_query($link,$sql);
            $resultArray = [];
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
            echo json_encode($resultArray);
        }else{
            $sql = "SELECT * FROM `news`";
            mysqli_query($link,"set names 'utf8'");
            $result = mysqli_query($link,$sql);
            $resultArr = [];
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
    }else{
        echo json_encode(array('success'=>'false'));
    }
    mysqli_close($link);
?>