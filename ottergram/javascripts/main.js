// 대문자로 변수를 지을때 조건은 변하지 않으면서 , 기억하기 어려운 하드코딩된 요소들을 아래와 같이 짓는다.
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]',
  DETAIL_TITLE_SELECTOR = '[data-image-role="title"]',
  DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]',
  THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]',
  HIDDEN_DETAIL_CLASS = "hidden-detail",
  TINY_EFFECT_CLASS = "is-tiny",
  ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR),
    thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

var thumbnails = getThumbnailsArray();

function hideDetails() {
  "use strict";
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  "use strict";
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  "use strict";
  document.body.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode == 27) {
      hideDetails();
    }
  });
}

(function (thumbnails) {
  "use strict";
  thumbnails.forEach(addThumbClickHandler);
})(getThumbnailsArray());
