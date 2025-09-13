import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useAuth from "../../Services/Hooks/useAuth";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Fallowing from "./Following/Fallowing";
import Dynasty from "./Dynasty/Dynasty";
import Union from "./Union/Union";
import BtnsMenu from "./BtnsMenu";
import { FaChevronDown } from "react-icons/fa";
import Anonymous from "../../assets/images/defulte-profile.png";
import Message from "../../assets/svg/message.svg";
import ProfileMember from "../../assets/svg/profileMember.svg";
import Ticket from "../../assets/svg/ticket.svg";
import Setting from "../../assets/svg/setting.svg";
import { useNavigate } from "react-router-dom";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  transition: all 0.5s ease-out;
  padding-right: 10px;
`;

const Btn = styled.button`
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: transparent;
  height: 49px;
  border-radius: 10px;
  cursor: pointer;
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
    isOpenDrop ? theme.colors.newColors.shades.menuBg : "transparent"};
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
  ${(props) => {
    const direction = document.body.dir || "ltr";
    return direction === "ltr"
      ? `left: ${!props.isOpen ? "5.1%" : "0"}`
      : `right: ${!props.isOpen ? "5.1%" : "0"}`;
  }};
  z-index: 1;
  background-color: ${(props) => props.theme.colors.newColors.primaryText};
  padding: ${({ isOpen }) => (isOpen ? "0" : " 10px 10px 8.5px 10px")};
  border-radius: ${({ isOpen }) => (isOpen ? "none" : "10px")};
  width: ${({ isOpen }) => (isOpen ? "100%" : "16.6%")};
  max-height: ${({ isOpen }) => (isOpen ? "none" : " 88vh")};
  overflow-y: ${({ isOpen }) => (isOpen ? "none" : "auto")};
`;

const Icon = styled.img`
  width: 22px;
`;

const Text = styled.p`
  color: #868b90;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  white-space: nowrap;
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
  border-top: 2px solid
    ${({ theme }) => theme.colors.newColors.otherColors.iconBg};
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.newColors.otherColors.iconBg};
  background-color: ${(props) => props.theme.colors.newColors.shades.bgOne};
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

const ChevronIcon = styled(FaChevronDown)`
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;
  transform: ${({ isOpenDrop }) =>
    isOpenDrop ? "rotate(180deg)" : "rotate(0deg)"};
  margin-right: 60px;
`;

const Profile = () => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [isOpenMenu, setIsOpen] = useState(false);
  const { isOpen } = useMenuContext();
  const { getUser } = useAuth();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <>
      <Btn
        isOpenDrop={isOpenDrop}
        onClick={() => {
          setIsOpenDrop(!isOpenDrop), setIsOpen(!isOpenDrop);
        }}
      >
        <ImgUser src={user?.image || Anonymous} />
        <Level isOpen={isOpen}>{user?.level?.slug || 0}</Level>
        <Text isOpen={isOpen}>{user?.code}</Text>
        <ChevronIcon isOpenDrop={isOpenMenu} />
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
            <BtnNavigator onClick={() => navigate("/metaverse/sanad")}>
              <Icon src={Ticket} />
              {getFieldTranslationByNames("241")}
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={Message} />
              {getFieldTranslationByNames("242")}
            </BtnNavigator>
            <BtnNavigator onClick={() => navigate("/metaverse/profile")}>
              <Icon src={ProfileMember} />
              {getFieldTranslationByNames("243")}
            </BtnNavigator>
            <BtnNavigator onClick={() => navigate("/metaverse/settings")}>
              <Icon src={Setting} />
              {getFieldTranslationByNames("642")}
            </BtnNavigator>
            {/* <Fallowing /> */}
            <Union />
          </SubMenu>
        </Container>

        <BtnsMenu />
      </ContainerMain>
    </>
  );
};

export default Profile;
