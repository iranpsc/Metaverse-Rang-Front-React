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
  padding: ${(props) => (props.isOpenDrop ? " 0 10px" : "0")};
  button::before {
    content: "";
    display: block;
    width: 13px;
    height: 117%;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 14 56' fill='none'><path d='M1.5 55H4.5C8.91828 55 12.5 51.4183 12.5 47L12.5 1' stroke='%23363636' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>")
      no-repeat center;
    margin-bottom: 20%;
    filter: opacity(1) !important;
  }
  button:first-child::before {
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='13' height='17' viewBox='0 0 13 17' fill='none'><path d='M1 16H4C8.41828 16 12 12.4183 12 8V1' stroke='%23363636' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>")
      no-repeat center;
    content: "";
    display: block;
    width: 14px;
    height: 117%;
    margin-bottom: 4% !important;
  }
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
