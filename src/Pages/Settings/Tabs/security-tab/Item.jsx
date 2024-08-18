import { IoIosArrowDropdownCircle } from "react-icons/io";

import styled from "styled-components";
import { useState } from "react";
import OnOff from "../OnOff";

const Container = styled.div`
  border: 1px solid #454545;
  border-radius: 5px;
  direction: rtl;
`;

const Option = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 15px 15px;
  border-radius: 5px;
  background-color: #1a1a18;
  align-items: center;
  justify-content: space-between;
  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Options = styled.div`
  overflow: hidden;
  display: flex;
  max-height: ${(props) => (props.show ? "1000px" : "0")};
  transition: max-height 0.2s ease-in-out;
  flex-direction: column;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  h3 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }
  svg {
    font-size: 36px;
    cursor: pointer;
    transform: ${(props) => props.show && "rotate(180deg)"};
    color: ${(props) => (props.show ? "#FFC700" : "#e9e9e9")};
    transition: all 0.2s linear;
  }
`;

const Item = ({ label, options }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Label show={show}>
        <h3>{label}</h3>
        <IoIosArrowDropdownCircle onClick={() => setShow(!show)} />
      </Label>
      <Options show={show}>
        {options.map((option) => (
          <Option key={option.id}>
            <p>{option.title}</p>
            <OnOff label={option.title} />
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default Item;
