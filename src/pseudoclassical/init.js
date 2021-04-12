// const BlinkyDancer = require("./BlinkyDancer");

/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */

  // make a dancer with a random position
  //
  // TODO:
  let dancer = new BlinkyDancer(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 2000
  );
  dancer.render(document.body);

  dancers.push(dancer);
}

let handleLineUp = function () {
  dancers.forEach((dancer) => {
    dancer.lineUp();
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const elAddDancerButton = document.querySelector(".addDancerButton");
  const elLineUpButton = document.querySelector(".lineUpDancerButton");
  elAddDancerButton.addEventListener("click", handleClickDancerButton);
  elLineUpButton.addEventListener("click", handleLineUp);
});
