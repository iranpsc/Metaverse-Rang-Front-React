import React from "react";
import styled from "styled-components";
import Input from "../../../../../../Components/Inputs/Input";
import Submit from "../../../../../../Components/Buttons/Submit";
import { useSelectedEnvironment } from "../../../../../../Services/Reducers/SelectedEnvironmentContext";
import { useNavigate } from "react-router-dom";
import { ToastError } from "../../../../../../Services/Utility";

const Container = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  gap: 17px;
  flex-direction: column;
`;
const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
const InputSize = styled.div`
  width: 139%;
`;
const P = styled.p`
  color: ${(props) => props.theme.TextTitle};
  font-size: 16px;
  font-weight: 400;
`;
const InputsGeneralDefault = () => {
  const { selectedEnvironment, toggleConfirmation } = useSelectedEnvironment();
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    if (!selectedEnvironment) {
      ToastError("محیطی انتخاب نکردید");
    } else {
      toggleConfirmation();
      Navigate("/metaverse");
    }
  };

  return (
    <Container>
      <DivHeader>
        <InputSize>
          <Input placeholder={"رشته فعالیت "} />
        </InputSize>
        <Input placeholder={"نام مجموعه "} />
      </DivHeader>
      <Input placeholder={"آدرس فیزیکی مجموعه  "} />
      <DivHeader>
        <Input placeholder={"کد پستی فیزیکی مجموعه"} />

        <Input placeholder={"آدرس وب سایت"} />
      </DivHeader>
      <Input placeholder={"هدف تاسیس"} style={{ height: "220px" }} />
      <P>
        در هنگام ساخت یک سازه بر روی ملک امکان قیمت گداری ملک بسته و تا پایان
        ساخت شما قادر به فروش ملک نخواهید بود.
      </P>
      <Submit
        text="ساخت ملک پیش فرض"
        type="primary"
        options={{
          style: {
            width: "190px",
            alignSelf: "start",
          },
          onClick: handleButtonClick,
        }}
      />
    </Container>
  );
};

export default InputsGeneralDefault;
