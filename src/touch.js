let vueTouch = {
  distance: 30, 
  duration: 300 
};

let touch = {
  bind(el, binding) {
    /**
     * 绑定事件
		 * @param  distance						 滑动距离，超过该距离触发swipe事件，单位像素。
		 * @param  duration						 滑动时长，超过该时间不触发swipe，单位毫秒。
     * @param  isStopPropagation   是否停止冒泡，true为停止冒泡
     * @param  isPreventDefault    是否阻止默认事件，true为阻止默认事件
     * @param  triggerOnMove       swipe事件有两种触发方式，一种是在touchmove过程中，只要满足滑动距离条件即触发。
     *                             一种是在touchend中，进入滑动距离判断，如果满足滑动距离触发。
     *                             默认是在touchend中触发。
		 * @param  moving 						 是否触发移动事件。为 true 时，滑动时不断触发回调事件
		 * @param  return  						 通过 binding.value 的回调，传入 当前滑动方向（swipeLeft, swipeRight, swipeUp, swipeDown）以及滑动事件 event
     */
		let distance = binding.arg.distance || vueTouch.distance
		let duration = binding.arg.distance || vueTouch.duration
    let triggerOnMove = binding.arg.triggerOnMove;
    let moving = binding.arg.moving;
    let isStopPropagation = binding.arg.isStopPropagation;
    let isPreventDefault = binding.arg.isPreventDefault;

    let startPoint, endPoint, timer;

    el.addEventListener("touchstart", e => {
			
			if (isPreventDefault) {
        // 阻止默认事件
        e.preventDefault();
      }
      if (isStopPropagation) {
        // 阻止事件冒泡
        e.stopPropagation();
      }
      startPoint = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      if (!triggerOnMove) {
        // 不是滑动触发，则设置定时器
        timer = setTimeout(function() {
          //如果超时，清空本次touch数据
          clearSwipe();
        }, duration);
      }
    });

    el.addEventListener("touchmove", e => {
      if (isPreventDefault) {
        // 阻止默认事件
        e.preventDefault();
      }
      if (isStopPropagation) {
        // 阻止事件冒泡
        e.stopPropagation();
      }

      if (startPoint) {
        endPoint = {
          x: Math.floor(e.touches[0].clientX),
          y: Math.floor(e.touches[0].clientY)
        };

        if (moving) {
          // 执行move回调
          binding.value("moving", e);
          return false;
        }

				if (triggerOnMove) {
					// 判断此时的滑动方向
					let nowDirection = swipeDirection(
						startPoint.x,
						startPoint.y,
						endPoint.x,
						endPoint.y
					);
					if (nowDirection) {
						binding.value(nowDirection, e);
						clearSwipe();
					}
				}
      }
    });

    el.addEventListener("touchend", function(e) {
      if (isPreventDefault) {
        // 阻止默认事件
        e.preventDefault();
      }
      if (isStopPropagation) {
        // 阻止事件冒泡
        e.stopPropagation();
      }

      if (startPoint) {

        if (endPoint && !triggerOnMove) {
					// 判断此时的滑动方向
					let nowDirection = swipeDirection(
						startPoint.x,
						startPoint.y,
						endPoint.x,
						endPoint.y
					);
					if (nowDirection) {
						binding.value(nowDirection, e);
					}
				}
      }
      //清除本次touch数据
      clearSwipe();
    });

    // 清除本次滑动数据
    function clearSwipe() {
      startPoint = null;
      endPoint = null;
      timer = clearTimeout(timer);
    }

    /**
     * 计算滑动方向
     * 首先根据x方向和y方向滑动的长度决定触发x方向还是y方向的事件。
     * 然后再判断具体的滑动方向。
     * 如果滑动距离不够长，不判断方向。
     */
    function swipeDirection(x1, y1, x2, y2) {
      var diffX = x1 - x2,
        diffY = y1 - y2,
        absX = Math.abs(diffX),
        absY = Math.abs(diffY),
        swipe;

      if (absX >= absY) {
        if (absX >= distance) {
          swipe = diffX > 0 ? "swipeLeft" : "swipeRight";
        }
      } else {
        if (absY >= distance) {
          swipe = diffY > 0 ? "swipeUp" : "swipeDown";
        }
      }

      return swipe;
    }
  }
};

vueTouch.install = function(Vue, options) {
  Vue.directive("touch", touch);
};

export default vueTouch;
