import React, { useState } from "react";

// 동적으로 props 엘리먼트를 추가하기 위한 음식 API
const foodILike = [
  {
    id: 1,
    name: "pizza",
    src: "https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png",
  },
  {
    id: 2,
    name: "hambugger",
    src: "https://img-global.cpcdn.com/recipes/6f1b637530078f17/680x482cq70/bugger-recipe-recipe-main-photo.webp",
  },
  {
    id: 3,
    name: "ramen",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/250px-Shoyu_Ramen.jpg",
  },
];

function Food({ name, picture }) {
  // props로 해당 컴포넌트의 prop Value를 가져옴
  // 비구조화 할당으로 props를 더 간편히 표현 가능
  // jsx + props 로 컴포넌트 재사용성이 매우용이
  // props의 prop으로 가져오든 , 해당 prop name 으로 가져오든 컴포넌트의 인자로 전달되기만 하면 정보를 쉽게 가져온다.
  // html상에서 text를 렌더링하고자 할때 JSX는 그것을 props로 정보를 보내는것과 같음, prop은 string 뿐아니라 object 들도 상관없이 보낼 수 있다.
  // express ejs , pug 보는 느낌
  return (
    <h2>
      I like {name}
      <span>
        <img src={picture} alt={name}></img>
      </span>
    </h2>
  );
}

function Container({ children }) {
  const style = {
    border: '2px solid black',
    padding: "16px",
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

function Counter() {
  const style = {
    fontSize: "40px",
    fontWeight: "bold"
  }

  let [number , setNumber] = useState(0);
  const onIncreases = () => {
    setNumber(prevNumber => prevNumber + 1)    
  }
  const onDecreases = () => {
    if (number <= 0) {
      setNumber(0)  
    }else {
      setNumber(prevNumber => prevNumber - 1)
    }
  }
  return (
    <div>
      <h2>주문 개수</h2>
      <p style={style}>{number}</p>
      <button onClick={onIncreases}>+</button>
      <button onClick={onDecreases}>-</button>
    </div>
  )
}

// 함수내부에서 컴포넌트를 리턴하게 되면 Application 안에서 호출된 renderFood 는 각각 아이템들을 컴포넌트를 통해 렌더링 하게 된다.
// 하지만 너무 많은 함수를 만들게 될 경우 보기 힘들어 지는것도 마찬가지
// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.src} />;
// }

function App() {
  return (
    <div className="App">
      {/* 괄호를 이용해 자바스크립트 사용함을 알리고 그안에서는 자바스크립트 사용이 가능하다 */}
      {/* 이 경우는 map을 통해 각 객체마다 가지고 있는 name , src 를 Food 컴포넌트의 props 에 전달한다. */}
      {/* arg 로 전달하는 props는 =propsName을 인자로 전달하면 객체였던 props가 실제 html로 렌더링 한다.*/}
      {/* map 을 사용하되 직접적으로 컴포넌트를 넣어 prop을 전달하지 않고 map의 인자로 function을 전달하며 분리시킨다. */}

      {/* 기본적으로 컴포넌트의 엘리먼트에는 유니크한 key를 가져야한다. */}
      {/* 유니크 key를 갖지 않으면 에러를 발생 시키기 때문에 고유하게 만들기 위해서 사용되는 데이터에 id 를 주고 , 컴포넌트 prop에 key name을 준다.*/}
      {/* 이는 컴포넌트의 인자로 전달되지 않지만 리액트 내부에서 사용하기 위한것 */}
      <Container>
        <Counter />
        {foodILike.map((dish) => (
          <Food key={dish.id} name={dish.name} picture={dish.src} />
        ))}
      </Container>
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
