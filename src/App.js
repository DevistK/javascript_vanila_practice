import React, { useEffect, useState } from "react";

function Container({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

function Movie() {
  // state Hook 관리
  const [isLoading, setLoad] = useState(true); // 로딩 시점
  const [movies, setMovies] = useState([]); // 영화 업데이트

  useEffect(() => {
    // ComponentDidMount + ComponentDidUpdate 렌더 후 로딩 시점 변경
    function loadComplete() {
      setTimeout(() => {
        return setLoad((loadState) => (loadState = false));
      }, 6000);
    }
    loadComplete();
  });

  return <div>{isLoading ? "로딩중입니다" : "로딩완료"}</div>;
}

function App() {
  return (
    <div className="App">
      <Container>
        <Movie />
      </Container>
    </div>
  );
}

export default App;

// life cycle
// Mount : 컴포넌트가 실행될때 defaultProps 와 state를 저장
//
