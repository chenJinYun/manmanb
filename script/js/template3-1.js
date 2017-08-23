

// 返回顶部点击事件
$('#bk_top').on('click', function () {
  $(window).scrollTop(0);

})

//上下页
var index = 1
var render = function (page) {
  $.ajax({
    /*最新优惠*/

    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    type: 'get',
    data: {
      pageid: page,
    },
    success: function (info) {
      // console.log(info)
      // alert(1)

      var html = template('zk_yohui', info);
      $('.zk_list ul').html(html);

      var html = template('fy_td', {
        'pageNum': page,
        //页数计算
        'pageCount': Math.ceil(info.totalCount / info.pagesize)
      });
      $("tbody").html(html);

      /*存储到全局变量中*/
      window.pageCount = Math.ceil(info.totalCount / info.pagesize)
    }
  })
}
render(index);

$('#fenye tbody').on("click", '.prev', function () {
  // alert(1)
  if (index <= 1) {
    return
  } else {
    index--
  }
  render(index);
})
$('#fenye tbody').on("click", '.next', function () {
  // console.log(index)
  if (index >= 5) {
    return
  } else {
    index++
  }
  render(index);
})