import Followers from "./Followers";
import Following from "./Following";
import Houses from "./Houses";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  /* margin: 20px 0; */
`;

const PropertyTab = () => {
  const [menu, setMenu] = useState(1);
  return (
    <Container>
      <Sidebar setMenu={setMenu} menu={menu} />
      {menu === 1 && <Houses />}
      {menu === 2 && <Following />}
      {menu === 3 && <Followers />}
    </Container>
  );
};

export default PropertyTab;
