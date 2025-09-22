import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  height: 317px;
  @media (min-width: 740px) {
    height: 300px;
  }
`;
const SliderContainer = () => {
  return (
    <Container>
      <Slider />
    </Container>
  );
};

export default SliderContainer;
