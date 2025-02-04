import Convert from "./Convert";
import Owner from "./Owner";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 75%;
  overflow-y: auto;
`;

const DynastyEstate = ({ data }) => {
  return (
    <Container>
      <Owner data={data} />
      <Convert data={data} />
    </Container>
  );
};

export default DynastyEstate;
