
  var obj = {
    jqueryString: function () {
      // 拿到地址后面的参数,
      var data = location.search;//拿到的是字符串
      // 把第一个？去掉
      data = data.slice(1);
      // 以&切割成数组
      var arr = data.split('&');
      // 把数组的值用对象的形式保存
      var o = {};
      for (var i = 0; i < arr.length; i++) {
        // 数组的每个值以=切割
        var tem = arr[i].split('=');
        o[tem[0]] = tem[1];
      }
      return o;
    }
  }
