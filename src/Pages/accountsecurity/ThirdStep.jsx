import { useEffect, useState } from "react";
import styled from "styled-components";

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
  // تلاش برای بازیابی تایمر از localStorage
  const [timer, setTimer] = useState(() => {
    const savedTimer = localStorage.getItem("timer");
    const savedTimestamp = localStorage.getItem("timestamp");

    if (savedTimer !== null && savedTimestamp !== null) {
      const elapsed = Math.floor(
        (Date.now() - parseInt(savedTimestamp, 10)) / 1000
      );
      const adjustedTimer = parseInt(savedTimer, 10) - elapsed;
      return adjustedTimer > 0 ? adjustedTimer : 0;
    }

    return time * 60;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          const newTimer = prevTimer - 1;
          localStorage.setItem("timer", newTimer); // ذخیره‌ی مقدار جدید در localStorage
          return newTimer;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => {
      localStorage.setItem("timestamp", Date.now()); // ذخیره‌ی زمان خروج
      clearInterval(interval);
    };
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
        <h3>زمان باقی مانده</h3>
        <h4>
          {formatTime(timer)
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
          دقیقه
        </h4>
      </Div>
      <p onClick={() => setStep(1)}>میخوام زمانم را بیشتر کنم!</p>
    </Container>
  );
};

export default ThirdStep;
