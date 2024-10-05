import Info from "./Info";
import SliderContainer from "./SliderContainer";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 280px;
  @media (min-width: 740px) {
    height: 300px;
  }
  @media (min-width: 840px) {
    height: 290px;
  }
  @media (min-width: 1400px) {
    height: 612px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1920px) {
    height: 622px;
  }
`;
const Bio = () => {
  return (
    <Container>
      <SliderContainer />
      <Info />
    </Container>
  );
};

export default Bio;
