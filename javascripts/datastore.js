(function (window) {
  "use strict";
  // 네임스페이스에 모듈추가
  // App 이라는 프로퍼티가 존재한다면 App 변수에 할당 , 없다면 새로운 빈 객체를 할당
  var App = window.App || {};

  // 자바스크립트는 다른언어처럼 클래스가 존재하지 않지만 생성자를 이용해 구현 할 수 있다.
  // 생성자 규칙은 함수명의 첫 번째 글자가 대문자 잃것 ( 다른 개발자들에게 함수가 생성자로 사용되고 있음을 알림 )
  function DataStore() {
    console.log("running the DataStore function.");
    this.data = {};
  }
  App.DataStore = DataStore;
  window.App = App;
})(window);
