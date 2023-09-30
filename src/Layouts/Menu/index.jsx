import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 27%;
  height: 100%;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 16.5%;
    border-radius: 10px;
  }
  background-color: #1a1a18;
`;
const Menu = () => {
  return <Container></Container>;
};

export default Menu;
