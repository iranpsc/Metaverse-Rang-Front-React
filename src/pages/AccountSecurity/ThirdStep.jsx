import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../services/Utility";

const Container = styled.div`
  p {
    color: #008bf8;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 20px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  margin-top: 30px;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
  h4 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
`;

const ThirdStep = ({ setStep, time }) => {
  const [timer, setTimer] = useState(() => {
    const endTime = localStorage.getItem("security_end_time");

    if (endTime) {
      const remaining = Math.max(
        0,
        Math.floor((parseInt(endTime) - Date.now()) / 1000)
      );
      return remaining;
    }

    const end = Date.now() + time * 60 * 1000;
    localStorage.setItem("security_end_time", end.toString());
    return time * 60;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        }
        clearInterval(interval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeItem) => {
    const minutes = Math.floor(timeItem / 60);
    const seconds = timeItem % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Container>
      <Div>
        <h3>
          {getFieldTranslationByNames("864")}
        </h3>
        <h4>
          {formatTime(timer)}{" "}
          {getFieldTranslationByNames("33")}
        </h4>
      </Div>
      <p onClick={() => setStep(1)}>
        {getFieldTranslationByNames("35")}
      </p>
    </Container>
  );
};

export default ThirdStep;
