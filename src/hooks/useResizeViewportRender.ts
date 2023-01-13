import { useEffect, useState } from "react";

export const useResizeViewportRender = () => {
  const [viewportSize, setVieportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resizeHandler = () => {
      //   console.log(window.innerWidth, window.innerHeight);
      setVieportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });
};
