import React, { useEffect, useState } from "react";

function Container({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

function Count() {
  const [number, setCount] = useState(0);

  useEffect(()=>{
    // DOM 업데이트 ( 렌더링 ) 후 어떤 작업을 할것인지 useEffect Hook을 이용할 수 있다.
    // 기존 class 컴포넌트는 단일 함수로 기능을 할 수가 없었던걸 보면 매우 편리함을 알 수 있다.
    
    document.title = `The number is ${number}`
  })

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minusCount = () => {
    if (number <= 0) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>The number is {number}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={minusCount}>Minus</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Container>
        <Count />
      </Container>
    </div>
  );
}

export default App;

// life cycle
// Mount : 컴포넌트가 실행될때 defaultProps 와 state를 저장
// 