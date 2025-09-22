import React from "react";
import Button from "../../../../../Components/Button";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../../services/Utility";

const BackGround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;

const ModalBody = styled.div`
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  overflow-y: auto;
  padding: 20px;
  width: 700px;
  max-height: 577px;

  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
  }
`;

const Close = styled.h4`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(59, 8, 8);
  color: #c30000;
  font-size: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 20px;

  span {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const Modal = ({ setModal, onConfirm, date }) => {
  const calculateTimeRemaining = () => {
    const targetDate = new Date(
      date.split(" ")[0].split("/").reverse().join("/")
    );
    const currentDate = new Date();

    if (currentDate > targetDate) {
      return null;
    }

    const diffTime = Math.abs(targetDate - currentDate);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const timeRemaining = calculateTimeRemaining();

  return (
    <BackGround>
      <ModalBody>
        <Header>
          <span>{getFieldTranslationByNames("122")}</span>
          <Close onClick={() => setModal(false)}>X</Close>
        </Header>
        {isNaN(timeRemaining?.days) ? (
          <p>{getFieldTranslationByNames(1439)}</p>
        ) : (
          <p>
            {getFieldTranslationByNames(821)}
            {timeRemaining.days} {getFieldTranslationByNames(380)},
            {timeRemaining.hours} {getFieldTranslationByNames(560)},
            {timeRemaining.minutes} {getFieldTranslationByNames(33)}
            {getFieldTranslationByNames(1409)}
          </p>
        )}
        <Buttons>
          <Button
            label={getFieldTranslationByNames("823")}
            color="#18C08F"
            onclick={onConfirm}
            fit
            textColor="#D7FBF0"
          />
          <Button
            label={getFieldTranslationByNames("824")}
            color="#C30000"
            onClick={() => setModal(false)}
            fit
            textColor="#FFFFFF"
          />
        </Buttons>
      </ModalBody>
    </BackGround>
  );
};

export default Modal;
