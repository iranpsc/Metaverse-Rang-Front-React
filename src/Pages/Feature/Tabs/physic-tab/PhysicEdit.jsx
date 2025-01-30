import Title from "../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import EditInputs from "./EditInputs";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
  padding-right: 15px;

  height: 69% !important;
  h3 {
    &:first-of-type {
    }
  }
  @media (min-width: 840px) {
    height: 67%;
  }
  @media (min-width: 1024px) and (max-width: 1369px) {
    height: 71%;
  }
  @media (min-width: 1370px) {
    height: 77%;
  }
  @media (min-width: 1500px) {
    padding-right: 0;
  }
  @media (min-width: 1920px) {
    overflow-y: hidden;
  }
`;
const PhysicEdit = ({ setEdit, inputs, setInputs }) => {
  return (
    <Container>
      <Title
        title={getFieldTranslationByNames("537")}
      />{" "}
      <EditInputs inputs={inputs} setInputs={setInputs} setEdit={setEdit} />
    </Container>
  );
};

export default PhysicEdit;
