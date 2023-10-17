import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";
import Message from "../../../Assets/svg/message.svg";
import ProfileMember from "../../../Assets/svg/profileMember.svg";
import Ticket from "../../../Assets/svg/ticket.svg";
import Setting from "../../../Assets/svg/setting.svg";
import { ReactComponent as FollowingIcon } from "../../../Assets/svg/following.svg";
import { useState } from "react";
import Follower from "./Follower";
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
const BtnNavigator = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) =>
    props.isOpenDrop ? props.theme.menuBg : "transparent"};
  height: 40px;
  border-radius: 10px;
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 28.8px */
  text-transform: capitalize;
  filter: ${(props) => (props.disabled ? "opacity(0.5)" : "none")};
`;
const SubMenu = styled.div`
  display: ${(props) => (props.isOpenDrop ? "block" : "none")};
  width: 100%;
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
const Fallowing = () => {
  const [isOpenDrop, SetIsOpenDrop] = useState(false);
  const { isOpen } = useMenuContext();
  return (
    <>
      <Btn isOpenDrop={isOpenDrop} onClick={() => SetIsOpenDrop(!isOpenDrop)}>
        <IconHeader isOpenDrop={isOpenDrop} />
        <Text isOpen={isOpen}>دنبال شوندگان</Text>
      </Btn>
      <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
        <BtnNavigator>
          <Icon src={Ticket} />
          ارسال سند
        </BtnNavigator>
        <BtnNavigator disabled>
          <Icon src={Message} />
          گفتگو
        </BtnNavigator>
        <BtnNavigator>
          <Icon src={ProfileMember} />
          پروفایل
        </BtnNavigator>
        <BtnNavigator>
          <Icon src={Setting} />
          تنظیمات
        </BtnNavigator>
        <Follower />
      </SubMenu>
    </>
  );
};

export default Fallowing;
