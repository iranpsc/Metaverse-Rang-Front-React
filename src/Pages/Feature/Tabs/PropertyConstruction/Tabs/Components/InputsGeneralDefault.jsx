import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../../../../../Components/Inputs/Input";
import Submit from "../../../../../../Components/Buttons/Submit";
import { useSelectedEnvironment } from "../../../../../../Services/Reducers/SelectedEnvironmentContext";
import { useNavigate } from "react-router-dom";
import { ToastError } from "../../../../../../Services/Utility";
import { FeatureContext } from "../../../../Context/FeatureProvider";

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
  const {
    updateFormState,
    selectedEnvironment,
    toggleConfirmation,
    toggleIsSelectable,
    isSelectable,
  } = useSelectedEnvironment();
  const [feature] = useContext(FeatureContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    activity_line: "",
    name: "",
    address: "",
    postal_code: "",
    website: "",
    description: "",
    featureId: feature.id, // Add feature.id to inputs state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "featureId" && { featureId: value }),
    }));
  };
  const handleButtonClick = () => {
    if (isSelectable) {
      ToastError("محیطی انتخاب نکردید");
    } else {
      updateFormState(inputs); // Update form state with inputs
      toggleConfirmation();
      toggleIsSelectable(); // Allow selection
      navigate("/metaverse");
    }
  };

  return (
    <Container>
      <DivHeader>
        <InputSize>
          <Input
            name="activity_line"
            placeholder={"رشته فعالیت "}
            value={inputs.activity_line}
            onChange={handleChange}
          />
        </InputSize>
        <Input
          name="name"
          placeholder={"نام مجموعه "}
          value={inputs.name}
          onChange={handleChange}
        />
      </DivHeader>
      <Input
        name="address"
        placeholder={"آدرس فیزیکی مجموعه  "}
        value={inputs.address}
        onChange={handleChange}
      />
      <DivHeader>
        <Input
          name="postal_code"
          placeholder={"کد پستی فیزیکی مجموعه"}
          value={inputs.postal_code}
          onChange={handleChange}
        />
        <Input
          name="website"
          placeholder={"آدرس وب سایت"}
          value={inputs.website}
          onChange={handleChange}
        />
      </DivHeader>
      <Input
        name="description"
        placeholder={"هدف تاسیس"}
        style={{ height: "220px" }}
        value={inputs.description}
        onChange={handleChange}
      />
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
