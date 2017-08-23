yourScroll();

/**
 * 1 手动拖动
 *    a 需要在手指离开事件里面记录上一次已经移动了的距离-在touchmove里面加上这个距离
 *    b  在手指离开事件里面 需要叠加上 之前移动移动的了距离  所以 += 
 * 2 弹簧效果
 * 3 点击置顶
 */
function yourScroll() {
  // 获取目标元素
  var left_menu = document.querySelector('.left_menu');

  // 手指按下坐标
  var startY;

  // 一共移动了的距离  一定要初始化为0  
  var totalDistance = 0;

  // 弹簧
  var springs = 150;

  // 上滑最大的距离  上滑的距离是负数
  var maxUpDis = -(left_menu.offsetHeight - left_menu.parentNode.offsetHeight);



  //绑定手指按下事件
  left_menu.addEventListener("touchstart", function (e) {
    // 验证手指个数
    if (e.targetTouches.length > 1) {
      return;
    }

    // 记录坐标
    startY = e.targetTouches[0].clientY;
    // 清除过渡
    this.style.transition = "none";
    // console.log(startY);
  });
  // 绑定手指移动事件
  left_menu.addEventListener("touchmove", function (e) {
    // 验证手指的个数
    if (e.targetTouches.length > 1) {
      return;
    }

    // 移动的坐标
    var moveY = e.targetTouches[0].clientY;
    //  console.log(moveY);
    // 移动的距离   要加上上一次移动的距离
    var tmpDistance = moveY - startY + totalDistance;

    // console.log(tmpDistance);

    // 下拉判断是否满足弹簧条件
    if (tmpDistance > springs) {
      tmpDistance = springs; // 50    
    } else if (tmpDistance < maxUpDis - springs) {// -150
      // -100-50 =  -150px
      // 判断上滑的距离  谁越小 谁就越在上边
      tmpDistance = maxUpDis - springs;
    }

    // 设置位移
    this.style.transform = "translateY(" + tmpDistance + "px)";
  });

  left_menu.addEventListener("touchend", function (e) {
    // 判断手指的个数
    if (e.changedTouches.length > 1) {
      return;
    }

    // 记录上一次移动的距离  手指离开的时候呢 需要加上自己上一次移动的距离
    totalDistance += e.changedTouches[0].clientY - startY;

    // 判断是否满足下拉反弹的条件
    if (totalDistance > 0) {
      // 反弹
      totalDistance = 0;
      this.style.transition = "all .6s";
      this.style.transform = "translateY(" + totalDistance + "px)";
    } else if (totalDistance < maxUpDis) { -100
      // 松开的时候 反弹 -只要超出最大上滑的距离的一点点的话 都要反弹
      totalDistance = maxUpDis;
      this.style.transition = "all .6s";
      this.style.transform = "translateY(" + totalDistance + "px)";
    }

  });









}