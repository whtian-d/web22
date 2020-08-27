$(function(){
    function fn1(time){
        if(time.toString().length<=1){
            return '0'+time;
        }else{
            return time;
        }
    }
    function miaosha(ele,time){
        var nowdate=+ new Date();
        var olddata=+ new Date(time);
        var cha=(olddata-nowdate)/1000;
        var second=parseInt(cha%60);
        var mintu=parseInt(cha/60%60);
        var hour=parseInt(cha/60/60%24);
        var day=parseInt(cha/60/60/24%30);
        ele.find('.day').text(fn1(day));
        ele.find('.hour').text(fn1(hour));
        ele.find('.mintu').text(fn1(mintu));
        ele.find('.second').text(fn1(second));
        
    }
    console.log($('.ul-lists .li'));
    
    var timer1=setInterval(function(){
        miaosha($('.ul-lists .li').eq(0),'2020/08/25 09:56:45');;
        miaosha($('.ul-lists .li').eq(3),'2020/08/25 09:56:45');;
    },1000)
    var timer2=setInterval(function(){
        miaosha($('.ul-lists .li').eq(1),'2020/08/26 09:00:45');;
        miaosha($('.ul-lists .li').eq(4),'2020/08/26 09:00:45');;
    },1000)
    var timer3=setInterval(function(){
        miaosha($('.ul-lists .li').eq(2),'2020/08/27 19:56:45');;
        miaosha($('.ul-lists .li').eq(5),'2020/08/27 19:56:45');;
    },1000)

    // 上面默认按钮
    
    $('.sort-fl a').click(function(){
        $(this).addClass('active').siblings('a').removeClass('active');
        $(this).find('i').toggleClass('icon-cujiantou1');
        $(this).find('i').toggleClass('icon-cujiantou');
        $(this).siblings('a').find('i').toggleClass('icon-cujiantou1');
        $(this).siblings('a').find('i').toggleClass('icon-cujiantou');
    })
    // 
    
    $('.classification li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active')
        $('.ul-lists').eq($(this).index()).addClass('hover').siblings('.ul-lists').removeClass('hover');
    })
    // 点击跳转后
    
    var Tindex=location.hash.slice(location.hash.indexOf('#')+1);
    if(Tindex){
        $('.classification li').eq(Number(Tindex)+1).click();
    }
})