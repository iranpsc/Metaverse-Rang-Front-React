import React, { useState } from "react";
import styled from "styled-components";
import FilterIcon from "../../../Assets/images/filter.png";
import MapIcon from "../../../Assets/images/maps.png";

const ContainerBtn = styled.div`
  width: 15%;
  height: 138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 2%;
  overflow-y: auto;
  z-index: 999;
  left: 5%;
  ::-webkit-scrollbar-thumb {
    background: none;
  }
  @media (min-width: 1536px) {
    width: 13%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    left: -2px;
    top: 13%;
    z-index: 999;
  }
`;

const Btn = styled.div`
  width: 100%;
  border: 3px solid #757373;
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, white, gray);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-left: 5px;
  &:hover {
    border: ${(props) =>
      `${props.border} 3px solid`}; /* Dynamic border color */
  }
  border-radius: 0 5px 5px 0;
  &.active {
    border: ${(props) => `${props.border} 3px solid`};
  }
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
  const [clickState, setClickState] = useState({});

  const handleClick = (flagId) => {
    const { [flagId]: currentClickState, ...updatedClickState } = clickState;

    if (!currentClickState) {
      if (activeMapIds.length >= 2) {
        return;
      }

      setActiveMapIds((prevActiveMapIds) => [...prevActiveMapIds, flagId]);
      setClickState((prevState) => ({
        ...prevState,
        ...updatedClickState,
        [flagId]: true,
      }));

      handleButtonClick(flagId);
    } else {
      setActiveMapIds((prevActiveMapIds) =>
        prevActiveMapIds.filter((id) => id !== flagId)
      );
      setClickState((prevState) => ({
        ...prevState,
        ...updatedClickState,
        [flagId]: false,
      }));

      handleButtonClick(null);
    }
  };

  return (
    <ContainerBtn>
      {flags.map((flag) => (
        <Btn
          key={flag.id}
          border={flag.color}
          className={clickState[flag.id] ? "active" : ""}
        >
          <span style={{ textTransform: "uppercase" }}>{flag.name}</span>
          <ContainerIcon>
            <Icon src={FilterIcon} style={{ cursor: "not-allowed" }} />
            <Icon
              src={MapIcon}
              active={clickState[flag.id]}
              onClick={() => handleClick(flag.id)}
            />
          </ContainerIcon>
        </Btn>
      ))}
    </ContainerBtn>
  );
};

export default BtnFlagMap;
