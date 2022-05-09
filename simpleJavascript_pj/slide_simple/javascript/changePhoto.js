// 사진을 바꿔주는 함수
function clickHome() {
  $("#photo").attr("src", "images/home.png");
  $("#home").css("font-weight", "bold");
  $("#seoul").css("font-weight", "normal");
  $("#tokyo").css("font-weight", "normal");
  $("#paris").css("font-weight", "normal");
}
function clickSeoul() {
  $("#photo").attr("src", "images/seoul.png");
  $("#seoul").css("font-weight", "bold");
  $("#home").css("font-weight", "normal");
  $("#tokyo").css("font-weight", "normal");
  $("#paris").css("font-weight", "normal");
}
function clickTokyo() {
  $("#photo").attr("src", "images/tokyo.png");
  $("#tokyo").css("font-weight", "bold");
  $("#home").css("font-weight", "normal");
  $("#seoul").css("font-weight", "normal");
  $("#paris").css("font-weight", "normal");
}
function clickParis() {
  $("#photo").attr("src", "images/paris.png");
  $("#paris").css("font-weight", "bold");
  $("#home").css("font-weight", "normal");
  $("#seoul").css("font-weight", "normal");
  $("#tokyo").css("font-weight", "normal");
}

$("#home").on("click", clickHome);

$("#seoul").on("click", clickSeoul);

$("#tokyo").on("click", clickTokyo);

$("#paris").on("click", clickParis);

$(document).on("keydown", processKeyEvent);

// 키보드 이벤트 핸들링
function processKeyEvent(event) {
  // even는 객체라 event['key] 로도 value를 얻을 수 있다. == event.key
  let keyValue = event["key"];
  if (keyValue == 1) {
    clickHome();
  } else if (keyValue == 2) {
    clickSeoul();
  } else if (keyValue == 3) {
    clickTokyo();
  } else if (keyValue == 4) {
    clickParis();
  }
}
