import RecievedSuggestion from "./recieved/RecievedSuggestion";
import SentSuggestion from "./sent/SentSuggestion";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 20px 0;
  height: 100%;
  display: flex;
  gap: 20px;
  overflow-y: hidden;
  padding-right: 15px;
 
`;

const SuggestionTab = () => {
  const [menu, setMenu] = useState(1);
  return (
    <Container> 
      <Sidebar setMenu={setMenu} menu={menu} />
      {menu === 1 && <RecievedSuggestion />}
      {menu === 2 && <SentSuggestion />}
    </Container>
  );
};

export default SuggestionTab;
