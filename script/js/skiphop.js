// 根据id渲染页面封装
function play(shopid, areaid) {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsproduct',
        type: 'get',
        data: { shopid: shopid || 0, areaid: areaid || 0 },
        success: function (info) {
            var html = template('tpl_commodity', info)
            $('.commodity ul').html(html)
        }
    })
}

// 页面载入渲染页面
play()
// 点击前回归原位
function homing(element) {
    element.attr('data-a', '').children().children().removeClass().addClass("glyphicon glyphicon-triangle-bottom")
    $('#search').hide()
    $(".search").attr('data-a', '')
    $('#twoToolbox').hide()
    $('#Toolbox').hide()
}
// 第二次点击的时候回归原位
function twoHoming(element) {
    $('#twoToolbox').hide()
    $('#Toolbox').hide()
    element.attr('data-a', '').children().children().removeClass().addClass("glyphicon glyphicon-triangle-bottom")
}
// 点击下拉列表中的值修改对应值
function amend(element, id, text) {
    element.attr('data-id', id).html("<a href='javascript:;'>" + text + '<i class="glyphicon glyphicon-triangle-bottom"></i></a>');
    var shopid = $('nav ul li:eq(0)').attr('data-id');
    var areaid = $('nav ul li:eq(1)').attr('data-id');
    play(shopid, areaid)
}
// 渲染第一个下拉列表
$.ajax({
    url: 'http://139.199.192.48:9090/api/getgsshop',
    type: 'get',
    success: function (info) {
        var html = template('tpl_one_Toolbox', info)
        $('#Toolbox').html(html).hide();
        $('#Toolbox li').on('click', function () {
            $('#Toolbox').hide();
            $(this).addClass("active").siblings().removeClass();
            $('nav ul li:eq(0)').attr("data-a", '')
            var text = $(this).children(0).text();
            var id = $(this).attr('data-id')
            amend($('nav ul li:eq(0)'), id, text)
        })
    }
})
// 渲染第二个下拉列表
$.ajax({
    url: 'http://139.199.192.48:9090/api/getgsshoparea',
    type: 'get',
    success: function (info) {
        var html = template('tpl_two_Toolbox', info)
        $('#twoToolbox').html(html).hide();
        $('#twoToolbox li').on('click', function () {
            $(this).addClass("active").siblings().removeClass();
            $('nav ul li:eq(1)').attr("data-a", '')
            $('#twoToolbox').hide();
            var text = $(this).children(0).text();
            text = text.substring(0, 2)
            var id = $(this).attr('data-id')
            amend($('nav ul li:eq(1)'), id, text)
        })
    }
})
// 点击第一个下拉
$('nav ul li:eq(0)').on("click", function () {
    homing($('nav ul li:eq(1)'))
    if (!$(this).attr("data-a")) {
        $('#Toolbox').show();
        $(this).attr('data-a', 1).children().children().removeClass().addClass("glyphicon glyphicon-triangle-top")
    } else {
        twoHoming($('nav ul li:eq(0)'))
    }
})
// 点击第二个下拉
$('nav ul li:eq(1)').on('click', function () {
    homing($('nav ul li:eq(0)'))
    // 判断是否是启用状态
    if (!$(this).attr("data-a")) {
        $('#twoToolbox').show();
        $(this).attr('data-a', 1).children().children().removeClass().addClass("glyphicon glyphicon-triangle-top")
    } else {
        twoHoming($('nav ul li:eq(1)'))
    }

})
// 点击搜索按钮
$('nav .search').on('click', function () {
    // 先让全部默认样式，在设置样式
    twoHoming($('nav ul li:eq(1),li:eq(0)'))
    // 判断是否是启用状态
    if (!$(this).attr('data-a')) {
        $(this).attr('data-a', 1)
        $('#search').show()
    } else {
        $(this).attr('data-a', '')
        $('#search').hide()
    }
})