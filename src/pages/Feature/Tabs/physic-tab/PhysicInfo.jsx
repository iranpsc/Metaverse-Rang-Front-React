import Info from "./Info";
import Inputs from "./Inputs";
import styled from "styled-components";
import Container from "../../../../components/Common/Container";

const PhysicInfo = ({ inputs, setEdit, edit }) => {
  return (
    <Container>
      <Inputs inputs={inputs} />
      <Info inputs={inputs} setEdit={setEdit} edit={edit} />
    </Container>
  );
};

export default PhysicInfo;
