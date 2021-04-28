/* global DancerClass */
if (typeof window === "undefined") {
  global.DancerClass = require("./DancerClass");
}

class BlinkyDancerClass extends DancerClass {
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
