import RecieveVod from "./recieve/RecieveVod";
import SendVod from "./sent/SendVod";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 4px;
  @media (min-width: 1366px) {
    gap: 20px;
  }
`;

const VodListTab = () => {
  const [menu, setMenu] = useState(1);
  return (
    <Container>
      <Sidebar setMenu={setMenu} menu={menu} />
      {menu === 1 && <RecieveVod />}
      {menu === 2 && <SendVod />}
    </Container>
  );
};

export default VodListTab;
