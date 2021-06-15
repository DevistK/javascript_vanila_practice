import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// 리액트는 virtual DOM 을 사용해 실제 엘리먼트를 만들어내고
// 브라우저가 파싱한 html에 엘리먼트들을 추가해준다.

// 리액트는 렌더링 시 하나의 컴포넌트만 렌더링 할 수 있어 컴포넌트들을 렌더링하고자 한다면 app 안에 들어가야만 한다.
