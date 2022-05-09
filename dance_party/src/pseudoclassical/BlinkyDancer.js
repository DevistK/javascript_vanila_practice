if (typeof window === "undefined") {
  var Dancer = require("./Dancer");
}
function BlinkyDancer(top, left, timeBetweenSteps) {
  // your code here
  Dancer.call(this, top, left, timeBetweenSteps); // 상속받은 클래스 메서드를 사용한다.
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this); // Dancer의 step 메서드를 빌려오고 BlinkyDancer 인스턴스 전달
  let style = this.$node.style;
  style.display = style.display === "none" ? "inline-block" : "none";
};

if (typeof window === "undefined") {
  module.exports = BlinkyDancer;
}
