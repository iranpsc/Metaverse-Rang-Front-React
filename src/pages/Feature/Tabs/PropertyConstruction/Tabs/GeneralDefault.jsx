import React from "react";
import styled from "styled-components";
import InputsGeneralDefault from "./components/InputsGeneralDefault";
import ChoosingEnvironment from "./components/ChoosingEnvironment";

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  padding: 0 20px;
  margin-top:15px;
  flex-direction: column;
  overflow-y: scroll;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
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
