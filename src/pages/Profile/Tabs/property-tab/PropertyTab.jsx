import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router";
const Container = styled.div`
  display: flex;
  height: 100%;
  overflow-y: hidden;
`;
const PropertyTab = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default PropertyTab;
