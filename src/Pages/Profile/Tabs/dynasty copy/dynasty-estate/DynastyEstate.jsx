import Convert from "./Convert";
import Owner from "./Owner";
import styled from "styled-components";

const Container = styled.div`
padding: 20px 0;
display: flex;
flex-direction: column;
gap: 20px;
height: 530px;
overflow-y: auto;
`;

const DynastyEstate = () => {
  return (
    <Container>
      <Owner />
      <Convert />
    </Container>
  );
};

export default DynastyEstate;
