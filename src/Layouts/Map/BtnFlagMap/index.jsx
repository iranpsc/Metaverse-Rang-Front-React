import React from "react";
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
  background: linear-gradient();
`;
const ContainerIcon = styled.div`
  display: flex;
  gap: 5px;
`;
const Icon = styled.img`
  width: 30px;
`;
const BtnFlagMap = ({ flags, handleButtonClick }) => {
  return (
    <ContainerBtn>
      {flags.map((flag) => (
        <Btn key={flag.id}>
          <span style={{ textTransform: "uppercase" }}>{flag.name}</span>
          <ContainerIcon>
            <Icon src={FilterIcon} />
            <Icon src={MapIcon} onClick={() => handleButtonClick(flag.id)} />
          </ContainerIcon>
        </Btn>
      ))}
    </ContainerBtn>
  );
};

export default BtnFlagMap;
