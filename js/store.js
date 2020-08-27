$(function(){
    function fn1(ele,sibling,cls){
        $(ele).click(function(){
            $(this).addClass(cls).siblings(sibling).removeClass(cls);
        })
    }
    fn1('.store-body1 li','li','active');
    fn1('.body1-item3 a','a','active');
    $('.body1-item3 a').click(function(){
        $(this).find('i').toggleClass('icon-cujiantou1');
        $(this).find('i').toggleClass('icon-cujiantou');
    })
})