if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
}

class DancerClass {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;

    this.$node = this.createDancerElement();
    this.$node.click = this.addDancerEvent();
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

if (typeof window === "undefined") {
  module.exports = DancerClass;
}
