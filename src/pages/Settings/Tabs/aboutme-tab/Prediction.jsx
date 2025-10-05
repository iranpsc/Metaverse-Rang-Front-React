import CurrentYears from "./CurrentYears";
import NextYear from "./NextYear";
import styled from "styled-components";

const Container = styled.div`
@media (max-width: 1024px) {
      font-size: 14px;
  }
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
