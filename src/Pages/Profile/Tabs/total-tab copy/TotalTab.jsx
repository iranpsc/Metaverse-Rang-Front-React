import { useEffect, useState } from "react";

import Bio from "./Bio";
import Details from "./Details";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 19px;
  direction: ltr;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  height: 73%;
  @media (min-width: 930px) {
    height: 78%;
  }
  @media (min-width: 1024px) {
    height: 78%;
  }
  @media (min-width: 1400px) {
    height: 80%;
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1800px) {
    height: auto;
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
          <Details />
          <Bio />
        </>
      )}
    </Container>
  );
};

export default TotalTab;
