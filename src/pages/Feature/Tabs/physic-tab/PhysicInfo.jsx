import Info from "./Info";
import Inputs from "./Inputs";
import Container from "../../../../components/Common/Container";

const PhysicInfo = ({ inputs, setEdit, edit }) => (
  <Container>
    <Inputs inputs={inputs} />
    <Info inputs={inputs} setEdit={setEdit} edit={edit} />
  </Container>
);

export default PhysicInfo;
