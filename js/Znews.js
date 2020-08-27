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
    })
    // 倒计时
var showtime = function() {
    var nowtime = new Date(), //获取当前时间
        endtime = new Date("2021/4/30 12:00:00"); //定义结束时间
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