import { useEffect, useRef, useState } from "react";

export function useScrollDirection(ref, threshold = 5, minScroll = 10, upLimit = 10) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const handleScroll = () => {
      const currentScroll = el.scrollTop;

      if (currentScroll < minScroll) {
        if (isScrollingDown) setIsScrollingDown(false);
        lastScrollTop.current = currentScroll;
        return;
      }

      if (currentScroll > lastScrollTop.current + threshold) {
        if (!isScrollingDown) setIsScrollingDown(true);
      }
      else if (currentScroll < lastScrollTop.current - threshold && lastScrollTop.current - currentScroll > upLimit) {
        if (isScrollingDown) setIsScrollingDown(false);
      }

      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [ref, isScrollingDown, threshold, minScroll, upLimit]);

  return isScrollingDown;
}
