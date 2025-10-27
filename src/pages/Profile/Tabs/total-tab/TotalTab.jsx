import { useEffect, useState } from "react";

import Bio from "./Bio";
import Details from "./Details";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px ;

  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const TotalTab = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);
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
    <Container>
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
