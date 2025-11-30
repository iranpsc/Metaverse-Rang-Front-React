import styled from "styled-components";
import { useRef, useEffect, forwardRef } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useScrollDirectionContext } from "../../services/reducers/ScrollDirectionContext";

const StyledContainer = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (max-height: 500px) and (max-width: 1000px) {
    padding-bottom: 30px;
  }
`;

function BaseContainer({ children, className }, forwardedRef) {
  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  const isScrollingDown = useScrollDirection(ref);
  const { updateScrollDirection } = useScrollDirectionContext();

  useEffect(() => {
    updateScrollDirection(isScrollingDown);
  }, [isScrollingDown, updateScrollDirection]);

  return (
    <StyledContainer ref={ref} className={className}>
      {children}
    </StyledContainer>
  );
}

export default forwardRef(BaseContainer);
