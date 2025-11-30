import Convert from "./Convert";
import Owner from "./Owner";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

width: 100%;
  
`;

const DynastyEstate = ({ data,setData }) => {
  return (
    <Container>
      <Owner data={data} />
      <Convert data={data} setData={setData} />
    </Container>
  );
};

export default DynastyEstate;
