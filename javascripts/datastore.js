(function (window) {
  "use strict";
  // 네임스페이스에 모듈추가
  // App 이라는 프로퍼티가 존재한다면 App 변수에 할당 , 없다면 새로운 빈 객체를 할당
  var App = window.App || {};

  function DataStore() {
    console.log("running the DataStore function.");
  }
  App.DataStore = DataStore;
  window.App = App;
})(window);
