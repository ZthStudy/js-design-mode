/*
 * @Description: 职责链模式
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-01-21 19:50:14
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-01-21 20:18:47
 */
const order500yuan = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log("500元订单优惠");
  } else {
    return "nextSuccessor";
  }
};

const order200yuan = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log("200元订单优惠");
  } else {
    return "nextSuccessor";
  }
};

const normal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log("普通购买");
  } else {
    console.log("库存不足");
  }
};

Function.prototype.after = function (fn) {
  const self = this;
  return function (...args) {
    const ret = self.apply(this, args);
    if (ret === "nextSuccessor") {
      return fn.apply(this, args);
    }
    return ret;
  };
};

const order = order500yuan.after(order200yuan).after(normal);

// order(1, true, 500);
// order(2, true, 500);
order(1, false, 500);
