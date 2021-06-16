import React, { useState } from "react";

function Container({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

function Count() {
  const [number, setCount] = useState(0);

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