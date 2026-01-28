import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 10px;
  overflow-y: hidden;

  @media (min-width: 1366px) {
    gap: 20px;
  }

  @media (min-width: 998px) {
    grid-template-columns: 160px 1fr;
  }
`;

const VodListTab = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default VodListTab;
