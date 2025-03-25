"use client";

import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export function useWindowSize(delay = 300) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);

  return windowSize;
}

export default useWindowSize;
