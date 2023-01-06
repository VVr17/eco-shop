import { useState, useEffect } from "react";

export function useWindowSize() {
  const isBrowser = typeof window !== "undefined";
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  function update() {
    setIsDesktop(window.innerWidth >= 768);
  }

  useEffect(() => {
    if (isBrowser) {
      update();
      window.addEventListener("resize", update, false);
    }

    return () => {
      isBrowser && window.removeEventListener("resize", update, false);
    };
  }, [isBrowser]);

  return { isDesktop };
}
