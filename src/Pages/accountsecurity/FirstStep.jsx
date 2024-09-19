import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import useRequest from "../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../Services/Utility";
import { useLanguage } from "../../Services/Reducers/LanguageContext";

const Container = styled.div`
  margin-top: 20px;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
  p {
    color: ${(props) => props.theme.colors.newColors.otherColors.gray};
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
    width: 100%;
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
    ${(props) => (props.isPersian ? "left" : "right")}: 8px;
    top: 28px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    cursor: pointer;
  }
`;
const Up = styled.span`
  margin-bottom: -15px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Down = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Min = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  ${(props) => (props.isPersian ? "right" : "left")}: 40px;
  top: 32px;
`;

const FirstStep = ({ setStep, time, setTime }) => {
  const [phone, setPhone] = useState(true);
  const [formData, setFormData] = useState({ phone: "", time: time });
  const { Request, HTTP_METHOD } = useRequest();
  const isPersian = useLanguage();
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
      <h3>{getFieldTranslationByNames("account-security", "duration")}</h3>
      <p>
        {getFieldTranslationByNames(
          "account-security",
          "how long you want your wallet security lock to be off"
        )}
      </p>
      <Div isPersian={isPersian}>
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
          placeholder={getFieldTranslationByNames(
            "account-security",
            "duration"
          )}
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
        {time !== "" && (
          <Min isPersian={isPersian}>
            {getFieldTranslationByNames("account-security", "minutes")}
          </Min>
        )}
      </Div>
      <button onClick={onSendHandler}>
        {getFieldTranslationByNames("account-security", "continue")}
      </button>
    </Container>
  );
};

export default FirstStep;
