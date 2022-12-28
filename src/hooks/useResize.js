import { useState, useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = width <= 1000;

  return isMobile;
};

export default useResize;
