import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import BtnsMenu from "./BtnsMenu";
import { useMenuContext } from "../../services/reducers/MenuContext";
import PrivateComponent from "../../middleware/PrivateComponent";
import PublicComponent from "../../middleware/PublicComponent";
import BtnsAfterLogin from "./BtnsAfterLogin";
import BtnLogin from "./BtnAction/BtnLogin";
import BtnAction from "./BtnAction/BtnAction";
import { useScrollDirectionContext } from "../../services/reducers/ScrollDirectionContext";
import useLanguage from "../../services/Hooks/useLanguage";
const BlurOverlay = styled.div`
  @media (max-width: 802px) {
    position: fixed;
    inset: 0;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  justify-content: start;
  width: ${(props) => (props.isOpen ? "38%" : "9%")};
  height: 100%;
  border-radius: 10px;

  @media (max-width: 802px) {
    position: ${({ isModalOpen }) => (isModalOpen ? "absolute" : "relative")};
    z-index: 1000;
    height: ${({ isModalOpen, isOpen }) => {
    if (isModalOpen && isOpen) return "100%";
    if (!isModalOpen) return "100%";
    return "97.5%";
  }};
  left: ${({ isPersian }) => (!isPersian && "0")};
    right: ${({ isPersian }) => (!isPersian && "0")};

    top: ${({ isModalOpen, isOpen }) => isModalOpen && isOpen && "0"};
    border-radius: ${({ isModalOpen, isOpen }) => isModalOpen && isOpen && "0"};
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.isOpen ? "32%" : "6.1%")};
    padding: 20px;
    padding-bottom: 10px;
  }
  @media (min-width: 1536px) {
    width: ${(props) => (props.isOpen ? "21.5%" : "4.1%")};
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 10px;
  }
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  padding: ${(props) => (props.isOpen ? "5px" : "10px")};
  padding-bottom: 10px;

  transition: all 0.3s ease 0s;
`;
const Menu = () => {
  const { isOpen } = useMenuContext();
  const { isModalOpen } = useScrollDirectionContext();
  const { isPersian } = useLanguage()

  return (
    <>
      {isModalOpen && isOpen && <BlurOverlay />}
      <Container isOpen={isOpen} isModalOpen={isModalOpen} isPersian={isPersian}>
        <Header />
        <PrivateComponent>
          <Profile />
        </PrivateComponent>

        <PublicComponent>
          <BtnsAfterLogin />
        </PublicComponent>
        <PublicComponent>
          <BtnLogin />
        </PublicComponent>
        <PrivateComponent>
          <BtnAction />
        </PrivateComponent>
      </Container>
    </>
  );
};

export default Menu;
