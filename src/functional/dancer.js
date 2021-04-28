if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
}
var makeDancer = (top, left, timeBetweenSteps) => {
  const dancer = {};

  const createDancerElement = () => {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  };

  dancer.$node = createDancerElement();

  dancer.step = () => {
    setTimeout(dancer.step, timeBetweenSteps);
  };

  dancer.setPosition = (top, left) => {
    Object.assign(dancer.$node.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  };

  dancer.step();

  dancer.setPosition(top, left);

  return dancer;
};

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = makeDancer;
}
