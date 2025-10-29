import { useEffect, useState, useRef } from "react";
import Bio from "./Bio";
import Details from "./Details";
import styled from "styled-components";
import { useScrollDirection } from "../../../../hooks/useScrollDirection";
import { useScrollDirectionContext } from "../../../../services/reducers/ScrollDirectionContext";

const Container = styled.div`
  padding: 15px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
padding-bottom:30px;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const TotalTab = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);

  const ref = useRef(null);
  const isScrollingDown = useScrollDirection(ref);
  const { updateScrollDirection } = useScrollDirectionContext();

  useEffect(() => {
    updateScrollDirection(isScrollingDown);
  }, [isScrollingDown, updateScrollDirection]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container ref={ref}>
      {isMobile ? (
        <>
          <Bio />
          <Details />
        </>
      ) : (
        <>
          <Bio />
          <Details />
        </>
      )}
    </Container>
  );
};

export default TotalTab;
