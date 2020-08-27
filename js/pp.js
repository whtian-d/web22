$(function(){

    

    // 鼠标hover事件 蒙版显示与隐藏
    $(".banner-body .banner-body-one").hover(function(){
        $(this).find(".banner-body-mask").slideDown(500)
        $(this).find(".banner-body-mask-text").animate({
            top:100
        },500)
        $(this).find(".banner-body-one-bottom-logo img").hide()
        $(this).find(".banner-body-one-bottom-logo button").show()
        },function(){
        $(this).find(".banner-body-mask-text").animate({
            top:300
        },500)
        $(this).find(".banner-body-mask").slideUp(500)
        $(this).find(".banner-body-one-bottom-logo img").show()
        $(this).find(".banner-body-one-bottom-logo button").hide()
    })

    console.log($(window).scrollTop());
    $(".gotop").click(function(){ 
        $("html").animate({
            scrollTop:0
        },500,function(){
            $(".gotop").hide()
        })
    })
    
    var oBan = $(".banner-body-one").clone();
    $(".footer").hide()
    var flag = 0;
    $(window).on("scroll",function(){    
        if($(window).scrollTop() > 300){
            $(".gotop").show()
        }
          //屏幕被卷进去的高度
          var oSp = parseInt($(window).scrollTop());
          //当前屏幕的高度
          var oWn = $(window).height();
          
          //整个文档的高度 包括被卷进去的
          var oDment = $(document).height();
          
          // console.log(oDment);
          if(oSp + oWn+300 > oDment){
            $(".banner-body-one").each(function(){
                if($(this).hasClass("disno")){
                    $(this).show();
                }else{
                    $(this).addClass("disno").show(1000);
                    flag++;
                    if(flag==4){
                        flag = 0;
                        $(".footer").show()
                        return false;
                    }
                }
            })
          }
      })  
})