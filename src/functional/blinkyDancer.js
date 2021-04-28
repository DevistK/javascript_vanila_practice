if (typeof window === "undefined") {
  var makeDancer = require("./dancer");
}

var makeBlinkyDancer = (top, left, timeBetweenSteps) => {
  const blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  let oldStep = blinkyDancer.step;

  blinkyDancer.step = () => {
    oldStep();

    let style = blinkyDancer.$node.style;
    style.display = style.display === "none" ? "inline-block" : "none";
  };

  return blinkyDancer;
};

if (typeof window === "undefined") {
  module.exports = makeBlinkyDancer;
}
