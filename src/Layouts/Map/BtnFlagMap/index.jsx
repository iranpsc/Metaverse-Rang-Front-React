import React, { useState } from "react";
import styled from "styled-components";
import FilterIcon from "../../../Assets/images/filter.png";
import MapIcon from "../../../Assets/images/maps.png";

const ContainerBtn = styled.div`
  width:12%;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: absolute;
  top:17%;
  overflow-y: auto;
  z-index: 999;
`;

const Btn = styled.div`
  width: 100%;
  border: 2px solid #9b9797;
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, white, gray);
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
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [activeButtonCount, setActiveButtonCount] = useState(0);

  const resetButtonState = () => {
    setActiveMapIds([]);
    setActiveButtonId(null);
    setActiveButtonCount(0);
  };

  const handleClick = (flagId) => {
    if (activeButtonCount >= 2) {
      if (activeMapIds.includes(flagId)) {
        const updatedActiveMapIds = activeMapIds.filter((id) => id !== flagId);
        setActiveMapIds(updatedActiveMapIds);
        setActiveButtonCount(activeButtonCount - 1);
        setActiveButtonId(null);
        handleButtonClick(null);
        setIsFilterActive(false);
      }
    }

    if (flagId === activeButtonId) {
      resetButtonState();
      handleButtonClick(null);
      setIsFilterActive(false);
    }

    const index = activeMapIds.indexOf(flagId);
    let updatedActiveMapIds;

    if (index !== -1) {
      updatedActiveMapIds = activeMapIds.filter((id) => id !== flagId);
      setActiveButtonCount(activeButtonCount - 1);
    } else {
      updatedActiveMapIds = [...activeMapIds, flagId];
      setActiveButtonCount(activeButtonCount + 1);
    }

    setActiveMapIds(updatedActiveMapIds);
    setActiveButtonId(flagId);
    handleButtonClick(flagId);
    setIsFilterActive(true);
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
