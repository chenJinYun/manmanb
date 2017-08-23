// 拿到页面的id，渲染数据，并且显示
var id=obj.jqueryString().productid;
console.log(id);
$.ajax({
  type:'get',
  url:'http://139.199.192.48:9090/api/getdiscountproduct',
  data:{
    productid:id
  },
  success:function(info){
    console.log(info);
    var html=template('topList',info);
    $('.list').html(html);
  
  }
})