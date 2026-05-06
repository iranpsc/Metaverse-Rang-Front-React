import styled from "styled-components";
import { useRef, useEffect, forwardRef, useCallback } from "react";
import { useScrollDirectionContext } from "../../services/reducers/ScrollDirectionContext";

const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const StyledContainer = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;

  @media (max-height: 500px) and (max-width: 1000px) {
    padding-bottom: 60px;
  }
`;

function BaseContainer({ children, className }, forwardedRef) {
  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;
  const lastScrollY = useRef(0);
  const { updateScrollDirection } = useScrollDirectionContext();

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const currentScrollY = ref.current.scrollTop;
    const maxScroll = ref.current.scrollHeight - ref.current.clientHeight;

    if (currentScrollY > maxScroll - 5) {
      return;
    }

    if (currentScrollY < 3) {
      if (lastScrollY.current > 3) {
        updateScrollDirection(false);
      }
      lastScrollY.current = currentScrollY;
      return;
    }

    const difference = currentScrollY - lastScrollY.current;
    const isScrollingDown = difference > 5;

    if (Math.abs(difference) > 5) {
      updateScrollDirection(isScrollingDown);
    }

    lastScrollY.current = currentScrollY;
  }, [ref, updateScrollDirection]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const throttledHandleScroll = throttle(handleScroll, 100); // throttle 100ms

    element.addEventListener("scroll", throttledHandleScroll, {
      passive: true,
    });

    return () => {
      element.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll, ref]);

  return (
    <StyledContainer ref={ref} className={className}>
      {children}
    </StyledContainer>
  );
}

export default forwardRef(BaseContainer);
