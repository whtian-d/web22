// 地址与网站导航
$(function() {
        $('.cart').hover(function() {
            $('.cart_hid').show()
            $('.cart').css({
                'border-top': '1px solid #d2d2d2',
                'border-left': '1px solid #d2d2d2',
                'border-right': '1px solid #d2d2d2',
                'border-bottom': '1px solid white'
            })
        }, function() {
            $('.cart_hid').hide()
            $('.cart').css({
                'border': '1px solid #d2d2d2',
            })
        })
    })
    // 实现hover效果
$(function() {
        $('.aside>div').hover(function() {
            var index = $(this).index()
            $('.aside_hide').eq(index).show()
            $('.aside>div').eq(index).css('background', '#EE356C')
        }, function() {
            var index = $(this).index()
            $('.aside_hide').eq(index).hide()
            $('.aside>div').eq(index).css('background', '#FD5F8E')
        })
    })
    // 实现图片轮播效果
$(function() {
    var index = 0

    function changeImg() {
        $('.carousel_ban img').eq(index).fadeIn(800).siblings('img').fadeOut(100)
        $('.list li').eq(index).addClass('listactive').siblings('li').removeClass('listactive')
    }
    $('.list li').mouseover(function() {
        index = $(this).index()
        changeImg()
    })

    var time1 = setInterval(function() {
        if (index == 4) {
            changeImg()
            index = 0
        } else {
            changeImg()
            index++;
        }
    }, 3000)
    $('.carousel_ban').mouseover(function() {
        clearInterval(time1)
    })
    $('.carousel_ban').mouseleave(function() {
        time1 = setInterval(function() {
            if (index == 4) {
                changeImg()
                index = 0
            } else {
                changeImg()
                index++
            }
        }, 3000)
    })

})

$(function() {
        $('.women .foots-box li').mouseover(function() {
            var index = $(this).index()
            $('.women .goods_show').eq(index).addClass('goods_show_active').siblings('.women .goods_show').removeClass('goods_show_active')
            $('.women .foots-box li').eq(index).addClass('foots-box_active').siblings('.women .foots-box li').removeClass('foots-box_active')
        })

        $('.man .foots-box li').mouseover(function() {
            var index = $(this).index()
            $('.man .goods_show').eq(index).addClass('goods_show_active').siblings('.man .goods_show').removeClass('goods_show_active')
            $('.man .foots-box li').eq(index).addClass('foots-box_active').siblings('.man .foots-box li').removeClass('foots-box_active')
        })
        $('.underwear .foots-box li').mouseover(function() {
            var index = $(this).index()
            $('.underwear .goods_show').eq(index).addClass('goods_show_active').siblings('.underwear .goods_show').removeClass('goods_show_active')
            $('.underwear .foots-box li').eq(index).addClass('foots-box_active').siblings('.underwear .foots-box li').removeClass('foots-box_active')
        })
        $('.sport .foots-box li').mouseover(function() {
            var index = $(this).index()
            $('.sport .goods_show').eq(index).addClass('goods_show_active').siblings('.sport .goods_show').removeClass('goods_show_active')
            $('.sport .foots-box li').eq(index).addClass('foots-box_active').siblings('.sport .foots-box li').removeClass('foots-box_active')
        })
        $('.clothes .foots-box li').mouseover(function() {
            var index = $(this).index()
            $('.clothes .goods_show').eq(index).addClass('goods_show_active').siblings('.clothes .goods_show').removeClass('goods_show_active')
            $('.clothes .foots-box li').eq(index).addClass('foots-box_active').siblings('.clothes .foots-box li').removeClass('foots-box_active')
        })
    })
    //

$(function() {
    $('.flashsale_tit_frame').hover(function() {
        var index = $(this).index() - 1
        $('.flashsale_tit_frame').eq(index).animate({
            top: ('-2px')
        }, 100).css({
            'box-shadow': '0 0 10px 0 rgba(0,0,0,0.15)'
        })

    }, function() {
        var index = $(this).index() - 1
        $('.flashsale_tit_frame').eq(index).animate({
            top: ('2px')
        }, 100).css({
            'box-shadow': 'none'
        })
    })
})

$(function() {
        $('.goods_select>li').mouseover(function() {
            var index = $(this).index()
            var num = -index * 1200 + 'px'
            $('.shopping_goods ul').animate({
                left: num
            })
            $('.goods_select li').eq(index).addClass('goods_select_on').siblings('.goods_select li').removeClass('goods_select_on')
        })
        $('.shopping_btn_left').click(function() {
            if (parseInt($('.shopping_goods ul ').position().left) == -1200) {
                $('.shopping_goods ul').animate({
                    left: '0px'
                })
                $('.goods_select li').eq(0).addClass('goods_select_on').siblings('.goods_select li').removeClass('goods_select_on')
            } else if (parseInt($('.shopping_goods ul ').position().left) == -2400) {
                $('.shopping_goods ul').animate({
                    left: '-1200px'
                })
                $('.goods_select li').eq(1).addClass('goods_select_on').siblings('.goods_select li').removeClass('goods_select_on')
            }
        })
        $('.shopping_btn_right').click(function() {
            if (parseInt($('.shopping_goods ul ').position().left) == 0) {
                $('.shopping_goods ul').animate({
                    left: '-1200px'
                })
                $('.goods_select li').eq(1).addClass('goods_select_on').siblings('.goods_select li').removeClass('goods_select_on')
            } else if (parseInt($('.shopping_goods ul ').position().left) == -1200) {
                $('.shopping_goods ul').animate({
                    left: '-2400px'
                })
                $('.goods_select li').eq(2).addClass('goods_select_on').siblings('.goods_select li').removeClass('goods_select_on')
            }
        })
    })
    // 楼层定位
$(function() {
    $(window).scroll(function() {
        var oSrcollTop = $(window).scrollTop()
        console.log(oSrcollTop)
        if (oSrcollTop > 400) {
            $('aside').fadeIn(500)
        } else {
            $('aside').fadeOut(200)
        }
        var winH = $(window).height()
        console.log(winH)
        $('main>div').each(function(index) {
            if (winH + oSrcollTop - $(this).offset().top > winH / 2) {
                $('aside div').removeClass('asideactive')
                $('aside div').eq($(this).index()).addClass('asideactive')
            }
        })
    })

    $('aside div:not(.gotop)').click(function() {
        var oH = $('main>div').eq($(this).index()).offset().top - 100
        $('body,html').animate({
            'scrollTop': oH
        }, 500)
    })
    $('.gotop').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500)
    })
})