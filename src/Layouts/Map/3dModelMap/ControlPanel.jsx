import React from "react";
import ModalPosition from "../../../Components/ModalPosition";
import styled from "styled-components";
import Submit from "../../../Components/Buttons/Submit";
import { getFieldTranslationByNames } from "../../../Services/Utility";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 93%;
`;
const Title = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const RangeInput = styled.input`
  flex-grow: 1;
  width: 100%;
  -webkit-appearance: none;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(
    to left,
    #0066ff ${(props) => (props.value / props.max) * 100}%,
    #33353b0d ${(props) => (props.value / props.max) * 100}%
  );
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;

    cursor: pointer;
    border: 3px solid #0066ff;
  }
`;
const RotationCounter = styled.div`
  width: 80px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: 1 ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
const Diver = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.primary};
`;
const ControlPanel = ({
  rotationX,
  setRotationX,
  handleConfirmation,
  status,
  position,
}) => {
  const handleRotationChange = (e) => {
    setRotationX(parseFloat(e.target.value));
  };

  return (
    <ModalPosition
      title={"462"}
      position={"right"}
      action={"ChangeHiddenState"}
    >
      <Container>
        <ContainerHeader>
          <Diver />
          <Title>
            {getFieldTranslationByNames("463")}
          </Title>
          <Label>
            <RotationCounter>{rotationX}°</RotationCounter>
            <RangeInput
              type="range"
              min="0"
              max="360"
              step="0.1"
              value={rotationX}
              onChange={handleRotationChange}
            />
          </Label>
        </ContainerHeader>

        <Submit
          text={getFieldTranslationByNames("464")}
          type="primary"
          options={{
            style: {
              width: "98%",
              alignSelf: "start",
            },
            onClick: handleConfirmation,
          }}
        />
      </Container>
    </ModalPosition>
  );
};

export default ControlPanel;
