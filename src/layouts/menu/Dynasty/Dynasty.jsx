import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../services/reducers/MenuContext";
import DynastyIcon from "../../../assets/svg/dynasty.svg?react";
import { getFieldTranslationByNames } from "../../../services/Utility";
const Btn = styled.button`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) =>
    props.isOpenDrop ? props.theme.openDropDown : "transparent"};
  height: 40px;
  border-radius: 10px;
  filter: opacity(0.5);
`;
const Text = styled.p`
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
`;
const IconHeader = styled(DynastyIcon)`
  width: 22px;
  height: 22px;
  fill: ${(props) =>
    props.isOpenDrop ? "white" : props.theme.btnActiveThemeText};
`;
const Dynasty = () => {
  const isOpenDrop = false;
  const { isOpen } = useMenuContext();
  return (
    <>
      <Btn isOpenDrop={isOpenDrop}>
        <IconHeader isOpenDrop={isOpenDrop} />
        <Text isOpen={isOpen}>{getFieldTranslationByNames("158")}</Text>
      </Btn>
    </>
  );
};

export default Dynasty;
