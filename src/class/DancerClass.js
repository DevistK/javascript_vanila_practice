if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
  // your code here
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.onDancerClick = () => {};

    this.$node = this.createDancerElement();
    this.$node.click = this.onDancerClick();
    this.setPosition(this.top, this.left);
  }

  createDancerElement() {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    this.$node.setAttribute("style", `top :${top}px ;left: ${left}px`);
  }

  lineUp() {
    let turnMonster = 100 * Math.random();
    this.$node.style.transition = "all 0.4s";

    if (this.$node.hasAttribute("lineUp") === false) {
      this.$node.setAttribute("lineUp", "true");
      this.$node.style.top = "50%";
      this.$node.style.transform = "rotate(0deg)";
    } else if (this.$node.hasAttribute("lineUp") === true) {
      this.$node.removeAttribute("lineUp");
      this.$node.style.top = document.body.clientHeight * Math.random() + "px";
      this.$node.style.left = document.body.clientWidth * Math.random() + "px";
      this.$node.style.transform = `rotate(${turnMonster}deg)`;
    }
  }

  addDancerEvent(eventFn) {
    this.$node.addEventListener("click", eventFn);
  }

  render(target) {
    target.appendChild(this.$node);
  }

  remove(target) {
    target.removeChild(this.$node);
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = DancerClass;
}
