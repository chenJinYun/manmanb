// var id;
$.ajax({
    url: "http://139.199.192.48:9090/api/getcoupon",
    type: "get",
    success: function (info) {
        // id=info.result.couponId
        var html = template("tpl_kdj", info)
        $(".bd").html(html)
    }
})
$(".bd").on("click", "li", function () {
    $(this).attr("data-id")
    // console.log($(this).attr("data-id"))
    location.href = "product_list.html?couponid=" +  $(this).attr("data-id")
})