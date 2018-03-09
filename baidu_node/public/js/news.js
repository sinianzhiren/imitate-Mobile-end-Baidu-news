/**
 * Created by 杨培肖 on 2017/2/9.
 */
$(document).ready(function () {
    refreshNews('精选');
    $('nav a').on('click',function (e) {
        e.preventDefault();
        var type = $(this).text();//type为汉字
        var all = $('nav a');
            if (type == '百家'){
                $("#Hundred").css('border-bottom','2px solid #fff');
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#Funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
            }else if (type== '本地'){
                $("#local").css('border-bottom','2px solid #fff');
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#Funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
            }else if (type == '娱乐'){
                $("#entertainment").css('border-bottom','2px solid #fff');
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#Funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
            }else if (type == '社会'){
                $("#social").css('border-bottom','2px solid #fff');
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#Funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
            }else if (type == '军事'){
                $("#military").css('border-bottom','2px solid #fff');
                $("#women").removeAttr("style");
                $("#Funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
            }else if (type == '女人'){
                $("#women").css('border-bottom','2px solid #fff');
                $("#Funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
            }else if (type == '搞笑'){
                $("#Funny").css('border-bottom','2px solid #fff');
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
            }else if (type == '互联网'){
                $("#internet").css('border-bottom','2px solid #fff');
                $("#science").removeAttr("style");
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#funny").removeAttr("style");
            }else if (type == '科技'){
                $("#science").css('border-bottom','2px solid #fff');
                $("#more").removeAttr("style");
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#funny").removeAttr("style");
                $("#internet").removeAttr("style");
            }else if (type == '更多'){
                $("#more").css('border-bottom','2px solid #fff');
                $("#Featured").removeAttr("style");
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
            }else {
                $("#Featured").css('border-bottom','2px solid #fff');
                $("#Hundred").removeAttr("style");
                $("#local").removeAttr("style");
                $("#entertainment").removeAttr("style");
                $("#social").removeAttr("style");
                $("#military").removeAttr("style");
                $("#women").removeAttr("style");
                $("#funny").removeAttr("style");
                $("#internet").removeAttr("style");
                $("#science").removeAttr("style");
                $("#move").removeAttr("style");

            }
        refreshNews(type);
    });
    function refreshNews(type) {
        //获取ul
        var $lists = $('.news-main ul');
        //每次清空ul内容
        var li = $lists.empty();
        $.ajax({
            url:'/news',
            type: 'get',
            dataType: 'json',
            data: {newstype:type},
            success: function (data) {
                data.forEach(function (item,index,array) {
                    if (item.newstype == type){
                        //创建li标签添加class
                        var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                        //创建div标签添加class
                        var $newsImg = $('<div></div>').addClass('newsImg').appendTo($list);
                        //创建img标签添加class添加图片地址
                        var $img = $('<img>').attr('src',item.newsimg).addClass('imgHeight').appendTo($newsImg);
                        //创建div标签添加class
                        var newsContent = $('<div></div>').addClass('news-content').appendTo($list);
                        //创建h1标签添加内容
                        var h1 = $('<h1></h1>').html(item.newstitle).appendTo(newsContent);
                        //创建p标签添加
                        var p = $('<p></p>').appendTo(newsContent);
                        //创建span标签添加class和内容
                        var newsTime = $('<span></span>').addClass('newsTime').html(item.newstime).appendTo(p);
                        //创建span标签添加class和内容
                        var newsSrc = $('<span></span>').addClass('newsSrc').html(item.newssrc).appendTo(p);
                    }
                })

            }
        })

    }



});


