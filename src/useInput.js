import React, { useState } from "react";
const useInput = (initalValue, validator) => {
  const [value, setValue] = useState(initalValue);
  // 함수명을 해당 on... 으로 시작하는 이벤트로 선언하면 비구조화 할당으로 엘리먼트에 들어갈 시 자바스크립트의 이벤트로 들어가게 된다.
  // 즉 리액트에서는 엘리먼트에 이벤트를 직접 쓰지 않고 이벤트를 분리해서 사용 가능하다.
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    // 이때 state도 함께 관리하고 , 엘리먼트에서 필요한건 단지 해당 이벤트 함수를 할당한 변수고 , unpack 해서 사용가능
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
