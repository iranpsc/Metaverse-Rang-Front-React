import React, { useState } from "react";
import styled from "styled-components";
import Message from "../../Assets/svg/message.svg";
import ProfileMember from "../../Assets/svg/profileMember.svg";
import Ticket from "../../Assets/svg/ticket.svg";
import Setting from "../../Assets/svg/setting.svg";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Fallowing from "./Following/Fallowing";
import Dynasty from "./Dynasty/Dynasty";
import Union from "./Union/Union";
import { useLayoutEffect } from "react";
import useAuth from "../../Services/Hooks/useAuth";
import BtnsMenu from "./BtnsMenu";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  transition: all 0.5s ease-out;
`;
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
  height: 49px;
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
  padding-left: 20px;
  position: ${(props) => (props.isOpen ? "none" : "fixed")};
  top: ${(props) => (props.isOpen ? "0" : "10%")};
  right: ${(props) => (props.isOpen ? "0" : "5.1%")};
  z-index: 1200;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : props.theme.menuBg};
  padding: ${(props) => (props.isOpen ? "0" : " 10px 10px 8.5px 10px")};
  border-radius: 10px;
  width: ${(props) => (props.isOpen ? "100%" : "16.6%")};
  max-height: ${(props) => (props.isOpen ? "none" : " 88vh")};
  overflow-y: ${(props) => (props.isOpen ? "none" : "auto")};
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollColor};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
  > button::before {
    content: "";
    display: block;
    width: 14px;
    height: 117%;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 14 56' fill='none'><path d='M1.5 55H4.5C8.91828 55 12.5 51.4183 12.5 47L12.5 1' stroke='%23363636' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>")
      no-repeat center;
    margin-bottom: 20%;
  }
  > button:first-child::before {
    display: none;
  }
  > button:nth-child(2)::before {
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 13 17' fill='none'><path d='M1 16H4C8.41828 16 12 12.4183 12 8V1' stroke='%23363636' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>")
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
`;
const Text = styled.p`
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const ImgUser = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid white;
`;
const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  overflow-y: auto;
  max-height: 72%;
  /* Scrollbar styles for this component */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollColor};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.lineMenu};
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const Level = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: #2a85ff;
  color: #fcfcfc;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
const Profile = () => {
  const [isOpenDrop, SetIsOpenDrop] = useState(false);
  const { isOpen } = useMenuContext();
  const { getUser } = useAuth();
  const [user, setUser] = useState();

  useLayoutEffect(() => {
    setUser(getUser());
  }, []);
  return (
    <>
      <Btn isOpenDrop={isOpenDrop} onClick={() => SetIsOpenDrop(!isOpenDrop)}>
        <ImgUser src={user?.image} />
        <Level isOpen={isOpen}>{user?.level?.slug}</Level>
        <Text isOpen={isOpen}>{user?.name}</Text>
      </Btn>
      <Line isOpen={isOpen} />
      <ContainerMain>
        <Container isOpenDrop={isOpenDrop} isOpen={isOpen}>
          <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
            <Btn
              isOpenDrop={isOpenDrop}
              onClick={() => SetIsOpenDrop(!isOpenDrop)}
              isHidden={isOpen}
            >
              <ImgUser src={user?.image} />
              <Text isOpen={isOpen}>{user?.name}</Text>
            </Btn>
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
            <Fallowing />
            <Dynasty />
            <Union />
          </SubMenu>
        </Container>
        <Line isOpen={isOpen} />
        <BtnsMenu />
      </ContainerMain>
    </>
  );
};

export default Profile;
