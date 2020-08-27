// 最上面图片js
$(function () {
    $('.top-banner i').click(function () {
        $('.top-banner').hide();
    })

    // 上面固定栏的获取焦点js
    $('.search').focus(function () {
        $(this).prop('value', '');
    })
    $('.search').blur(function () {
        $(this).prop('value', '内衣');
    })
    // 隐藏栏二级导航
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
    // nav城市
    // hover显示效果


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

    // 轮播图
    var index = 1;

    function banner() {
        if (index == $('.banner-ul li').length) {
            index = 0;
        }
        banner_active(index);
        index++;
    }

    function banner_active(index) {
        $('.banner-ul li').eq(index).fadeIn(600).siblings('li').fadeOut(400);
        $('.small-circle li').eq(index).addClass('on').siblings('li').removeClass('on');
    }
    var btimerid = setInterval(banner, 2000)
    $('.banner').hover(function () {
        clearInterval(btimerid);
    }, function () {
        btimerid = setInterval(banner, 2000)
    })
    // 焦点轮播
    $('.small-circle li').click(function () {
        index = $(this).index();
        banner_active(index);
    })
    // 轮播I图结束
    // 轮播图右边小的tab切换
    $('.banner-r-m-tit a').mousemove(function () {
        $(this).addClass('on').siblings('a').removeClass('on');
        $('.ban-r-m-b ul').eq($(this).index()).fadeIn(300).siblings('ul').fadeOut(100);
    })

    // body3无缝轮播
    var num = 1;
    var liwidth = $('.bd3-ul li').outerWidth();
    var length = $('.bd3-ul li').length;
    $('.bd3-shop .next').click(function () {
        $('.bd3-ul').stop().animate({
            left: -num * liwidth + 'px'
        }, function () {
            $('.bd3-ul li').eq(0).appendTo($('.bd3-ul'));
            $('.bd3-ul').css('left', '0px');
        });

    })
    $('.bd3-shop .prev').click(function () {
        $('.bd3-ul li').slice(length - num).prependTo($('.bd3-ul'));
        $('.bd3-ul').css('left', -num * liwidth + 'px');
        $('.bd3-ul').stop().animate({
            left: '0px'
        })
    })
    var bd3timerid = setInterval(function () {
        $('.bd3-shop .next').click();
    }, 2000);
    $('.bd3-shop').hover(function () {
        clearInterval(bd3timerid);
    }, function () {
        bd3timerid = setInterval(function () {
            $('.bd3-shop .next').click();
        }, 2000);
    })
    // 隐藏固定搜索栏效果
    $(document).scroll(function () {
        // 让上面固定栏显示
        if ($(this).scrollTop() >= 350) {
            $('.top-fixed').slideDown();
        } else {
            $('.top-fixed').slideUp();
        }
        // 使侧边栏显示
        var bd4_top = $('.body2-main').offset().top - $('.top-fixed').height();

        if ($(this).scrollTop() >= bd4_top) {
            $('.fixed-left').show();
        } else {
            $('.fixed-left').hide();
        }
        //
        jumpfn();
    })
    // 回到顶部效果
    $('.fixed-left .left-item:last').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0
        })
    })
    // 点击侧边到对应的模块
    $('.fixed-left .left-item').click(function () {
        var wincsroll = $('.jump').eq($(this).index()).offset().top - $('.top-fixed').height();
        $('body,html').stop().animate({
            scrollTop: wincsroll
        })
    })
    jumpfn();
    // 跳楼效果
    function jumpfn() {
        // 对各个模块对象进行遍历
        $('.jump').each(function (index, item) {
            // 如股票到屏幕的百分之七十五的位置，对应的侧边栏则进行跳动
            // 滚动条的距离加上可视窗口的的高度减去对应模块距离最顶部的距离大于可视窗口的高度的百分之七十五
            if ($(window).scrollTop() + $(window).height() - $(item).offset().top > $(window).height() * 0.75) {
                $('.fixed-left .left-item').eq(index).addClass('active').siblings('.left-item').removeClass('active');
            }
        })
    }
})