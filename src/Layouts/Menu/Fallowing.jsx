import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Message from "../../Assets/svg/message.svg";
import ProfileMember from "../../Assets/svg/profileMember.svg";
import Ticket from "../../Assets/svg/ticket.svg";
import Setting from "../../Assets/svg/setting.svg";
import { useState } from "react";
const Btn = styled.button`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) => (props.isOpenDrop ? "#000000" : "transparent")};
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
`;
const SubMenu = styled.div`
  display: ${(props) => (props.isOpenDrop ? "block" : "none")};
  width: 100%;
`;
const Icon = styled.img`
  width: 22px;
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
        <Text isOpen={isOpen}>دنبال شوندگان</Text>
        <Icon src={Ticket} />
      </Btn>
      <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
        <BtnNavigator>
          <Icon src={Ticket} />
          ارسال سند
        </BtnNavigator>
        <BtnNavigator>
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
      </SubMenu>
    </>
  );
};

export default Fallowing;
