// 导航
$(function(){
    $(".htNav-making-left").mouseenter(function(){ 
        $(".Secondnav").show() 
        $(".Secondnav li:first").addClass("active").siblings("li").removeClass("active"); 
        $(".Secondnav").mouseenter(function(){
            $(this).show()
            $(".throndnav").show()
            $(".Secondnav li").mouseenter(function(){
                $(this).addClass("active");
                $(this).siblings("li").removeClass("active");
                var index = $(this).index();
                $(".throndnav div").eq(index).addClass("zs").siblings("div").removeClass("zs");
            })
        })
    })
    $(".Secondnav").mouseleave(function(){
        $(this).hide()
        $(".throndnav").hide()
    })
    $(".throndnav").mouseenter(function(){
        $(".Secondnav").show() 
        $(this).show()
    })
    $(".throndnav").mouseleave(function(){
        $(".Secondnav").hide()
        $(".Secondnav li:first").addClass("active").siblings("li").removeClass("active"); 
    })
    $(".htNav-making-left").mouseleave(function(){
    },function(){
        $(".Secondnav").hide()
        $(".throndnav").hide()
    }) 
    console.log($(".money"));

    // 鼠标进入显示导航栏
    $(".apched-01").mouseenter(function(){
        $(".mony-concent").stop().slideDown(500).show()
        $(".apched-01").css("background-color","white")
    })
    $(".mony-concent").mouseenter(function(){
        $(".apched-01").css("background-color","white")
        $(this).show()
    })
    $(".apched-01").mouseleave(function(){
        $(this).stop().children(".mony-concent").hide()
        $(".apched-01").css("background-color","");
    })
    $(".mony-concent").mouseleave(function(){
        $(this).hide()
        $(".apched-01").css("background-color","")
    })

    // 个人化妆弹窗
    $(".smallNav-nav").hover(function(){
        $(".smallNav-list").show()
    },function(){
        $(".smallNav-list").hide()
    })

    $(".disable-le-001-i").hover(function(){
        $(".username").show()
    },function(){
        $(".username").hide()
    })

    $(".disable-le-001-i").hover(function(){
        $(this).css("background-color","#B31919")
    },function(){
        $(this).css("background-color","")
    })
    // 点击购物车弹出
    var num = 0;
    var result = 0;
    var flag04 = false;
    function Repase(){
        num++; 
        if(num==1){  
            flag04 = true;
            $(".disable").animate({
                right:"0px"
            },500) 
            $(".disable-ri-01-footer").show()
            $(".disable-ri-01-nav-left").html("购物车")
            $(".disable-le-001-cart").css("background-color","#F42424")
        }else{
            if(result==1){
                $(".disable-ri-01-footer").show()
                $(".disable-ri-01-nav-left").html("购物车")
                result = 0;
                return false;
            } 
            move()
            num = 0;
            $(".disable-le-001-cart").css("background-color","")
        }  
    }
    $(".disable-le-001-cart").bind("click",function(){ 
            Repase()      
    }) 
        //足迹按钮
        $(".disable-ri-01-nav-right").click(function(){
           move(); 
           num = 0; 
        })
        function move(){
            $(".disable").animate({
                right:"-261px"
            },500)        
        }
        //点击按钮别的东西弹出
        $(".footprint").click(function(){
            if(num==0){
                Repase();
            }      
            if(flag04){
                $(".disable-ri-01-footer").hide()
                $(".disable-ri-01-nav-left").html("足迹")
                flag04 = false
                result = 1;
            }else{
                move()
                num = 0;
                flag04 = false;
            }   
        })

        $(".disable-le-001-cart").hover(function(){
            $(this).css("background-color","red")
            $(".disable-le-001-cart-three").css({
                "background-color":"white",
                "color":"red"
            })
        },function(){
            $(this).css("background-color","")
            $(".disable-le-001-cart-three").css({
                "background-color":"red",
                "color":"white"
            })
        })
        // 侧边栏动画
            $(".disable-le-001-somei li").hover(function(){
                $(this).siblings("li").children().css("left","-150px")
                $(this).css("background-color","#B31919")
                $(this).children().css("left","-150px");
                $(this).children().show().animate({
                    left:"-100px"
                },300,function(){
                    $(this).children("disable-le-001-somei-01").css("left","-150px");
                })
            },function(){
                $(this).css("background-color","")
                $(this).children().css("left","-130px")
                $(this).siblings("li").children().css("left","-150px")
                $(this).children().hide()
            })
        $(".disable-ri-01-first").hover(function(){
            $(this).parent().siblings(".disable-le-001-somei").find(".disable-le-001-somei-01").css("left","-150px")
            $(this).children().css("left","-150px");
            $(this).children().show().animate({
                left:"-100px"
            },300)
            $(this).css("background-color","#B31919")
        },function(){
            $(this).css("background-color","")
            $(this).children().css("left","-130px")
            $(this).children().hide()
        })

        $(".disable-ri-01-second").hover(function(){  
            $(this).children().stop().show().animate({
                left:"-100px"
            },300)
            $(this).css("background-color","#B31919")
        },function(){
            $(this).css("background-color","")
            $(this).children().css("left","-130px")
            $(this).children().hide()
        })

        
        $(window).scroll(function(){
            if($(window).scrollTop() > 20){
                $(".disable-ri-01-first").css("top","10px")
                $(".disable-ri-01-second").show()
            }
            if($(window).scrollTop() == 0){
                $(".disable-ri-01-second").hide()
                $(".disable-ri-01-first").css("top","60px")
            }
        })
        //回到顶部
        $(".disable-ri-01-second").click(function(){
            $("html").animate({
                scrollTop:0
            },500)
        })
    //   mask
    $(".disable-le-001-somei li:not(.footprint)").click(function(){
        $(".login-making").css("display","block");
        
    })
    $(".disable-ri-01-first").click(function(){
        $(".login-making").css("display","block")
    })
    // 关闭注册页面
    $(".close").click(function(){
        $(".login-making").css("display","none")
    })
    // 获取随机数
    $(".item-random").click(function(){
        var reeat = ""
        for(var i=0;i<4;i++){
            reeat += Math.round(Math.random()*9);
            $(this).html(reeat)
        }
    })
    var oTa = 0;
    $(".login-html-body-two-mai-item-01 label").click(function(){
       if(oTa==0){
            $(this).addClass("bachecked");
            oTa++
       }else{
            $(this).removeClass("bachecked")
            oTa = 0;
       }   
    })

    })  
