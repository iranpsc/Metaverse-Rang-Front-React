import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Container = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  @media (min-width: 1366px) {
    gap: 20px;
  }
`;

const DynastyTab = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default DynastyTab;
