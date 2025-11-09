import Establish from "./Establish";
import PropertySelect from "./PropertySelect";
import Container from "../../../../../components/Common/Container";

const DynastyEstablish = ({ data, setMode, setData }) => {
  return (
    <Container>
      <PropertySelect setMode={setMode} data={data} setData={setData} />
      <Establish members={data} />
    </Container>
  );
};

export default DynastyEstablish;
