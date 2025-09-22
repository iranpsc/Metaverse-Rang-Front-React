import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../services/reducers/MenuContext";
import Message from "../../../assets/svg/message.svg";
import ProfileMember from "../../../assets/svg/profileMember.svg";
import Ticket from "../../../assets/svg/ticket.svg";
import Setting from "../../../assets/svg/setting.svg";
import { ReactComponent as DynastyIcon } from "../../../assets/svg/dynasty.svg";
import { useState } from "react";
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
const IconHeader = styled(DynastyIcon)`
  width: 22px;
  height: 22px;
  fill: ${(props) =>
    props.isOpenDrop ? "white" : props.theme.btnActiveThemeText};
`;
const Dynasty = () => {
  const [isOpenDrop, SetIsOpenDrop] = useState(false);
  const { isOpen } = useMenuContext();
  return (
    <>
      <Btn isOpenDrop={isOpenDrop}>
        <IconHeader isOpenDrop={isOpenDrop} />
        <Text isOpen={isOpen}>{getFieldTranslationByNames("158")}</Text>
      </Btn>
      {/* <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
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
      </SubMenu> */}
    </>
  );
};

export default Dynasty;
