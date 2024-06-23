const pbottleRPA = require("./utils/pbottleRPA"); //引入小瓶RPA nodejs模块

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const { PAY_PASSWORD } = process.env;
console.log(PAY_PASSWORD);
// TaoBao商品url
const prodUrl =
  "https://main.m.taobao.com/order/index.html?buyNow=false&buyParam=808430236208_1,808432996082_1,808431876413_1,808432236125_1,808432928297_1,808430236226_1,808433000104_1,808431876424_1,808432240353_1,808432936027_1,808430240061_1,808433000110_1,808431880165_1,808432252438_1,808432940193_1,808430216104_1,808432992095_1,808431860463_1,808432228297_1,808432916404_1,808430224234_1,808432992346_1,808431864238_1,808432232471_1,808432920174_1,808430232131_1,808432996066_1,808431864259_1,808432236048_1,808432924331_1,";
pbottleRPA.openURL(prodUrl); // 用浏览器打开百度

// 屏幕找图并点击
function findImageAndClick(imageUrl) {
  let point = pbottleRPA.findScreen(imageUrl);
  while (point === false) {
    pbottleRPA.sleep(1000);
    point = pbottleRPA.findScreen(imageUrl);
  }
  pbottleRPA.moveMouseSmooth(point.x, point.y);
  pbottleRPA.mouseClick();
  pbottleRPA.sleep(1000);
}

findImageAndClick("./img/提交订单.png");
findImageAndClick("./img/确认付款.png");

[...PAY_PASSWORD].forEach((char) => {
  pbottleRPA.keyTap(char);
});

// findImageAndClick("./img/确定支付.png");
