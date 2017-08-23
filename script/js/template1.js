// 分类导航
// $.ajax({
//   url: 'http://139.199.192.48:9090/api/getindexmenu',
//   type: 'get',
//   success: function (info) {
//       console.log(info.result)
//       var html = template('banner_nav', info);
//       $('.index-nav ul').html(html);
//     }

// })
// 折扣推荐模块
$.ajax({
  url: 'http://139.199.192.48:9090/api/getmoneyctrl',
  type: 'get',
  success: function (info) {
    var html = template('cushao_yohui', info);
    $('.cu_list ul').html(html);
  }

})

//点击更多
$('#gengDuo').on('click', function () {
  // alert(1)

  $("#index-nav ul li:gt(3)").toggle()

})

// 返回顶部点击事件
$('#bk_top').on('click', function () {
  $(window).scrollTop(0);

})
