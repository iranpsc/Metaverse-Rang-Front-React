import React, { useContext, useState } from "react";
import styled from "styled-components";

import Submit from "../../../../../../Components/Buttons/Submit";
import { useSelectedEnvironment } from "../../../../../../Services/Reducers/SelectedEnvironmentContext";
import { useNavigate } from "react-router-dom";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../../../../Services/Utility";
import { FeatureContext } from "../../../../Context/FeatureProvider";
import Input from "../../../../../../Components/Input";
import Button from "../../../../../../Components/Button";

const Container = styled.div`
  display: flex;
  width: 100%;
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
  color: ${(props) => props.theme.colors.newColors.otherColors.text};
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
  } = useSelectedEnvironment() || {}; // Ensure default values are provided to avoid undefined context
  const [feature] = useContext(FeatureContext) || [{}]; // Add a default empty object to avoid undefined issues
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    activity_line: "",
    name: "",
    address: "",
    postal_code: "",
    website: "",
    description: "",
    featureId: feature?.id || "", // Handle potential undefined feature.id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "featureId" && { featureId: value }),
    }));
  };
  console.log(isSelectable);
  const handleButtonClick = () => {
    if (!isSelectable) {
      ToastError("محیطی انتخاب نکردید");
    } else {
      updateFormState(inputs); // Ensure inputs are passed correctly
      toggleConfirmation && toggleConfirmation();
      toggleIsSelectable && toggleIsSelectable(); // Ensure toggle functions exist
      navigate("/metaverse");
    }
  };
  return (
    <Container>
      <DivHeader>
        <InputSize>
          <Input
            name="activity_line"
            placeholder={getFieldTranslationByNames(7054)}
            onchange={handleChange}
          />
        </InputSize>
        <Input
          name="name"
          placeholder={getFieldTranslationByNames(7061)}
          onchange={handleChange}
        />
      </DivHeader>
      <Input
        name="address"
        placeholder={getFieldTranslationByNames(5207)}
        onchange={handleChange}
      />
      <DivHeader>
        <Input
          name="postal_code"
          placeholder={getFieldTranslationByNames(5214)}
          onchange={handleChange}
        />
        <Input
          name="website"
          placeholder={getFieldTranslationByNames(5221)}
          onchange={handleChange}
        />
      </DivHeader>
      <Input
        name="description"
        placeholder={getFieldTranslationByNames(7089)}
        style={{ height: "220px" }}
        onchange={handleChange}
      />
      <P>
        {getFieldTranslationByNames(5235)}
      </P>
      <Button
        label={getFieldTranslationByNames(5242)}
        onclick={handleButtonClick}
      />
    </Container>
  );
};

export default InputsGeneralDefault;
