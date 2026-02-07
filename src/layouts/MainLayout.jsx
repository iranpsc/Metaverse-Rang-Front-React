import MapTreeD from "./map";
import Menu from "./menu";
import StatusBar from "./statusBar";
import { MenuContextProvider } from "../services/reducers/MenuContext";
import styled from "styled-components";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import HourMeterProfit from "../pages/HourMeterProfit";
const Container = styled.section`
  display: flex;
  overflow-y: hidden;
  width: 100%;
  height: var(--app-height);
  flex-direction: row;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 5px;
  @media (min-width: 768px) {
    gap: 10px;
    padding: 10px;
  }

  transition: all 0.3s ease 0s;
`;
const MainLayout = () => {
  return (
    <Container>
      <MenuContextProvider>
        <Menu />
      </MenuContextProvider>

      <MapTreeD />
        <Outlet />
      <StatusBar />
    </Container>
  );
};

export default MainLayout;
