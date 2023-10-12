import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import BtnsMenu from "./BtnsMenu";
import ThemesBtn from "./ThemesBtn";
import { useMenuContext } from "../../Services/Reducers/MenuContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: ${(props) => (props.isOpen ? "54%" : "9%")};
  height: 100%;
  border-radius: 10px;
  gap: 12px;
  @media (min-width: 1024px) {
    width: ${(props) => (props.isOpen ? "32%" : "6.1%")};
    border-radius: 10px;
  }
  @media (min-width: 1536px) {
    width: ${(props) => (props.isOpen ? "23.5%" : "4.1%")};
    border-radius: 10px;
  }
  background-color: ${(props) => props.theme.menuBg};
  padding: ${(props) => (props.isOpen ? "20px" : "10px")};
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.lineMenu};
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const BtnOpenCloseMenu = styled.button`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  position: fixed;
  right: 5.12%;
  top: 3.3%;
  z-index: 1200;
`;
const Menu = () => {
  const { isOpen, toggleMenu } = useMenuContext();
  return (
    <Container isOpen={isOpen}>
      <Header />
      <Profile />
      <Line />
      <BtnsMenu />
      <Line />
      <ThemesBtn />
      <BtnOpenCloseMenu onClick={toggleMenu} />
    </Container>
  );
};

export default Menu;
