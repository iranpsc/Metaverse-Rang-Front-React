import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import BtnsMenu from "./BtnsMenu";
import ThemesBtn from "./ThemesBtn";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import PrivateComponent from "../../Middleware/PrivateComponent";
import PublicComponent from "../../Middleware/PublicComponent";
import BtnsAfterLogin from "./BtnsAfterLogin";
import BtnLogin from "./BtnAction/BtnLogin";
import BtnAction from "./BtnAction/BtnAction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: ${(props) => (props.isOpen ? "54%" : "9%")};
  height: 100%;
  border-radius: 10px;

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
  transition: all 0.3s ease 0s;
`;

const Menu = () => {
  const { isOpen } = useMenuContext();
  return (
    <Container isOpen={isOpen}>
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

      <ThemesBtn />
    </Container>
  );
};

export default Menu;
