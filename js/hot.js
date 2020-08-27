$(function () {


    // 热门推荐
    $('.list1').find('li').mouseover(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        $('.hot-goods ul').eq($(this).index()).fadeIn(1000).addClass('change').siblings('ul').removeClass('change').fadeOut(0)

    })

    // 轮播图

    var flag = 0;
    var timer = setInterval(function () {
        change()
    }, 3000)
    function change() {
        flag++;
        if (flag == $(".banner-img li").length) {
            flag = 0;
        }
        // console.log(flag);
        //显示小圆点和图片
        $(".banner-img li").eq(flag).fadeIn(100).siblings("li").fadeOut(80);
        $('.item-ul li').eq(flag).addClass('item1').siblings('li').removeClass('item1')
    }

    // 清除定时器
    $('.banner').mouseover(function () {
        clearInterval(timer)
    })
    // 鼠标离开时间
    $('.banner').mouseout(function(){
        timer = setInterval(function () {
            change()
        }, 3000)
    })
    // 小圆点移动事件
        $('.item-ul li').mouseover(function(){
            $(this).addClass('item1').siblings('li').removeClass('item1');
            flag=$(this).index();
            // console.log(flag);
            $('.banner-img li').eq($(this).index()).show().siblings('li').hide();


        })



    // tab切换
    $('.house-goods').find('li').mouseover(function () {
        $(this).addClass('move').siblings('li').removeClass('move');
        $(this).parents('.kitchen-goods').find('.kitchen-goods-right').eq($(this).index()).addClass('move').siblings('.kitchen-goods-right').removeClass('move')
    })

    var item = 0;
    // 底部随收购
    // 小圆点
    $('.free-iocn').find('li').mouseover(function () {
        item=-$(this).index();
        $('.free-iocn').find('li').eq(Math.abs(item)).addClass("small-icon").siblings("li").removeClass("small-icon");
        var num = item * 1200 + 'px'
        fn1(num);
    })

    function fn1(item){
        $('.free-buy-move').stop().animate({
            'left':item
        },1000)
    }

    $('.pox').click(function () {
        item++;
        if (item > 0) {
            item = 0;
        }
        var num = item * 1200 + 'px'
        fn1(num);
        $('.free-iocn').find('li').eq(Math.abs(item)).addClass("small-icon").siblings("li").removeClass("small-icon");
    })
    $('.fox').click(function () {
        item--;
        if (item < -($('.free-buy-move li').length - 1)) {
            item = -($('.free-buy-move li').length - 1);
        }
        var num = item * 1200 + 'px';
        fn1(num);
        $('.free-iocn').find('li').eq(Math.abs(item)).addClass("small-icon").siblings("li").removeClass("small-icon");
    })


    // $('.free-cion li').mouseover(function(){
    //     console.log($('.free-cion li'));
    //     $(this).addClass("small-icon").siblings("li").removeClass("small-icon");
    //     $('.free-buy-move li').eq($(this).index()).addClass('moving').siblings().removeClass('moving')
    // })




    // 左边楼层导航
    $(window).scroll(function () {
        var oSrcollTop = $(window).scrollTop()
        if (oSrcollTop > 500) {
            $(".aside").fadeIn(500)
        } else {
            $(".aside").fadeOut(200)
        }



        //定位楼层导航
        var winH = $(window).height()

        $(".floor").each(function (index) {

            if (winH + oSrcollTop - $(this).offset().top > winH / 2) {
                $(".aside li").removeClass("active-1")
                $(".aside li").eq(index).addClass("active-1")
            }
        })
    })



    //点击侧边栏
    $(".aside li:not(.gotop)").click(function () {
        var oH = $(".floor").eq($(this).index()).offset().top - 100
        $("body,html").animate({
            "scrollTop": oH
        }, 500)
    })

    $(".gotop").click(function () {
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    })

    // 随手购小圆点
   

})