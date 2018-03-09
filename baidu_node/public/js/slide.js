/**
 * Created by 杨培肖 on 2017/2/8.
 */
$(document).ready(function () {
    //获取外层class
    var slideDiv = $(".slide-div");
    //获取ul
    var ul = slideDiv.find('ul');
    //获取span元素
    var showNum = slideDiv.find('.showNav span');
    //获取每个图片的宽度
    var imgWidth = ul.find('li').eq(0).width();
    //定时器
    var time = null;
    //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    var now = 0;
    //为每个按钮绑定一个点击事件
    showNum.on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        //获取哪个按钮被点击，也就是找到被点击按钮的索引值
        var index = $(this).index();
        now = index;
        //注意此处用到left属性，所以ul的样式里面需要设置position: relative
        if (now == 3){
            ul.css('left',-imgWidth*now-180)
        }else {
            ul.css('left',-imgWidth*now)
        }
    });
    time = setInterval(function () {//打开定时器
        //让图片的索引值次序加1，这样就可以实现顺序轮播图片
        now++;
        //当到达最后一张图的时候，让iNow赋值为第一张图的索引值
        if (now>showNum.length-1){
            //now = 4;
           now =0;


        }
        //模拟触发数字按钮的click
        showNum.eq(now).trigger('click');
    },2000);

});