import React, { useContext, useState } from "react";
import styled from "styled-components";

import Submit from "../../../../../../components/Buttons/Submit";
import { useSelectedEnvironment } from "../../../../../../services/reducers/SelectedEnvironmentContext";
import { useNavigate } from "react-router-dom";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../../../../services/Utility";
import { FeatureContext } from "../../../../Context/FeatureProvider";
import Input from "../../../../../../components/Input";
import Button from "../../../../../../components/Button";

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
            placeholder={getFieldTranslationByNames("360")}
            onchange={handleChange}
          />
        </InputSize>
        <Input
          name="name"
          placeholder={getFieldTranslationByNames("361")}
          onchange={handleChange}
        />
      </DivHeader>
      <Input
        name="address"
        placeholder={getFieldTranslationByNames("362")}
        onchange={handleChange}
      />
      <DivHeader>
        <Input
          name="postal_code"
          placeholder={getFieldTranslationByNames("363")}
          onchange={handleChange}
        />
        <Input
          name="website"
          placeholder={getFieldTranslationByNames("364")}
          onchange={handleChange}
        />
      </DivHeader>
      <Input
        name="description"
        placeholder={getFieldTranslationByNames("365")}
        style={{ height: "220px" }}
        onchange={handleChange}
      />
      <P>
        {getFieldTranslationByNames("366")}
      </P>
      <Button
        label={getFieldTranslationByNames("367")}
        onclick={handleButtonClick}
      />
    </Container>
  );
};

export default InputsGeneralDefault;
