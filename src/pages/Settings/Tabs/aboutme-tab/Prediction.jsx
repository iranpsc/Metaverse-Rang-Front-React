import CurrentYears from "./CurrentYears";
import NextYear from "./NextYear";
import styled from "styled-components";

const Container = styled.div`

`;
const Prediction = () => {
  return (
    <Container>
      <CurrentYears />
      <NextYear />
    </Container>
  );
};

export default Prediction;
