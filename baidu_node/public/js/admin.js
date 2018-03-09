/**
 * Created by 杨培肖 on 2017/2/9.
 */
$(document).ready(function () {
    //当打开后台页面的时候清空表格
   var $newsTable = $('#newsTable tbody');
    refreshNews();
    $("#btnSubmit").on('click',function (e) {
        //组织跳转
        e.preventDefault();
        //判断输入框
        if ($("#newstitle").val() == "" || $("#newsimg").val() == "" || $("#newstime").val() == "" || $("#newssrc").val() == ""){
            if ($("#newstitle").val() == ""){
                $("#newstitle").parent().addClass('has-error');
                alert("新闻标题不能为空");
            }else {
                $("#newstitle").parent().removeClass('has-error');
            }
            if ($("#newsimg").val() == ""){
                $("#newsimg").parent().addClass('has-error');
                alert("新闻图片地址不能为空");
            }else {
                $("#newsimg").parent().removeClass('has-error');
            }
            if ($("#newstime").val() == ""){
                $("#newstime").parent().addClass('has-error');
                alert("新闻时间不能为空");
            }else {
                $("#newstime").parent().removeClass('has-error');
            }
            if ($("#newssrc").val() == ""){
                $("#newssrc").parent().addClass('has-error');
                alert("新闻来源不能为空");
            }else {
                $("#newssrc").parent().removeClass('has-error');
            }
        }else {
            var jsonText = {
                $newstype : $('#newstype').val(),
                $newstitle : $('#newstitle').val(),
                $newsimg : $('#newsimg').val(),
                $newstime : $('#newstime').val(),
                $newssrc : $('#newssrc').val()
            } ;
            //提交添加
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                dataType: 'json',
                data: jsonText,
                success: function (data) {
                    if(data){
                        refreshNews();
                        alert("添加成功");
                    }else {
                        alert("添加失败");
                    }

                }

            })
        }

    });
    //删除操作
    //采用事件委托方式，利用表格在找到元素button
    var delectId = null;
     $newsTable.on('click','.btn-danger',function (e) {
        $('#delectModal').modal('show');
         //把右边值赋值给左边
         delectId = $(this).parent().prevAll().eq(5).html();
     });
    $("#confirmDelect").click(function (e) {
        if (delectId){
            $.ajax({
               url: '/admin/delete',
                type: 'post',
                dataType: 'json',
                data: {newsId:delectId},
                success: function (data) {
                    console.log("删除成功");
                    $('#delectModal').modal('hide');
                    refreshNews();
                }
            });
        }
    });
    //修改操作
    var updateId = null;
    $newsTable.on('click','.btn-primary',function (e) {
        $('#updateModal').modal('show');
        //把右边值赋值给左边
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: '/admin/update',
            type: 'get',
            dataType: 'json',
            data:{newsId:updateId},
            success: function (data) {
                // $("#unewsid").val(data[0].id);
                $("#unewstype").val(data[0].newstype);
                $("#unewstitle").val(data[0].newstitle);
                $("#unewsimg").val(data[0].newsimg);
                $("#unewssrc").val(data[0].newssrc);
                var time1 = (data[0].newstime).split('T')[0];
                $("#unewstime").val(time1);

            }
        })
    });
    $("#confirmUpdate").click(function (e) {
            $.ajax({
                url: '/admin/updated',
                type: 'post',
                dataType: 'json',
                data: {
                    unewsid:$("#unewsid").val(),
                    unewstype:$("#unewstype").val(),
                    unewstitle:$("#unewstitle").val(),
                        unewsimg:$("#unewsimg").val(),
                         unewstime:$("#unewstime").val(),
                            unewssrc:$("#unewssrc").val(),
                                id:updateId
                },
                success: function (data) {
                    $('#updateModal').modal('hide');
                    refreshNews();
                }
            });
    });




    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                data.forEach(function (item,index,array) {
                    var $tdId = $('<td>').html(item.id);
                    var $tdType = $('<td>').html(item.newstype);
                    var $tdTitle = $('<td>').addClass('adminWidth').html(item.newstitle);
                    var $tdImg = $('<td>').addClass('adminWidth').html(item.newsimg);
                    var $tdTime = $('<td>').html(item.newstime);
                    var $tdSrc = $('<td>').addClass('adminWidth1').html(item.newssrc);
                    var $td = $('<td>');
                    var $btn1 = $('<button>').addClass('btn btn-primary btn-xs').html("编辑");
                    var $btn2 = $('<button>').addClass('btn btn-danger btn-xs btnLeft').html("删除");
                    $td.append($btn1,$btn2);
                    var $tr = $('<tr>');
                    $tr.append($tdId,$tdType,$tdTitle,$tdImg,$tdTime,$tdSrc,$td);
                    $newsTable.append($tr);

                });
            }
        });
    }
});