if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// Dancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다

function Dancer(top, left, timeBetweenSteps) {
  // your code here
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = this.createDancerElement();
  this.step();
  this.setPosition(this.top, this.left);
}

Dancer.prototype.createDancerElement = function () {
  let elDancer = document.createElement("span");
  elDancer.className = "dancer";
  return elDancer;
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  Object.assign(this.$node.style, {
    top: `${top}px`,
    left: `${left}px`,
  });
};

Dancer.prototype.render = function (target) {
  target.appendChild(this.$node);
};

Dancer.prototype.lineUp = function () {
  this.$node.style.top = "50%";
  this.$node.style.transition = "all 0.4s";
};

Dancer.prototype.addDancerEvent = function (eventFn) {
  this.$node.addEventListener("click", eventFn);
  // eventFn: 댄서 인스턴스를 클릭했을때 작동시킬 이벤트 로직
};

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = Dancer;
}
