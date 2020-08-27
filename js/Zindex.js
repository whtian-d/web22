$(function() {
    // 导航下拉
    $(".nav-right-site").hover(function() {
            $(".nav-right-site").css({
                "background-color": "#fff",
                "border-bottom": "2px solid #fff",
                "width": '80px',
                "margin-left": '1px',
                "height": "30px",
                "z-index": "2"
            })
            $(".nav-hide").css("display", "block")
        }, function() {
            $(".nav-right-site").css({
                "border-right": "0px",
                "width": "82px",
                "height": "30px",
                "margin-left": '0px',
                "line-height": "30px",
                "text-align": "center",
                "margin-top": "-1px",
                "border-bottom": "0px",
                "background-color": "#EEEEEE"
            })
            $(".nav-hide").css("display", "none")
        })
        // banner轮播
        //点击下一个按钮
    var index = 0
    $("#next").click(function() {
            index++
            if (index > $(".banner-img li").length - 1) {
                index = 0
            }
            changeImg()
        })
        //点击左边按钮
    $("#prev").click(function() {
        index--
        if (index < 0) {
            index = $(".banner-img li").length - 1
        }
        changeImg()
    })

    function changeImg() {
        $(".banner-img li").eq(index).fadeIn(600).siblings("li").fadeOut(600)
        $(".dots li").eq(index).addClass("active").siblings("li").removeClass("active")
    }

    //鼠标经过小圆点
    $(".dots li").mouseover(function() {
        index = $(this).index()
        changeImg()
    })

    var timer = setInterval(function() {
        $("#next").click()
    }, 3000)

    $(".banner").mouseenter(function() {
        clearInterval(timer)
    })
    $(".banner").mouseleave(function() {
            timer = setInterval(function() {
                $("#next").click()
            }, 3000)
        })
        //     // content轮播
        //     //点击下一个按钮
        // $(".next").click(function() {
        //         index++
        //         if (index > $(".recom-img li").length - 1) {
        //             index = 0
        //         }
        //         changeImg()
        //     })
        //     //点击左边按钮
        // $(".prev").click(function() {
        //     index--
        //     if (index < 0) {
        //         index = $(".recom-img li").length - 1
        //     }
        //     changeImg()
        // })

    // function changeImg() {
    //     $(".recom-img li").eq(index).fadeIn(600).siblings("li").fadeOut(200)
    //     $("#dot li").eq(index).addClass("act").siblings("li").removeClass("act")
    // }

    // //鼠标经过小圆点
    // $("#dot li").mouseover(function() {
    //     index = $(this).index()
    //     changeImg()
    // })

    // var timer = setInterval(function() {
    //     $(".next").click()
    // }, 3000)

    // $(".recom-center").mouseenter(function() {
    //     clearInterval(timer)
    //     $(".prev").css("display", "block")
    //     $(".next").css("display", "block")
    // })
    // $(".recom-center").mouseleave(function() {
    //     timer = setInterval(function() {
    //         $(".next").click()
    //     }, 3000)
    //     $(".prev").css("display", "none")
    //     $(".next").css("display", "none")
    // })
})
$(function() {
    // content轮播
    //点击下一个按钮
    var index = 0
    $(".next").click(function() {
            index++
            if (index > $(".recom-img li").length - 1) {
                index = 0
            }
            changeImg()
        })
        //点击左边按钮
    $(".prev").click(function() {
        index--
        if (index < 0) {
            index = $(".recom-img li").length - 1
        }
        changeImg()
    })

    function changeImg() {
        $(".recom-img li").eq(index).fadeIn(600).siblings("li").fadeOut(300)
        $("#dot li").eq(index).addClass("act").siblings("li").removeClass("act")
    }

    //鼠标经过小圆点
    $("#dot li").mouseover(function() {
        index = $(this).index()
        changeImg()
    })

    var timer = setInterval(function() {
        $(".next").click()
    }, 3000)

    $(".recom-center").mouseenter(function() {
        clearInterval(timer)
        $(".prev").css("display", "block")
        $(".next").css("display", "block")
    })
    $(".recom-center").mouseleave(function() {
        timer = setInterval(function() {
            $(".next").click()
        }, 3000)
        $(".prev").css("display", "none")
        $(".next").css("display", "none")
    })
});
// 倒计时
var showtime = function() {
    var nowtime = new Date(), //获取当前时间
        endtime = new Date("2021/4/20 12:00:00"); //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)),
        leftd = leftd < 10 ? '0' + leftd : leftd;
    //计算天数
    lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24),
        lefth = lefth < 10 ? '0' + lefth : lefth;
    //计算小时数
    leftm = Math.floor(lefttime / (1000 * 60) % 60),
        leftm = leftm < 10 ? '0' + leftm : leftm;
    //计算分钟数
    lefts = Math.floor(lefttime / 1000 % 60);
    lefts = lefts < 10 ? '0' + lefts : lefts; //计算秒数
    return "倒计时" + leftd + "天" + "&nbsp;" + lefth + ":" + leftm + ":" + lefts; //返回倒计时的字符串
}
var oP1 = document.getElementsByClassName("cuntdown")[0];
var oP2 = document.getElementsByClassName("cuntdown")[1];
var oP3 = document.getElementsByClassName("cuntdown")[2];
console.log(oP1);
setInterval(function() {
    oP1.innerHTML = showtime();
    oP2.innerHTML = showtime();
    oP3.innerHTML = showtime();
}, 1000); //反复执行函数本身