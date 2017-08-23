// 请求数据，渲染模板
list();
// 实现下拉自动加载
// $(window).scroll(function () {
//   // // 获取屏幕高度
//   var sh = $(window).height();
//   // // console.log(sh);
//   // // 获取内容高度
//   var conH = $(".pro_list").height();
//   // // 获取body高度
//   // var bodyheight = $('body').height();
//   // 滚动条的高度
//   var st = $(window).scrollTop();
//   if ((conH - (sh + st)) < 300) {
//     //  继续加载后面的数据
//     list();
//   }

// })

function list() {
  $.ajax({
    type: 'get',
    url: 'http://139.199.192.48:9090/api/getinlanddiscount',
    success: function (info) {
      var html = template('list', info);
      $('.pro_list').html(html);
    }
  })
}
