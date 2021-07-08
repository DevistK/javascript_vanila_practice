import React, { useEffect, useRef } from "react";
const useHover = (onHover, onOut) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof onHover !== "function" && typeof onOut !== "function") {
      return;
    }
    const element = ref.current;

    if (element) {
      element.addEventListener("mouseenter", onHover);
      element.addEventListener("mouseout", onOut);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onHover);
        element.removeEventListener("mouseout", onOut);
      }
    };
  }, [onHover, onOut]);
  return ref;
};
