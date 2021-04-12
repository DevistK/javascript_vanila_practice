/* eslint-disable */
const dancers = [];
let audioBackground = new Audio("center.mp3");

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */

  // make a dancer with a random position
  //
  // TODO:
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 2000
  );

  let monsterFind = function () {
    let audioMonster = new Audio("sound_pipi.mp3");
    audioMonster.loop = false;
    audioMonster.play();
  };

  let monsterHunt = function () {
    let filed = document.body;
    dancer.remove(filed);
  };

  dancer.addDancerEvent(() => {
    monsterFind();
    monsterHunt();
  });

  dancer.render(document.body);
  dancers.push(dancer);
}
let backgroundMusicOn = function () {
  audioBackground.loop = true;
  audioBackground.volume = 0.35;
  audioBackground.play();
};

let backgroundMusicOff = function () {
  audioBackground.pause();
  audioBackground.currentTime = 0;
};

let handleLineUp = function () {
  dancers.forEach((dancer) => {
    dancer.lineUp();
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const elAddDancerButton = document.querySelector(".addDancerButton");
  const elLineUpButton = document.querySelector(".lineUpDancerButton");
  const elMusicButton = document.querySelector(".playButton");
  elAddDancerButton.addEventListener("click", handleClickDancerButton);
  elLineUpButton.addEventListener("click", handleLineUp);

  elMusicButton.addEventListener("click", function (event) {
    let musicButton = event.target;
    if (!musicButton.hasAttribute("music")) {
      musicButton.setAttribute("music", true);
      musicButton.textContent = "음악 끄기";
      backgroundMusicOn();
    } else if (musicButton.hasAttribute("music")) {
      musicButton.removeAttribute("music");
      musicButton.textContent = "음악 틀기";
      backgroundMusicOff();
    }
  });
});
