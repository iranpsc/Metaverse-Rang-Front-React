// Item component
import { IoIosArrowDropdownCircle } from "react-icons/io";
import styled from "styled-components";
import { useState } from "react";
import OnOff from "../OnOff";
import useRequest from "../../../../Services/Hooks/useRequest";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../../Services/Utility";

const Container = styled.div`
  border: 1px solid #454545;
  border-radius: 5px;
`;

const Option = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 15px 15px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  align-items: center;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
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
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 500;
  }
  svg {
    font-size: 36px;
    cursor: pointer;
    transform: ${(props) => props.show && "rotate(180deg)"};
    color: ${(props) =>
      props.show
        ? props.theme.colors.primary
        : props.theme.colors.newColors.shades.title};
    transition: all 0.2s linear;
  }
`;

const Item = ({ label, options, privacy }) => {
  const [show, setShow] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();
  const handleToggle = (optionKey, newValue) => {
    Request("privacy", HTTP_METHOD.POST, {
      key: optionKey,
      value: Number(newValue),
    })
      .then(() => {})
      .catch(() => {
        ToastError("لطفا بعدا تلاش کنید ");
      });
  };

  return (
    <Container>
      <Label show={show}>
        <h3>{getFieldTranslationByNames("setting", label)}</h3>
        <IoIosArrowDropdownCircle onClick={() => setShow(!show)} />
      </Label>
      <Options show={show}>
        {options.map((option) => (
          <Option key={option.id}>
            <p>{getFieldTranslationByNames("setting", option.title)}</p>
            <OnOff
              label={option.title}
              isOn={privacy[option.key] || false}
              onToggle={(newValue) => handleToggle(option.key, newValue)}
            />
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default Item;
