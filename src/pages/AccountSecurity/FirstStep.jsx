import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import useRequest from "../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../services/Utility";
import { useLanguage } from "../../services/reducers/LanguageContext";

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
    font-size: 16px;
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
    font-size: 16px;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.secondaryBtn};
    border-color: transparent;
    margin-top: 30px;
    margin-bottom: 15px;
    color: ${(props) =>
      props.theme.colors.newColors.otherColors.secondaryBtnText};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 0px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }

    input {
      padding: 10px 14px;
      margin-top: 10px;
    }

    button {
      font-size: 14px;
      height: 44px;
      margin-top: 10px;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
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

    @media (max-width: 768px) {
      top: 15px;
    }
  }
`;
const Up = styled.span`
  user-select: none;
  display: inline-flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Down = styled.span`
  user-select: none;
  display: inline-flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Min = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  ${(props) => (props.isPersian ? "right" : "left")}: 40px;
  top: 37px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    top: 24px;
  }
`;

const FirstStep = ({ setStep, time, setTime }) => {
  const [phone, setPhone] = useState(true);
  const [formData, setFormData] = useState({ phone: "", time: time });
  const { Request, HTTP_METHOD } = useRequest();
  const { isPersian } = useLanguage();
  const onSendHandler = () => {
    let sendTime = time;
    if (Number(sendTime) < 5) {
      sendTime = 5;
      setTime(5);
    }
    if (phone) {
      Request("account/security", HTTP_METHOD.POST, { time: sendTime })
        .then(() => {
          setStep(2);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            setPhone(false);
          }
        });
    } else {
      Request("account/security", HTTP_METHOD.POST, {
        ...formData,
        time: sendTime,
      }).then(() => {
        setStep(2);
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ [e.target.name]: e.target.value, time: time });
  };

  return (
    <Container
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (time === "" || time == null) {
          return;
        }
        if (Number(time) < 5) {
          setTime(5);
          setTimeout(() => {
            onSendHandler();
          }, 0);
        } else {
          onSendHandler();
        }
      }}
    >
      <h3>{getFieldTranslationByNames("858")}</h3>
      <p>{getFieldTranslationByNames("32")}</p>
      <Div isPersian={isPersian}>
        <ButtonContainer>
          <Up
            onClick={() =>
              setTime((prev) => {
                if (prev === "" || prev == null) return 5;
                const next = +prev + 1;
                if (next > 60) return 60;
                return Math.max(5, next);
              })
            }
          >
            <MdKeyboardArrowUp />
          </Up>
          <Down
            onClick={() => {
              if (time > 5) {
                setTime((prev) => +prev - 1);
              }
            }}
          >
            <MdKeyboardArrowDown />
          </Down>{" "}
        </ButtonContainer>

        <input
          value={time}
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/^0+/, "");

            if (value === "") {
              setTime("");
              return;
            }

            if (value.length >= 2) {
              let numericValue = Number(value);
              if (numericValue < 5) numericValue = 5;
              if (numericValue > 60) numericValue = 60;
              setTime(numericValue);
            } else {
              setTime(value);
            }
          }}
          type="number"
          name="time"
          placeholder={getFieldTranslationByNames("858")}
          maxLength={3}
          max={99}
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
          <Min isPersian={isPersian}>{getFieldTranslationByNames("33")}</Min>
        )}
      </Div>
      <button type="submit">{getFieldTranslationByNames("859")}</button>
    </Container>
  );
};

export default FirstStep;
