import React, { memo } from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Input = styled.input`
  cursor: pointer;
  border: none !important;
  position: relative;
  width: 50px;
  height: 22px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px !important;
  transition: 0.7s;

  &:checked {
    background: var(--bs-orange);
  }

  &::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 20px !important;
    left: 0;
    background: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  &:checked::before {
    left: 30px;
  }
`;

const TextToggle = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  width: 350px;
  padding: 8px;
  border: 2px solid #999;
  border-radius: 8px;

  & > p {
    font-size: 14px;
  }
`;

function Toggle({ text, onChange, value, name, privacy }) {
  return (
    <TextToggle>
      <p>{text}</p>
      <Input
        name={name}
        type="checkbox"
        checked={value}
        onChange={
          !privacy
            ? () =>
                onChange((prevState) => ({
                  ...prevState,
                  [name]: Number(!value),
                }))
            : onChange
        }
      />
    </TextToggle>
  );
}

Toggle.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
};

export default memo(Toggle, areEqual);
