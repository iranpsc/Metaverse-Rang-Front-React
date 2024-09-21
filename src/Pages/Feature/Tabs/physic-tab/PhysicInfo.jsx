import Info from "./Info";
import Inputs from "./Inputs";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  overflow-y: auto;

  height: 69%;
  @media (min-width: 840px) {
    height: 65%;
  }
  @media (min-width: 1024px) and (max-width: 1369px) {
    height: 71%;
  }
  @media (min-width: 1370px) {
    height: 77%;
  }
  @media (min-width: 1100px) {
    padding-right: 0;
  }
`;
const PhysicInfo = ({ inputs, setEdit, edit }) => {
  return (
    <Container>
      <Inputs inputs={inputs} />
      <Info inputs={inputs} setEdit={setEdit} edit={edit} />
    </Container>
  );
};

export default PhysicInfo;
