/* global DancerClass */
if (typeof window === "undefined") {
  global.DancerClass = require("./DancerClass");
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 BlinkyDancer와 이름이 겹치므로, BlinkyDancerClass라는 이름을 사용합니다.
class BlinkyDancerClass extends DancerClass {
  // your code here
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps); //super 로 상위클래스 상속
    //this.step(); // blinkyDancerClass step 메서드 호출
  }
  step() {
    super.step(); // 상위클래스 step 호출 => 자신 메서드 호출 반복
    let style = this.$node.style;
    style.display = style.display === "none" ? "inline-block" : "none";
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = BlinkyDancerClass;
}
