import React, { useState, useEffect, useContext, useMemo } from "react";
import ModalXs from "../../../Components/Modal/ModalXs";
import InputNumber from "../../../Components/Inputs/InputNumber";
import TextValueIcon from "../../../Components/TextValue/TextValueIcon";
import styled from "styled-components";
import { ReactComponent as WatchIcon } from "../../../Assets/svg/watch.svg";
import Submit from "../../../Components/Buttons/Submit";
import { useSelectedEnvironment } from "../../../Services/Reducers/SelectedEnvironmentContext";
import { WalletContext } from "../../../Services/Reducers/WalletContext";
import useRequest from "../../../Services/Hooks/useRequest";
import {
  getFieldTranslationByNames,
  ToastError,
  ToastSuccess,
} from "../../../Services/Utility";

const Icon = styled(WatchIcon)`
  stroke: ${(props) => props.theme.colors.primary};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SatisfactionLunch = ({
  position,
  rotation,
  handleExitClick,
  handelSubmitEnvironment,
}) => {
  const { selectedEnvironment, formState } = useSelectedEnvironment();
  const { Request, HTTP_METHOD } = useRequest();
  const [wallet] = useContext(WalletContext);
  const initialSatisfaction =
    wallet && wallet.satisfaction ? parseFloat(wallet.satisfaction) : 0;
  const [inputValue, setInputValue] = useState(initialSatisfaction.toString());
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    activity_line: "",
    address: "",
    description: "",
    name: "",
    postal_code: "",
    website: "",
    launched_satisfaction: 0,
    rotation: 0,
    position: "",
  });

  useEffect(() => {
    setFormData({
      activity_line: formState.activity_line,
      address: formState.address,
      description: formState.description,
      name: formState.name,
      postal_code: formState.postal_code,
      website: formState.website,
      launched_satisfaction: inputValue,
      rotation: rotation,
      position: `${position[0]}, ${position[1]}`,
    });
  }, [formState, inputValue, position, rotation]);

  const changedAttributes = useMemo(() => {
    return selectedEnvironment.attributes
      .map((attr) => {
        let newValue;
        if (attr.slug === "density") {
          newValue = (parseFloat(attr.value) / 10).toString();
        } else if (attr.slug === "karbari") {
          switch (attr.value) {
            case "m":
              newValue = "0.1";
              break;
            case "t":
              newValue = "0.2";
              break;
            case "s":
              newValue = "0.3";
              break;
            default:
              newValue = null;
          }
        }

        if (newValue && newValue !== attr.value) {
          return {
            slug: attr.slug,
            originalValue: attr.value,
            transformedValue: newValue,
          };
        }

        return null;
      })
      .filter((attr) => attr !== null);
  }, [selectedEnvironment]);

  const intSatisfaction = useMemo(() => {
    const densityAttr = changedAttributes.find(
      (attr) => attr.slug === "density"
    );
    const karbariAttr = changedAttributes.find(
      (attr) => attr.slug === "karbari"
    );

    if (densityAttr && karbariAttr) {
      return (
        (parseFloat(selectedEnvironment.attributes[14].value) *
          parseFloat(karbariAttr.transformedValue) *
          parseFloat(densityAttr.transformedValue)) /
        100
      );
    }
    return 0;
  }, [changedAttributes, selectedEnvironment]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const inputNumberValue = parseFloat(value);

    if (
      inputNumberValue > initialSatisfaction ||
      inputNumberValue < intSatisfaction
    ) {
      setError(true);
    } else {
      setError(false);
    }

    setInputValue(value);
  };

  const calculatedValue = useMemo(() => {
    const inputNumberValue = parseFloat(inputValue);
    return intSatisfaction && inputNumberValue
      ? (intSatisfaction * 288000) / inputNumberValue
      : 0;
  }, [intSatisfaction, inputValue]);

  const handleSubmit = () => {
    Request(
      `features/${formState.featureId}/build/${selectedEnvironment.id}`,
      HTTP_METHOD.POST,
      formData
    )
      .then(() => {
        handelSubmitEnvironment(); // Hide polygon when form is submitted
        ToastSuccess("موفقیت ثبت شد");
      })
      .catch((err) => {
        ToastError(err.response.data.message);
      });
  };

  return (
    <ModalXs
      title={7166}
      handleExitClick={handleExitClick}
      handelSubmitEnvironment={handelSubmitEnvironment}
    >
      <Container>
        <InputNumber
          placeholder={getFieldTranslationByNames("561")}
          value={inputValue}
          onChange={handleInputChange}
          Error={error}
        />
        <TextValueIcon
          title={getFieldTranslationByNames("379")}
          icon={<Icon />}
          value={calculatedValue.toFixed(2)}
        />
        <Submit
          text={getFieldTranslationByNames("561")}
          type="primary"
          options={{
            style: {
              alignSelf: "start",
            },
            onClick: handleSubmit,
          }}
        />
      </Container>
    </ModalXs>
  );
};

export default SatisfactionLunch;
