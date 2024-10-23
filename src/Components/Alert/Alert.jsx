import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import styled from "styled-components";
import { useEffect, useState } from "react";

import i18n from "../../i18n/i18n";
const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 5px;
  border: 1px solid
    ${(props) => (props.type === "success" ? "#18C08F" : "#C30000")};
  svg {
    color: ${(props) => (props.type === "success" ? "#18C08F" : "#C30000")};
    font-size: ${(props) => (props.type === "success" ? "25px" : "40px")};
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const Texts = styled.div``;
const Left = styled.div`
  padding: 10px 22px 10px 22px;
  background-color: #e9e9e9;
  border-radius: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  cursor: pointer;
`;
const Text = styled.p`
  color: ${(props) =>
    props.color ? "#C30000" : props.theme.colors.newColors.shades.title};
  font-weight: ${(props) => (props.color ? "700" : "")};
`;
const Alert = ({ type, text, info, buttonText, onclick }) => {
  const [isRTL , setIsRTL] = useState(i18n.language === "fa");
  useEffect(() => {
    setIsRTL(i18n.language === "fa");
  },[i18n.language])
  return (
    <Container type={type} isRTL={isRTL}>
      <Right>
        {type === "error" ? (
          <BsFillExclamationOctagonFill />
        ) : (
          <IoIosCheckmarkCircle />
        )}
        <Texts>
          {type === "error" && <Text color>{info}</Text>}
          <Text>{text}</Text>
        </Texts>
      </Right>
      {type === "error" && <Left onClick={onclick}>{buttonText}</Left>}
    </Container>
  );
};

export default Alert;
