import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import BtnsMenu from "./BtnsMenu";
import ThemesBtn from "./ThemesBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  gap: 12px;
  @media (min-width: 1024px) {
    width: 23.5%;
    border-radius: 10px;
  }
  background-color: #1a1a18;
  padding: 32px 25px;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #363636;
`;
const Menu = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Line />
      <BtnsMenu />
      <Line />
      <ThemesBtn />
    </Container>
  );
};

export default Menu;
