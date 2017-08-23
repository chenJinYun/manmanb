var search = location.search
search = search.slice(1)
var searchArr = search.split("$")
var o = {}
for (var i = 0; i < searchArr.length; i++) {
    var temp = searchArr[i].split("=")
    o[temp[0]] = temp[1]
}
var img;
$.ajax({
    url: "http://139.199.192.48:9090/api/getcouponproduct",
    type: "get",
    data: {
        couponid: o.couponid
    },
    success: function (info) {
        var html = template("tpl_foodlist", info)
        console.log(info)
        $(".quan_list").html(html)
        var html = template("lbl", info)
        $(".swiper-wrapper").html(html)
        var swiper = new Swiper('.swiper-container');
    }
})
$(".ly").on("click", "li", function () {
    $(".layer").show()
    return false
})
$(".layer").on("click",function(){
    $(this).hide()
})