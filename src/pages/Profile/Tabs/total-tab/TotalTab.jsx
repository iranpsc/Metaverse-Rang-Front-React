import { useEffect, useState } from "react";

import Bio from "./Bio";
import Details from "./Details";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../Services/Hooks/useRequest";

const Container = styled.div`
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 19px;

  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 1400px) {
    height: 80%;
    grid-template-columns: 1fr 2fr;
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
          <Bio />
          <Details />
        </>
      )}
    </Container>
  );
};

export default TotalTab;
