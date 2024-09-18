import React from "react";
import styled from "styled-components";
import InputsGeneralDefault from "./Components/InputsGeneralDefault";
import ChoosingEnvironment from "./Components/ChoosingEnvironment";

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  padding: 0 20px;
`;
const GeneralDefault = () => {
  return (
    <Container>
      <InputsGeneralDefault />
      <ChoosingEnvironment />
    </Container>
  );
};

export default GeneralDefault;
