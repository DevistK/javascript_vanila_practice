if (typeof window === "undefined") {
  var Dancer = require("./Dancer");
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
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

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = BlinkyDancer;
}
