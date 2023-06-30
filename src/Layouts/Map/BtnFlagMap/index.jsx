import React, { useState } from "react";
import styled from "styled-components";
import FilterIcon from "../../../Assets/images/filter.png";
import MapIcon from "../../../Assets/images/maps.png";

const ContainerBtn = styled.div`
  width: 10%;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 13%;
  overflow-y: auto;
  z-index: 1200;
`;

const Btn = styled.div`
  width: 100%;
  border: 2px solid #9b9797;
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border: blue 2px solid;
  }
  border-radius: 5px;
`;

const ContainerIcon = styled.div`
  display: flex;
  gap: 5px;
`;

const Icon = styled.img`
  width: 30px;
  filter: ${(props) => (props.active ? "none" : "grayscale(100%)")};
  cursor: pointer;
`;

const BtnFlagMap = ({ flags, handleButtonClick }) => {
  const [activeMapIds, setActiveMapIds] = useState([]);

  const handleClick = (flagId) => {
    const index = activeMapIds.indexOf(flagId);
    let updatedActiveMapIds;

    if (index !== -1) {
      // Flag already active, deactivate it
      updatedActiveMapIds = activeMapIds.filter((id) => id !== flagId);
    } else {
      // Flag not active, activate it
      updatedActiveMapIds = [...activeMapIds, flagId];
    }

    setActiveMapIds(updatedActiveMapIds);
    handleButtonClick(flagId);
  };

  return (
    <ContainerBtn>
      {flags.map((flag) => (
        <Btn key={flag.id}>
          <span style={{ textTransform: "uppercase" }}>{flag.name}</span>
          <ContainerIcon>
            <Icon src={FilterIcon} style={{ cursor: "not-allowed" }} />
            <Icon
              src={MapIcon}
              active={activeMapIds.includes(flag.id)}
              onClick={() => handleClick(flag.id)}
            />
          </ContainerIcon>
        </Btn>
      ))}
    </ContainerBtn>
  );
};

export default BtnFlagMap;
