import SendVod from "./sent/SendVod";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";
import ReceivedList from "./receive/ReceivedList";

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
      {menu === 1 && <ReceivedList />}
      {menu === 2 && <SendVod />}
    </Container>
  );
};

export default VodListTab;
