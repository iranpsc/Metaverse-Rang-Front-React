import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";

import { ReactComponent as FollowingIcon } from "../../../Assets/svg/following.svg";
import { useState } from "react";
import Follower from "./Follower";
import { getFieldTranslationByNames } from "../../../Services/Utility";
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
`;

const SubMenu = styled.div`
  display: ${(props) => (props.isOpenDrop ? "block" : "none")};
  width: 100%;
  padding: ${(props) => (props.isOpenDrop ? " 0 10px" : "0")};
`;
const Icon = styled.img`
  width: 22px;
  height: 22px;
`;
const IconHeader = styled(FollowingIcon)`
  width: 22px;
  height: 22px;
  fill: ${(props) =>
    props.isOpenDrop ? "white" : props.theme.btnActiveThemeText};
`;
const Text = styled.p`
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
`;
const Main = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Fallowing = () => {
  const [isOpenDrop, SetIsOpenDrop] = useState(false);
  const { isOpen } = useMenuContext();
  return (
    <>
      <Btn isOpenDrop={isOpenDrop} onClick={() => SetIsOpenDrop(!isOpenDrop)}>
        <IconHeader isOpenDrop={isOpenDrop} />
        <Text isOpen={isOpen}>
          {" "}
          {getFieldTranslationByNames("citizenship-account", "following")}
        </Text>
      </Btn>
      <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
        <Follower />
      </SubMenu>
    </>
  );
};

export default Fallowing;
