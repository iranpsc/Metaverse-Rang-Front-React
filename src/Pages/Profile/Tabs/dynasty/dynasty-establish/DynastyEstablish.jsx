import Establish from "./Establish";
import PropertySelect from "./PropertySelect";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
  max-height: 70vh;
  overflow-y: auto;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    max-height: none;
    overflow-y: visible;
  }
`;
const DynastyEstablish = ({ data, setMode, setData }) => {
  return (
    <Container>
      <Establish members={data} />
      <PropertySelect setMode={setMode} data={data} setData={setData} />
    </Container>
  );
};

export default DynastyEstablish;
