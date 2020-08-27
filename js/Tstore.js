$(function () {
    var t=null;
function fun(time,ele) {
    var day = +new Date()
   

    var nowday = +new Date(time)
    

    var distime = (nowday - day) / 1000;
    

    var days = parseInt(distime / 60 / 60 / 24);
    days = days < 10 ? '0' + days : days
  
    var hours = parseInt(distime / 60 / 60 % 24);
    hours = hours < 10 ? '0' + hours : hours
    
    var minutes = parseInt(distime / 60 % 24)
    minutes = minutes < 10 ? '0' + minutes : minutes
   
    var seconds = parseInt(distime % 60)
    seconds = seconds < 10 ? '0' + seconds : seconds
   
    ele.find('.days').text(days)
    ele.find('.hours').text(hours)
    ele.find('.minutes').text(minutes)
    ele.find('.seconds').text(seconds)
    
}
var time=setInterval(function(){
    fun('2020-8-23 18:00:00',$('.Tstore-content-shop-content-goods li').eq(0))
},1000);
var time1=setInterval(function(){
    fun('2022-8-23 16:00:08',$('.Tstore-content-shop-content-goods li').eq(1))
},1000);
var time2=setInterval(function(){
    fun('2024-8-24 22:05:00',$('.Tstore-content-shop-content-goods li').eq(2))
},1000);
var time3=setInterval(function(){
    fun('2021-8-24 22:05:00',$('.Tstore-content-shop-content-goods li').eq(3))
},1000);
var time3=setInterval(function(){
    fun('2022-8-24 22:05:00',$('.Tstore-content-shop-content-goods li').eq(4))
},1000);

})
