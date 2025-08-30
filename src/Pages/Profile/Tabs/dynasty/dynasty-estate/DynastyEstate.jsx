import Convert from "./Convert";
import Owner from "./Owner";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
/* padding-bottom: 30px; */
  height: calc(100vh - 150px);
  @media (min-width: 992px) {
    height: calc(100vh - 230px);
  }
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
