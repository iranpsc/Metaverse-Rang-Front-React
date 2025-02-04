import RecievedSuggestion from "./recieved/RecievedSuggestion";
import SentSuggestion from "./sent/SentSuggestion";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAccountSecurity } from "../../../../Services/Reducers/accountSecurityContext"; // ایمپورت کانتکست

const Container = styled.div`
  padding: 20px 0;
  height: 100%;
  display: flex;
  gap: 20px;
  overflow-y: hidden;
  padding-right: 15px;
`;

const SuggestionTab = () => {
  const { sectionId } = useAccountSecurity(); 
  const [menu, setMenu] = useState(1); 

  useEffect(() => {


    if (sectionId === "send-suggestion" && menu !== 2) {
      setMenu(2);
    } else if (sectionId === "received-suggestion" && menu !== 1) {
      setMenu(1);
    }
  }, [sectionId, menu]);

  return (
    <Container>
      <Sidebar setMenu={setMenu} menu={menu} />
      {menu === 1 ? <RecievedSuggestion /> : <SentSuggestion />}
    </Container>
  );
};

export default SuggestionTab;
