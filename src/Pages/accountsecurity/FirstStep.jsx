import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import useRequest from "../../Services/Hooks/useRequest";

const Container = styled.div`
  margin-top: 20px;
  h3,
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }

  input {
    border-radius: 5px;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid
      ${(props) => props.theme.colors.newColors.otherColors.inputBg};
    padding: 14px 18px 14px 18px;
    outline: none;
    width: 93%;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    margin-top: 20px;
  }

  button {
    border-radius: 5px;
    height: 50px;
    width: 100%;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.secondaryBtn};
    border: 1px solid
      ${(props) => props.theme.colors.newColors.otherColors.secondaryBtnBorder};
    margin-top: 30px;
    margin-bottom: 15px;
    color: ${(props) =>
      props.theme.colors.newColors.otherColors.secondaryBtnText};
    cursor: pointer;
  }
`;

const Div = styled.div`
  height: fit-content;
  position: relative;
  div {
    position: absolute;
    left: 10px;
    top: 28px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    cursor: pointer;
  }
`;
const Up = styled.span`
  margin-bottom: -15px;
`;
const Down = styled.span``;
const Min = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  right: 40px;
  top: 32px;
`;

const FirstStep = ({ setStep, time, setTime }) => {
  const [phone, setPhone] = useState(true);
  const [formData, setFormData] = useState({ phone: "", time: time });
  const { Request, HTTP_METHOD } = useRequest();

  const onSendHandler = () => {
    if (phone) {
      Request("account/security", HTTP_METHOD.POST, { time: time })
        .then(() => {
          setStep(2);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            setPhone(false);
          }
        });
    } else {
      Request("account/security", HTTP_METHOD.POST, formData).then(() => {
        setStep(2);
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ [e.target.name]: e.target.value, time: time });
  };

  return (
    <Container>
      <h3>مدت زمان</h3>
      <p>مدت زمانی که میخواهید کیف پولتان خاموش بماند.</p>
      <Div>
        <div>
          <Up onClick={() => setTime((prev) => +prev + 1)}>
            <MdKeyboardArrowUp />
          </Up>
          <Down
            onClick={() => {
              if (time > 0) {
                setTime((prev) => +prev - 1);
              }
            }}
          >
            <MdKeyboardArrowDown />
          </Down>
        </div>

        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="number"
          name="time"
          placeholder="مدت زمان"
          maxLength={3}
          min={0}
          max={200}
          step={1}
        />
        {!phone && (
          <input
            type="number"
            name="phone"
            placeholder="091XXXXXXXX"
            value={formData.phone}
            onChange={handleInputChange}
            maxLength={11}
          />
        )}
        {time !== "" && <Min>دقیقه</Min>}
      </Div>
      <button onClick={onSendHandler}>ادامه</button>
    </Container>
  );
};

export default FirstStep;
