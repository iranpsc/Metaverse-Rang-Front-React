import Establish from "./Establish";
import PropertySelect from "./PropertySelect";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  overflow-y: auto;
  width: 100%;
`;
const DynastyEstablish = ({ data, setMode, setData }) => {
  return (
    <Container>
      <PropertySelect setMode={setMode} data={data} setData={setData} />
      <Establish members={data} />
    </Container>
  );
};

export default DynastyEstablish;
