$.ajax({
  type: 'get',
  url: 'http://139.199.192.48:9090/api/getbaicaijiatitle',
  success: function (info) {
    var html = template('list', info);
    $('#ll').html(html);
  }
})
// // 实现左右滑动
var ele = $("#ll");
ele.width((ele.find("li").length + 1) * (ele.find("li").width() + 20));
var myScroll = new IScroll('#wrapp', {
  scrollX: true,
  scrollY: false,
  scrollbars: false,
  click: true
});
// myScroll.scrollbars=false;
// myScroll.scrollToElement('.active', true, true);
// 首次渲染全部列表的数据
$.ajax({
  url: 'http://139.199.192.48:9090/api/getbaicaijiaproduct',
  type: 'get',
  data: {
    titleid: 0
  },
  success: function (info) {
    // console.log(info);
    var html = template('con', info);
    $('.tab-content').html(html);
    $('.tab-pane').toggleClass('active');
    $('li[data-id=0]').toggleClass('active');
    // 计算进度条的宽度
    var text = $('.bar i span').text();
    // 切割字符串
    var arr = text.split('%');
    var a = arr[0] * 1 + 'px';
    console.log(a);
    // $('head').append('<style> .bar>i::befored{width:10px}</style>');
    $('head').append("<style>.bar>i::before{ width:" + a + " }</style>");
  }
})
// 点击对应的tab渲染相应的内容
$('#ll').on('click', 'li', function () {
  // console.log($(this).attr('data-id'));
  $.ajax({
    url: 'http://139.199.192.48:9090/api/getbaicaijiaproduct',
    type: 'get',
    data: {
      titleid: $(this).attr('data-id')
    },
    success: function (info) {
      // console.log(info);
      var html = template('con', info);
      $('.tab-content').html(html);
      $('.tab-pane').toggleClass('active');
      // 计算进度条的宽度
      var text = $('.bar i span').text();
      // 切割字符串
      var arr = text.split('%');
      var a = arr[0] * 1 + 'px';
      console.log(a);
      // $('head').append('<style> .bar>i::befored{width:10px}</style>');
      $('head').append("<style>.bar>i::before{ width:" + a + " }</style>");
    }
  })
})


