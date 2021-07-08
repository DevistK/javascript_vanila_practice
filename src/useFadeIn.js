import React, { useEffect, useRef } from "react";
const useFadeIn = (duration = 1, delay = 0) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }

    const element = ref.current;

    if (element) {
      element.style.cssText = `opacity:1;transition: opacity ${duration}s ease-in-out ${delay}s`;
    }
    return () => {
      // cleanup
    };
  }, [duration, delay]);
  return { ref: ref, style: { opacity: 0 } };
};

export default useFadeIn;
