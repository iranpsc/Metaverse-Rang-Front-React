import React, { useState } from "react";
import styled from "styled-components";
import Message from "../../Assets/svg/message.svg";
import ProfileMember from "../../Assets/svg/profileMember.svg";
import Ticket from "../../Assets/svg/ticket.svg";
import Setting from "../../Assets/svg/setting.svg";
const Container = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  transition: all 0.5s ease-out;
`;

const Btn = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) => (props.isOpen ? "#000000" : "transparent")};
  height: 40px;
  border-radius: 10px;
  color: #868b90;
  text-align: right;
  font-family: AzarMehr-DS2;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 28.8px */
  text-transform: capitalize;
`;
const BtnNavigator = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) => (props.isOpen ? "#000000" : "transparent")};
  height: 40px;
  border-radius: 10px;
  color: #868b90;
  text-align: right;
  font-family: AzarMehr-DS2;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 28.8px */
  text-transform: capitalize;
  ::before {
    content: url('data:image/svg+xml;utf8,<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 16.5H4.5C8.91828 16.5 12.5 12.9183 12.5 8.5V1.5" stroke="#EFEFEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
`;
const SubMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding-left: 20px;
`;
const Icon = styled.img`
  width: 22px;
`;
const Profile = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <Container>
      <Btn isOpen={isOpen} onClick={() => SetIsOpen(!isOpen)}>
        منو اصلی
      </Btn>
      <SubMenu isOpen={isOpen}>
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
    </Container>
  );
};

export default Profile;
