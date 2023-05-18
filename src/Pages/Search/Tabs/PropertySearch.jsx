import styled from "styled-components";
import Search from "../Components/InputSearch";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 110%;
  display: flex;
  align-items: start;
  justify-content: center;
 
`;
const TopContainer =styled.div`
  margin-top: 3rem;
  width: 100%;
  overflow-y: auto;
  height: 95%;
`
export default function PropertySearch(second) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  return (
    <Container>
     <TopContainer>
     <Search
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        setCurrentUserId={setCurrentUserId}
       
      />
     </TopContainer>
    </Container>
  );
}
