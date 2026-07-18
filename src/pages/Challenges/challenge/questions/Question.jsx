import ConfettiExplosion from "react-confetti-explosion";
import { convertToPersian } from "../../../../services/Utility";
import image from "../../../../assets/gif/blue-color.gif";
import styled from "styled-components";
import { useState } from "react";
import nopic from "../../../../assets/images/nopic.jpg";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.newColors.otherColors.menuBg};
  position: relative;
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.newColors.shades.title};
  cursor: pointer;
  border-bottom: 3px solid transparent;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Photo = styled.div`
  width: 40px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0px 13px;
  border: ${(props) => props.showAnswer && props.status && "1px solid #ffffff"};
  background-color: ${({ theme }) => theme.colors.newColors.shades.bg3};
  img {
    min-width: 40px;
    min-height: 40px;
  }
`;

const Percent = styled.div`
  flex-grow: 1;
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  max-width: 320px;
  line-height: 28px;
`;
const PercentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  span {
    color: #a0a0ab;
    font-size: 13px;
    font-weight: 500;
  }
`;
const Progress = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  position: relative;
  flex-grow: 1;
  height: 4px;
  div {
    height: 100%;
    position: absolute;
    color: red;
    background-color: ${(props) => props.isFalse && "#C30000"} !important;
  }
`;

const Question = ({
  id,
  title,
  status,
  percent,
  showAnswer,
  setShowAnswer,
  setSelect,
  setTimer,
  setFirstPage,
  setFooters,
  setShining,
  question,
}) => {
  const [isFalse, setIsFalse] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const selectAnswerHandler = (status, id) => {
    
    setSelect(true);
    console.log("status", status, "id", id);
    if (showAnswer) return;
    setFooters((prevFooters) => [
      { ...prevFooters[0], count: prevFooters[0].count + (status ? 1 : 0) },
      { ...prevFooters[1], count: prevFooters[1].count + (status ? 0 : 1) },
      { ...prevFooters[2], count: prevFooters[2].count + 0 },
      { ...prevFooters[3], count: prevFooters[3].count + 0 },
    ]);
    const clickedOption = question?.options?.find((item) => item.id === id);
    if (clickedOption?.status) {
      setShining("five");
    } else if (!clickedOption?.status) {
      setShining("six");
    }
    setTimer(5);
    setTimeout(() => {
      setFirstPage(true);
    }, 4000);
    setIsExploding(!isExploding);
    setSelectedStatus(status);
    if (status) {
      setShowAnswer(true);
    } else {
      setIsFalse(true);
      setShowAnswer(true);
      const falseSelected = document.getElementById(id);

      falseSelected.style.backgroundColor = "#ff000021";
      falseSelected.style.boxShadow = "0px 30px 20px -20px #FF000033";
      falseSelected.style.borderBottom = "3px solid #C30000";
      falseSelected.querySelector("h3").style.color = "#C30000";
      falseSelected.querySelector(".border").style.border = "1px solid #ffffff";
    }
  };
  return (
    <Container
      id={id}
      onClick={() => selectAnswerHandler(status, id)}
      status={status}
      style={{
        borderBottom: `${showAnswer && `3px solid ${status && "#18C08F"}`}`,
        backgroundColor: `${showAnswer && `${status && "#18c09021"}`}`,
        boxShadow: `${
          showAnswer && `${status && "0px 30px 20px -20px #18C08F33"}`
        }`,
      }}
    >
      {isExploding && (
        <ConfettiExplosion
          style={{ position: "absolute", top: "50px", left: "200px" }}
          particleSize={5}
          zIndex={9999}
          width={400}
          height={"100vh"}
          colors={[`${status ? "#18C08F" : "#C30000"}`]}
        />
      )}
      <Wrapper>
        <Photo className="border" showAnswer={showAnswer} status={status}>
          <img src={image} alt={title} width={40} height={40} />
        </Photo>
        <Percent>
          <Title
            style={{
              color: `${showAnswer && `${status && "#18C08F"}`}`,
            }}
          >
            {convertToPersian(title)}
          </Title>
          {showAnswer && (
            <PercentWrapper>
              <Progress isFalse={isFalse}>
                <div
                  style={{
                    width: `${percent}%`,
                    backgroundColor: `${status ? "#18C08F" : "#0066FF"}`,
                  }}
                />
              </Progress>
              <span>
                {percent
                  .toLocaleString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                %
              </span>
            </PercentWrapper>
          )}
        </Percent>
      </Wrapper>
    </Container>
  );
};

export default Question;
