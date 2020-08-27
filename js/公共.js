// city内部效果
$('.city-zimu a').bind('mouseover', function() {
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
$('.scrollimg').mousedown(function(e) {
    e.preventDefault();
    var downtop = e.offsetY;
    var maxscrolltop = $('.scroll-bar').height() - $('.scrollimg').height();
    var maxultop = $('#ul').height() - $('.ul-list').height();
    $('.scrollimg').mousemove(function(e) {
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
$('body').mouseup(function() {
        $('.scrollimg').unbind('mousemove');
    })
    // 鼠标滚轮事件
$('.scroll').bind('mousewheel', function(e) {
    e.preventDefault();
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
})