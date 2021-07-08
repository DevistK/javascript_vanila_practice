import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    // ref 를 effect 즉 mount 시점에 두지않으면 unmount시 current가 null이 된다.
    const element = ref.current;
    if (typeof onClick !== "function") {
      return;
    }

    if (element) {
      element.addEventListener("click", onClick);
    }
    // return 으로 function을 받으면 willUnmount 를 하겠다는 것이고 , dependency가 없다면 mount, update , 있다면 mount시에만 호출하고 , unmount가 가능하다.
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
    // useEffect 사용시 warning : dependency가 비어있는 array일때 어떤 값을 사용중인데 , 업데이트를 해주지 않고 있다라는 경고사항을 자주 만날 수 있을것 같다.
  }, [onClick]);

  return ref;
};
