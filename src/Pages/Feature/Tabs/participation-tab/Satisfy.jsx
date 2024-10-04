import AddSatisfy from "./AddSatisfy";
import SatisfyCount from "./SatisfyCount";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
  border-bottom: 1px solid #454545;
  padding-bottom: 30px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const Satisfy = () => {
  return (
    <Container>
      <SatisfyCount />
      <AddSatisfy />
    </Container>
  );
};

export default Satisfy;
