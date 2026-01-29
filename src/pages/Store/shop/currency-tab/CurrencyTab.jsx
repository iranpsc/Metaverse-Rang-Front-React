import CurrenciesContent from "./CurrenciesContent";
import SideBar from "./SideBar";
import { currencies } from "../data";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  overflow-y: hidden;
  @media (max-width: 850px) {
    grid-template-columns: 150px 1fr;
  }
`;
const CurrencyTab = () => {
  return (
    <Wrapper>
      <SideBar/>
      <Outlet  />
    </Wrapper>
  );
};

export default CurrencyTab;
