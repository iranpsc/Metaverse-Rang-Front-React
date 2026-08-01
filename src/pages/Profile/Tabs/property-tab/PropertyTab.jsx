import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Container = styled.div`
  display: flex;
  height: 100%;
  overflow-y: hidden;
`;
const PropertyTab = () => {
  const [menu, setMenu] = useState(1);
  return (
    <Container>
      <Sidebar setMenu={setMenu} menu={menu} />
      <Outlet />
    </Container>
  );
};

export default PropertyTab;
