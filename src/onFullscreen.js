import React, { useEffect, useRef, useState } from "react";
const useFullscreen = (callback) => {
  // useCallback 을 통해 사용자에게 무언가를 알려주고 ref 에 따라 API를 확장해나가는것도 가능
  const runCb = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };
  const element = useRef();
  const triggerFull = () => {
    const target = element.current;
    if (target) {
      target.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    // fullscreen 요청을 안하고 exit 하면 full된 document를 찾지 못하는것 같다. promise 로 잡아서 return 을 던지면 에러를 잡고 프로그램이 죽지 않음
    document.exitFullscreen().catch((error) => {
      return;
    });
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
