// 导航
$(function() {
    $(".htNav-making-left").mouseenter(function() {
        $(".Secondnav").show()
        $(".Secondnav li:first").addClass("active").siblings("li").removeClass("active");
        $(".Secondnav").mouseenter(function() {
            $(this).show()
            $(".throndnav").show()
            $(".Secondnav li").mouseenter(function() {
                $(this).addClass("active");
                $(this).siblings("li").removeClass("active");
                var index = $(this).index();
                $(".throndnav div").eq(index).addClass("zs").siblings("div").removeClass("zs");
            })
        })
    })
    $(".Secondnav").mouseleave(function() {
        $(this).hide()
        $(".throndnav").hide()
    })
    $(".throndnav").mouseenter(function() {
        $(".Secondnav").show()
        $(this).show()
    })
    $(".throndnav").mouseleave(function() {
        $(".Secondnav").hide()
        $(".Secondnav li:first").addClass("active").siblings("li").removeClass("active");
    })
    $(".htNav-making-left").mouseleave(function() {}, function() {
        $(".Secondnav").hide()
        $(".throndnav").hide()
    })
    console.log($(".money"));

    // 鼠标进入显示导航栏
    $(".apched-01").mouseenter(function() {
        $(".mony-concent").stop().slideDown(500).show()
        $(".apched-01").css("background-color", "white")
    })
    $(".mony-concent").mouseenter(function() {
        $(".apched-01").css("background-color", "white")
        $(this).show()
    })
    $(".apched-01").mouseleave(function() {
        $(this).stop().children(".mony-concent").hide()
        $(".apched-01").css("background-color", "");
    })
    $(".mony-concent").mouseleave(function() {
        $(this).hide()
        $(".apched-01").css("background-color", "")
    })

    // 个人化妆弹窗
    // $(".smallNav-nav").hover(function () {
    //     $(".smallNav-list").show()
    // }, function () {
    //     $(".smallNav-list").hide()
    // })

    $(".disable-le-001-i").hover(function() {
        $(".username").show()
    }, function() {
        $(".username").hide()
    })

    $(".disable-le-001-i").hover(function() {
            $(this).css("background-color", "#B31919")
        }, function() {
            $(this).css("background-color", "")
        })
        // 点击购物车弹出
    var num = 0;
    var result = 0;
    var flag04 = false;

    function Repase() {
        num++;
        if (num == 1) {
            flag04 = true;
            $(".disable").animate({
                right: "0px"
            }, 500)
            $(".disable-ri-01-footer").show()
            $(".disable-ri-01-nav-left").html("购物车")
            $(".disable-le-001-cart").css("background-color", "#F42424")
        } else {
            if (result == 1) {
                $(".disable-ri-01-footer").show()
                $(".disable-ri-01-nav-left").html("购物车")
                result = 0;
                return false;
            }
            move()
            num = 0;
            $(".disable-le-001-cart").css("background-color", "")
        }
    }
    $(".disable-le-001-cart").bind("click", function() {
            Repase()
        })
        //足迹按钮
    $(".disable-ri-01-nav-right").click(function() {
        move();
        num = 0;
    })

    function move() {
        $(".disable").animate({
            right: "-261px"
        }, 500)
    }
    //点击按钮别的东西弹出
    $(".footprint").click(function() {
        if (num == 0) {
            Repase();
        }
        if (flag04) {
            $(".disable-ri-01-footer").hide()
            $(".disable-ri-01-nav-left").html("足迹")
            flag04 = false
            result = 1;
        } else {
            move()
            num = 0;
            flag04 = false;
        }
    })

    $(".disable-le-001-cart").hover(function() {
            $(this).css("background-color", "red")
            $(".disable-le-001-cart-three").css({
                "background-color": "white",
                "color": "red"
            })
        }, function() {
            $(this).css("background-color", "")
            $(".disable-le-001-cart-three").css({
                "background-color": "red",
                "color": "white"
            })
        })
        // 侧边栏动画
    $(".disable-le-001-somei li").hover(function() {
        $(this).siblings("li").children().css("left", "-150px")
        $(this).css("background-color", "#B31919")
        $(this).children().css("left", "-150px");
        $(this).children().show().animate({
            left: "-100px"
        }, 300, function() {
            $(this).children("disable-le-001-somei-01").css("left", "-150px");
        })
    }, function() {
        $(this).css("background-color", "")
        $(this).children().css("left", "-130px")
        $(this).siblings("li").children().css("left", "-150px")
        $(this).children().hide()
    })
    $(".disable-ri-01-first").hover(function() {
        $(this).parent().siblings(".disable-le-001-somei").find(".disable-le-001-somei-01").css("left", "-150px")
        $(this).children().css("left", "-150px");
        $(this).children().show().animate({
            left: "-100px"
        }, 300)
        $(this).css("background-color", "#B31919")
    }, function() {
        $(this).css("background-color", "")
        $(this).children().css("left", "-130px")
        $(this).children().hide()
    })

    $(".disable-ri-01-second").hover(function() {
        $(this).children().stop().show().animate({
            left: "-100px"
        }, 300)
        $(this).css("background-color", "#B31919")
    }, function() {
        $(this).css("background-color", "")
        $(this).children().css("left", "-130px")
        $(this).children().hide()
    })


    $(window).scroll(function() {
            if ($(window).scrollTop() > 20) {
                $(".disable-ri-01-first").css("top", "10px")
                $(".disable-ri-01-second").show()
            }
            if ($(window).scrollTop() == 0) {
                $(".disable-ri-01-second").hide()
                $(".disable-ri-01-first").css("top", "60px")
            }
        })
        //回到顶部
    $(".disable-ri-01-second").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 500)
    })
    sales()

    //根据销量进行排序
    function sales() {
        var num = [];
        $("#sales").click(function() {
            $(".goods-concant-01").css("display", "none")
            $(".goods-concant-01").children(".goods-concant-01-title").children(".goods-concant-01-title-right").each(function() {
                var num1 = parseInt($(this).text().replace(/[^0-9]/ig, ""));
                num.push(num1)
            })
            num = num.sort(function(a, b) {
                return b - a;
            })

            function Test(value) {
                $(".goods-concant-01").each(function() {
                    var num5 = parseInt($(this).children(".goods-concant-01-title").children(".goods-concant-01-title-right").text().replace(/[^0-9]/ig, ""));
                    if (num5 == value) {
                        $(this).css("display", "block");
                        $(".goods-concant").append($(this))
                        return false;
                    }
                })
            }
            num.forEach(function(value) {
                Test(value)
            })
        })
    }
    // 根据评论数进行排序
    salesp()

    function salesp() {
        var num = [];
        $("#price-js").click(function() {
            $(".goods-concant-01").css("display", "none")
            $(".goods-concant-01").children(".goods-concant-01-title").children(".goods-concant-01-title-left").each(function() {
                var num1 = parseInt($(this).text().replace(/[^0-9]/ig, ""));
                num.push(num1)
            })
            num = num.sort(function(a, b) {
                return b - a;
            })

            function Test(value) {
                $(".goods-concant-01").each(function() {
                    var num5 = parseInt($(this).children(".goods-concant-01-title").children(".goods-concant-01-title-left").text().replace(/[^0-9]/ig, ""));
                    if (num5 == value) {
                        $(this).css("display", "block");
                        $(".goods-concant").append($(this))
                        return false;
                    }
                })
            }
            num.forEach(function(value) {
                Test(value)
            })
        })

        //点击按钮消失底部推荐框
        var osd = 1
        $(".topButton").click(function() {
            if (osd == 1) {
                $(".goods-concant-right-bottom").animate({
                    right: "-270px"
                }, 980)
                $(this).animate({
                    left: "190px"
                }, 930, function() {
                    $(".goods-concant").width(1390);
                })
                osd++
            } else {
                moves()
                $(".goods-concant").width(1100);
                osd = 1;
            }
        })

        function moves() {
            $(".goods-concant-right-bottom").animate({
                right: "0px"
            }, 930)
            $(".topButton").animate({
                left: "0px"
            }, 930)
        }
    }

    //新品
    newpo()

    function newpo() {
        var num = [];
        $("#newp").click(function() {
            $(".goods-concant-01").css("display", "none")
            $(".goods-concant-01").children(".goods-concant-01-store").children(".qg").each(function() {
                var num1 = parseInt($(this).text().replace(/[^0-9]/ig, ""));
                num.push(num1)
            })
            num = num.sort(function(a, b) {
                return b - a;
            })

            function Test(value) {
                $(".goods-concant-01").each(function() {
                    var num5 = parseInt($(this).children(".goods-concant-01-store").children(".qg").text().replace(/[^0-9]/ig, ""));
                    if (num5 == value) {
                        $(this).css("display", "block");
                        $(".goods-concant").append($(this))
                        return false;
                    }
                })
            }
            num.forEach(function(value) {
                Test(value)
            })
        })

        //点击变长
        var flag01 = false;
        $(".brand-multiple-jt").click(function() {
            if (flag01 == false) {
                $(".brand").height(150);
                $(".goods-concant-right").css("top", "0px")
                flag01 = true
            } else {
                replace()
                $(".goods-concant-right").css("top", "0px")
                flag01 = false;
            }

            function replace() {
                $(".brand").height(60)
            }
        })
    }

    $('.screen-01').click(function() {
            $(this).addClass("screen-active").siblings("div").removeClass("screen-active")
        })
        //筛选框
    var num3 = [];
    $("#text-value1").focus(function() {
        $(".screen-01-input-qd").show()
    })
    $("#text-value1").blur(function() {
        $(".screen-01-input-qd").hide()
    })
    $(".qxan").click(function() {
        $(".screen-01-input-qd").hide()
    })

    // 按钮变化
    var flag02 = false;
    $(".smallcheck label").click(function() {
        if (flag02 == false) {
            $(this).addClass("bachecked")
            flag02 = true
        } else {
            $(this).removeClass("bachecked")
            flag02 = false
        }

    })



    // mask
    console.log($(".login-making"));

    $(".disable-le-001-somei li:not(.footprint)").click(function() {
        $(".login-making").css("display", "block");

    })
    $(".disable-ri-01-first").click(function() {
            $(".login-making").css("display", "block")
        })
        // 关闭注册页面
    $(".close").click(function() {
            $(".login-making").css("display", "none")
        })
        // 获取随机数
    $(".item-random").click(function() {
        var reeat = ""
        for (var i = 0; i < 4; i++) {
            reeat += Math.round(Math.random() * 9);
            $(this).html(reeat)
        }
    })
    var oTa = 0;
    $(".login-html-body-two-mai-item-01 label").click(function() {
        if (oTa == 0) {
            $(this).addClass("bachecked");
            oTa++
        } else {
            $(this).removeClass("bachecked")
            oTa = 0;
        }
    })

    // 筛选

    var num3 = [];
    $("#text-value1").focus(function() {
        $(".screen-01-input-qd").show()
        $("#text-value2").focus(function() {
            $(".screen-01-input-qd").show()
        })
    })
    $(".qxan").click(function() {
            $(".screen-01-input-qd").hide()
        })
        // 筛选
    $(".qdan").click(function() {

        var value1 = parseInt($("#text-value1").val());
        var value2 = parseInt($("#text-value2").val());
        $(".goods-concant-01").css("display", "none")
        $(".goods-concant-01-title").find(".goods-concant-01-title-left").each(function() {
            // [0].replace(/[^0-9]/ig, "")
            var num1 = parseInt($(this).text().split(".")[0].replace(/[^0-9]/ig, ""))
            console.log(num1);
            if (num1 >= value1 && num1 <= value2) {
                num3.push(num1)
            }
        })

        function Test(value) {
            $(".goods-concant-01").each(function() {
                var num5 = parseInt($(this).find(".goods-concant-01-title-left").text().split(".")[0].replace(/[^0-9]/ig, ""))
                    // console.log($(this));
                if (num5 == value) {
                    $(this).css("display", "block");
                    console.log($(this));
                    $(".goods-concant").append($(this))
                    return false;
                }
            })
        }
        num3.forEach(function(value) {
            Test(value)
        })
    })


    //用来保存原先顺序的
    var oStrage = [];
    $(".goods-concant-01").each(function() {
            oStrage.push($(this).index())
            $(this).attr("data-count", $(this).index());
        })
        // 默认按钮
    $("#moren").click(function() {
        $(this).addClass("screen-active").siblings("div").removeClass("screen-active")
        $(".goods-concant-01").css("display", "none")
        oStrage.forEach(function(value) {
            $(".goods-concant-01").each(function() {
                if (value == $(this).attr("data-count")) {
                    $(this).css("display", "block")
                    $(".goods-concant").append($(this))
                }
            })
        })
    })


    //图片透明度显示
    $(".li-img").hover(function() {
            console.log(121212);
            // .css("opacity",0.5)
            $(this).children(".li-img-01").animate({
                opacity: 0.5
            }, 500)
        }, function() {
            $(this).children(".li-img-01").animate({
                opacity: 1
            }, 500)
        })
        // 多选框边长
    var oLang = true;
    $(".brand-multiple-text").click(function() {
        if (oLang) {
            $(".brand-image").css("display", "none");
            $(".brand-search").css("display", "block");
            $(".brand").height(100);
            $(this).children("span:first").text("-")
            $(this).children("span:last").text("收起")
            oLang = false;
        } else {
            $(".brand").height(55);
            $(".brand-image").css("display", "block");
            $(".brand-search").css("display", "none");
            $(this).children("span:first").text("+")
            $(this).children("span:last").text("多选")
            oLang = true;
        }
    })
    $(".brand-multiple-jt").click(function() {
        if (oLang == false) {
            alert("请收起多选框");
            $(".brand").height(100);
        }
    })

    $(".brand-search-toggle li label").click(function() {
        // url(../imagesecked.png)
        $(this).css("background", "url(../imagesecked.png)");
    })

    //鼠标移动切换
    $(".goods-concant-01-nav li").mouseover(function() {
        var oImg = $(this).children().attr("src");
        $(this).parents(".goods-concant-01").children(".goods-concant-01-img").children().attr("src", oImg)
    })
})