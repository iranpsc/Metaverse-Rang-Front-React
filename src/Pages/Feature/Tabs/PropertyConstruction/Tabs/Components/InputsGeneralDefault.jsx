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
            placeholder={getFieldTranslationByNames(
              "property-information",
              "activity line"
            )}
            onchange={handleChange}
          />
        </InputSize>
        <Input
          name="name"
          placeholder={getFieldTranslationByNames(
            "property-information",
            "collection name"
          )}
          onchange={handleChange}
        />
      </DivHeader>
      <Input
        name="address"
        placeholder={getFieldTranslationByNames(
          "property-information",
          "physical address of the complex"
        )}
        onchange={handleChange}
      />
      <DivHeader>
        <Input
          name="postal_code"
          placeholder={getFieldTranslationByNames(
            "property-information",
            "the physical postal code of the collection"
          )}
          onchange={handleChange}
        />
        <Input
          name="website"
          placeholder={getFieldTranslationByNames(
            "property-information",
            "website address"
          )}
          onchange={handleChange}
        />
      </DivHeader>
      <Input
        name="description"
        placeholder={getFieldTranslationByNames(
          "property-information",
          "the purpose of the establishment"
        )}
        style={{ height: "220px" }}
        onchange={handleChange}
      />
      <P>
        {getFieldTranslationByNames(
          "property-information",
          "when building a structure on the property, the possibility of pricing the property is closed and you will not be able to sell the property until the construction is finished."
        )}
      </P>
      <Button
        label={getFieldTranslationByNames(
          "property-information",
          "default property construction"
        )}
        onclick={handleButtonClick}
      />
    </Container>
  );
};

export default InputsGeneralDefault;
