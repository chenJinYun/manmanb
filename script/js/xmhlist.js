$.ajax({
    url: "http://139.199.192.48:9090/api/getmoneyctrl",
    type: "get",
    success: function (info) {
        // console.log(info.result[0].productImgSm)
        var html = template("tpl_main", info)
        console.log(info)
        $("ul").html(html)

    }
})

$("#next").on("click", function () {
    var pageid = Number($(this).parent().attr("data-pageid")) + 1;
    var _this = this;
    $('select').val(pageid)
    $.ajax({
        url: "http://139.199.192.48:9090/api/getmoneyctrl",
        type: "get",
        data: {
            pageid: pageid
        },
        success: function (info) {
            $(_this).parent().attr("data-pageid", pageid)
            var html = template("tpl_main", info)
            $("ul").html(html)
            $("body").scrollTop(0)



        }
    })

})
$("#pre").on("click", function () {
    var pageid = Number($(this).parent().attr("data-pageid")) - 1;
    var _this = this
    $('select').val(pageid)
    if (pageid < 1) {
        alert("亲，已经是第一页了哦!!")
        return false
    }
    $.ajax({
        url: "http://139.199.192.48:9090/api/getmoneyctrl",
        type: "get",
        data: {
            pageid: pageid
        },
        success: function (info) {
            $(_this).parent().attr("data-pageid", pageid)
            var html = template("tpl_main", info)
            $("ul").html(html)
        }
    })
})

$.ajax({
    url: "http://139.199.192.48:9090/api/getmoneyctrl",
    type: "get",
    success: function (info) {
        var option = '';
        for (var i = 0; i < Math.ceil(info.totalCount / 10); i++) {
            option += '<option value="' + (i + 1) + '">' + (i + 1) + '/' + Math.ceil(info.totalCount / 10) + '</option>'
        }
        $('select').html(option)
        $("select").on("change", function () {
            var _this=$(this)
            var pageid = $(this).val()
            $.ajax({
                url: 'http://139.199.192.48:9090/api/getmoneyctrl',
                type: 'get',
                data: {
                    pageid: pageid
                },
                success: function (info) {
                    var html = template("tpl_main", info)
                    $("ul").html(html)
                    _this.parent().attr('data-pageid',pageid)
                }
            })
        })
    }
})
