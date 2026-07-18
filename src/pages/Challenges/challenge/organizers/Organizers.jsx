import { useEffect, useRef, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import styled from "styled-components";
import Container from "../../../../components/Common/Container";
const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 65px;
  @media (min-width: 1400px) {
    gap: 115px;
  }
`;

const Organizers = ({
  organizers,
  firstPage,
  setFirstPage,
  footers,
  shining,
}) => {
  const [timer, setTimer] = useState(0);
  const timerInterval = useRef(null);

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval.current);
  }, [timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "۰");
    const formattedSeconds = String(seconds).padStart(2, "۰");

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  if (timer === 0) {
    setFirstPage(false);
  }
  return (
    <Wrapper>
      <Container>
        <Content
          organizers={organizers}
          time={formatTime(timer)
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
        />
      </Container>
      <Footer footers={footers} shining={shining} firstPage={firstPage} />
    </Wrapper>
  );
};

export default Organizers;
