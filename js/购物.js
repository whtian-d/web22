$(function () {
    // 二级导航
    $('.allshop').mouseover(function () {
        $('.categorys-tab-content').show();
    })
    $('.allshop').mouseout(function () {
        $('.categorys-tab-content').hide();
    })
    $('.categorys-item').mouseover(function () {
        $(this).find('.categorys-items-layer').show();
        // $(this).siblings('.categorys-item').find('.categorys-items-layer').hide();
    })
    $('.categorys-item').mouseout(function () {
        $(this).find('.categorys-items-layer').hide();
        // $(this).siblings('.categorys-item').find('.categorys-items-layer').hide();
    })

    // city

    $('.city').hover(function () {
        $(this).addClass('hover');
        $('.city-none').show()
    }, function () {
        $(this).removeClass('hover');
        $('.city-none').hide()
    })

    // city内部效果
    $('.city-zimu a').bind('mouseover', function () {
        var index = $(this).index();
        // 获取ul的top值
        var maxscrolltop = $('.scroll-bar').height() - $('.scrollimg').height();
        var maxultop = $('#ul').height() - $('.ul-list').height();

        var ultop = $('#ul li').eq(index).position().top;
        // 对ul的top值进行限制
        ultop = ultop > maxultop ? maxultop : ultop;
        $('#ul').stop().animate({
            top: -ultop + 'px'
        })
        // 获取比例
        var bili = ultop / maxultop;
        var scrolltop = maxscrolltop * bili;
        scrolltop = scrolltop > maxscrolltop ? maxscrolltop : scrolltop;
        $('.scrollimg').stop().animate({
            top: scrolltop + 'px'
        })
    })
    // 滚动条事件
    $('.scrollimg').mousedown(function (e) {
        var downtop = e.offsetY;
        var maxscrolltop = $('.scroll-bar').height() - $('.scrollimg').height();
        var maxultop = $('#ul').height() - $('.ul-list').height();
        $('.scrollimg').mousemove(function (e) {
            var srcolltop = e.pageY - $('.scroll-bar').offset().top - downtop;
            srcolltop = srcolltop <= 0 ? 0 : srcolltop;
            srcolltop = srcolltop >= maxscrolltop ? maxscrolltop : srcolltop;
            // 获取滚动条的比例
            var bili = srcolltop / maxscrolltop;
            $('.scrollimg').stop().animate({
                top: srcolltop + 'px'
            }, 10);
            // 获取ul的移动距离
            var ultop = maxultop * bili;
            $('#ul').stop().animate({
                top: -ultop + 'px'
            })
        })
    });
    $('body').mouseup(function () {
        $('.scrollimg').unbind('mousemove');
    })
    // 鼠标滚轮事件
    $('.scroll').bind('mousewheel', function (e) {
        var maxscrolltop = $('.scroll-bar').height() - $('.scrollimg').height();
        var maxultop = $('#ul').height() - $('.ul-list').height();
        // 设置步长
        var step = 10;
        var bili = step / maxscrolltop;
        var ultop = bili * maxultop;
        if (e.originalEvent.wheelDelta > 0) {
            // 获取要移动的最大距离
            ultop = $('#ul').position().top + ultop;
            scrolltop = $('.scrollimg').position().top - step;

        } else {
            ultop = $('#ul').position().top - ultop;
            scrolltop = $('.scrollimg').position().top + step;
        }
        // 限制最大移动距离
        ultop = ultop <= -maxultop ? -maxultop : ultop;
        ultop = ultop >= 0 ? 0 : ultop;
        // 对scroll的top移动距离进行限制
        scrolltop = scrolltop >= maxscrolltop ? maxscrolltop : scrolltop;
        scrolltop = scrolltop <= 0 ? 0 : scrolltop;
        // 对ul和scroll的top值进行设置
        $('#ul').stop().animate({
            top: ultop + 'px'
        });
        $('.scrollimg').stop().animate({
            top: scrolltop + 'px'
        })
        e.preventDefault();
    })

    // 放大镜效果
    $('.bd2-content-prev .small-box').hover(function () {
        $('.bd2-content-prev .mask').show();
        $('.bd2-content-prev .bigbox').show();
       
        
    }, function () {
        $('.bd2-content-prev .mask').hide();
        $('.bd2-content-prev .bigbox').hide();
    })
    // 设置蒙版的大小

    // 蒙版的移动事件
    $('.bd2-content-prev .mask').mousemove(function (e) {
        //为蒙版设置大小
        var maskwidth = $('.smallimg').width() * $('.bigbox').width() / $('.bigimg').width();
        var maskheight = $('.smallimg').height() * $('.bigbox').height() / $('.bigimg').height();
        
        $('.bd2-content-prev .mask').css({
            'width': maskwidth+'px',
            'height': maskheight+'px'
        })
         
        // 
        var masktop = e.pageY - $('.small-box').offset().top - $(this).height() / 2;
        var maskleft = e.pageX - $('.small-box').offset().left - $(this).width() / 2;
        // 设置最大移动距离
        var maxTop = $('.small-box').height() - $(this).height();
        var maxLeft = $('.small-box').width() - $(this).width();
        masktop = masktop <= 0 ? 0 : masktop;
        masktop = masktop >= maxTop ? maxTop : masktop;
        maskleft = maskleft <= 0 ? 0 : maskleft;
        maskleft = maskleft >= maxLeft ? maxLeft : maskleft;
        // 获取比例
        var biliX = maskleft / maxLeft;
        var biliY = masktop / maxTop;
        $(this).css({
            top: masktop + 'px',
            left: maskleft + 'px'
        })
        // 获取到大图片的最大移动距离
        var maxbigleft = $('.bigimg').width() - $('.bigbox').width();
        var maxbigtop = $('.bigimg').height() - $('.bigbox').height();
        // 得到大图片的top、left
        var maximgtop = maxbigtop * biliY;
        var maximgleft = maxbigleft * biliX;
        $('.bigimg').css({
            top: -maximgtop,
            left: -maximgleft
        })
    })
    // 放大镜下面的切换图片
    $('.goods-lists .center a').mouseover(function(){
        $(this).addClass('active').siblings('a').removeClass('active');
        var src=$(this).find('img').attr('src');
        $('.small-box img').attr('src',src)
    })
    // 秒杀时间
    function fn1(time){
        if(time.toString().length<=1){
            return '0'+time;
        }else{
            return time;
        }
    }
    function miaosha(time){
        var olddate=+ new Date();
        var newdate=+ new Date(time);
        // 时间差
        var date=(newdate-olddate)/1000;
        
        // 转换剩余的时间
        var day=parseInt(date/60/60/24);
        var hour=parseInt(date/60/60%24);
        var mint=parseInt(date/60%60);
        var second=parseInt(date%60);
        // console.log(day.toString().length);
        $('.daojishi .day').text(fn1(day));
        $('.daojishi .hour').text(fn1(hour));
        $('.daojishi .mintues').text(fn1(mint));
        $('.daojishi .second').text(fn1(second));
    }
    var t=setInterval(function(){
        miaosha('2020/08/25');
    },1000);

    // 配送地址效果
    $('.address').hover(function(){
        $(this).find('.juti-add').show();
        $(this).find('.top i').prop('class','icon-xiajiantou iconfont')
    },function(){
        $(this).find('.juti-add').hide();
        $(this).find('.top i').prop('class','icon-shangjiantou iconfont')

    })
    
    $('.city1').click(function(){
        $(this).addClass('active').siblings('div').removeClass('active');
        $('.tab-content').children('div').eq($(this).index()).addClass('active').siblings('div').removeClass('active');
    })

    // 点击省份的东西
    var shengfen='';
    var shiqu='';
    var xiancheng='';
    $('#province_list a').click(function(){
        // 获取点击省份的li的index
        var index=$(this).parent().index();
        var clsname=$(this).attr('data-c');
        // 指行上面的点击事件，并将头部内容改变。
        $('.city1:nth-child(1)').text($(this).text());
        $('.city1:nth-child(2)').click().text("请选择市");
        $('.city1:nth-child(3)').text('县/区');
        // 将点击省份的值存储到全局变量内，点击完成后赋值给上面的值
        shengfen=$(this).text();
        // 将第二部分的ul和第三部分的ul全部隐藏
        $('.tab-content>div:nth-child(3) ul').removeClass('active');
        // 将第二部分对应的市区显示出来。
        $('.tab-content>div:nth-child(2) ul').each(function(index,item){
            if($(item).attr('data-c')==clsname){
                $(item).addClass('active');
            }else{
                $(item).removeClass('active');
            }
        })
    })

    // 市区部分点击事件
    $('.tab-content>div:nth-child(2) a').click(function(){
         // 获取点击城市的li的index
        var index=$(this).parent().index();
        var clsname=$(this).attr('data-c');
        console.log(clsname);
        
        //  执行点击第三块的事件
        $('.city1:nth-child(3)').click();
        // 将第二块上面的值对应进行切换
        $('.city1:nth-child(2)').text($(this).text());
        // 再将全局变量进行累加
        shiqu=' '+$(this).text();
        // 先将第三块所有地名隐藏
        $('.tab-content>div:nth-child(3) ul').each(function(index,item){
            if($(item).attr('data-c')==clsname){
                $(item).addClass('active');
            }else{
                $(item).removeClass('active');
            }
        })

    })

    // 县城部分点击事件
    $('.tab-content>div:nth-child(3) a').click(function(){
        // 将上面的第三块进行切换.
        $('.city1:nth-child(3)').text($(this).text());
        // 再将全局变量进行更新，并复制给上面的地址栏
        xiancheng=' '+$(this).text();
        $('.address .top l').text(shengfen+shiqu+xiancheng);
        $('.juti-add').hide();
    })

    // 旁边tab轮播
    // 获取到ul下li的绝对高度
    var tab_ul_top=$('.middle ul li').outerHeight(true);
    // 给上下箭头添加事件
    $('.bott .t').click(function(){
        // 先获取到ul的目前的定位的top值
        var oldtop=$('.middle ul').position().top;
        // 然后再加上li的绝对高度
        var newtop=oldtop+tab_ul_top;
        // 对ul的top值进行限制
        newtop=newtop>0?0:newtop;
        // 然后对ul的top值设置帧动画
        $('.middle ul').stop().animate({
            'top':newtop
        })
    })
    $('.bott .b').click(function(){
        var oldtop=$('.middle ul').position().top;
        var newtop=oldtop-tab_ul_top;
        var max=$('.middle ul').height()-$('.middle').height();
        newtop=newtop<-max?-max:newtop;
        $('.middle ul').stop().animate({
            'top':newtop
        })
    })
    // 下方tab切换
    $('.bd3-container .bd3-item').click(function(){
        $(this).addClass('active').siblings('.bd3-item').removeClass('active');
        $('.bd3-container .bd3-item-cont').eq($(this).index()).addClass('hover').siblings('.bd3-item-cont').removeClass('hover');
    })
    // 跳转页面显示不同
    var lists={
        'shouye':[{
            'img0':'0_thumb_P_1489097621996.jpg',
            'img1':'_thumb_P_1489097666943.jpg',
            'img2':'_thumb_P_1489097667231.jpg',
            'img3':'_thumb_P_1489097667603.jpg',
            'name':'Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
            'price':'¥7700.00'
        },{
            'img0':'0_thumb_G_1489102299856.jpg',
            'img1':'0_thumb_G_1489102299856.jpg',
            'img2':'_thumb_P_1489102305334.jpg',
            'img3':'_thumb_P_1489102305350.jpg',
            'name':'新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女',
            'price':'¥233.00'
        },{
            'img0':'0_thumb_P_1489102753387.jpg',
            'img1':'_thumb_P_1489102766368.jpg',
            'img2':'_thumb_P_1489102767107.jpg',
            'img3':'_thumb_P_1489102767718.jpg',
            'name':'新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮',
            'price':'¥300.00'
        }]
        
    }
    var Tresult=location.hash
    if(Tresult){
        var re=[];
        Tresult=Tresult.slice(Tresult.indexOf('#')+1);
        Tresult=Tresult.split('=');
        for(var i in lists){
            if(i==Tresult[0]){
                re=lists[i];
            }
        }
        re=re[Number(Tresult[1])];
        console.log(re['img']);
        $('.smallimg').prop('src','../images/'+re['img0']);
        $('.bigimg').prop('src','../images/'+re['img0']);
        $('.center a').eq(0).find('img').prop('src','../images/'+re['img0']);
        $('.center a').eq(1).find('img').prop('src','../images/'+re['img1']);
        $('.center a').eq(2).find('img').prop('src','../images/'+re['img2']);
        $('.center a').eq(3).find('img').prop('src','../images/'+re['img3']);
        $('.bd2-content-center .p-name').text(re['name']);
        $('.body1-main-items .p-desc').text(re['name']);
        $('head title').text(re['name']);
        $('.miaosha-price strong').text(re['price']);
    }
    
})
