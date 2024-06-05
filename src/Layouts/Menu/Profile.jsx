import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useAuth from "../../Services/Hooks/useAuth";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Fallowing from "./Following/Fallowing";
import Dynasty from "./Dynasty/Dynasty";
import Union from "./Union/Union";
import BtnsMenu from "./BtnsMenu";

import Anonymous from "../../Assets/images/anonymous.png";
import Message from "../../Assets/svg/message.svg";
import ProfileMember from "../../Assets/svg/profileMember.svg";
import Ticket from "../../Assets/svg/ticket.svg";
import Setting from "../../Assets/svg/setting.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  transition: all 0.5s ease-out;
  padding-right: 10px;
`;

const commonScrollbarStyles = `
  /* Scrollbar styles */
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

const Btn = styled.button`
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${({ isOpenDrop, theme }) =>
    isOpenDrop ? theme.openDropDown : "transparent"};
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
  background: ${({ isOpenDrop, theme }) =>
    isOpenDrop ? theme.menuBg : "transparent"};
  height: 40px;
  border-radius: 10px;
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
`;

const SubMenu = styled.div`
  display: ${({ isOpenDrop, isOpen }) => (isOpenDrop ? "block" : "none")};
  padding-left: 20px;
  position: ${({ isOpen }) => (isOpen ? "none" : "fixed")};
  top: ${({ isOpen }) => (isOpen ? "0" : "10%")};
  right: ${({ isOpen }) => (isOpen ? "0" : "5.1%")};
  z-index: 1200;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? "transparent" : theme.menuBg};
  padding: ${({ isOpen }) => (isOpen ? "0" : " 10px 10px 8.5px 10px")};
  border-radius: ${({ isOpen }) => (isOpen ? "none" : "10px")};
  width: ${({ isOpen }) => (isOpen ? "100%" : "16.6%")};
  max-height: ${({ isOpen }) => (isOpen ? "none" : " 88vh")};
  overflow-y: ${({ isOpen }) => (isOpen ? "none" : "auto")};
  border-bottom: 2px solid ${({ theme }) => theme.lineMenu};
  ${commonScrollbarStyles}
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
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
  max-height: 78%;
  border-top: 2px solid ${({ theme }) => theme.lineMenu};
  border-bottom: 2px solid ${({ theme }) => theme.lineMenu};
  ${commonScrollbarStyles}
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
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const { isOpen } = useMenuContext();
  const { getUser } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <>
      <Btn isOpenDrop={isOpenDrop} onClick={() => setIsOpenDrop(!isOpenDrop)}>
        <ImgUser src={user?.image || Anonymous} />
        <Level isOpen={isOpen}>{user?.level?.slug || 0}</Level>
        <Text isOpen={isOpen}>{user?.code}</Text>
      </Btn>

      <ContainerMain>
        <Container isOpenDrop={isOpenDrop} isOpen={isOpen}>
          <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
            <Btn
              isOpenDrop={isOpenDrop}
              onClick={() => setIsOpenDrop(!isOpenDrop)}
              isHidden={isOpen}
            >
              <ImgUser src={user?.image || Anonymous} />
              <Level isOpen={!isOpen}>{user?.level?.slug || 0}</Level>
              <Text isOpen={!isOpen}>{user?.code}</Text>
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

        <BtnsMenu />
      </ContainerMain>
    </>
  );
};

export default Profile;
