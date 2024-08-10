import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  direction: rtl;
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
  color: #949494;
  cursor: pointer;
`;
const Text = styled.p`
  color: ${(props) => (props.color ? "#C30000" : "#dedee9")};
  font-weight: ${(props) => (props.color ? "700" : "")};
`;
const Alert = ({ type, text, info, buttonText, onclick }) => {
  return (
    <Container type={type}>
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
