import VideoSlider from "./VideoSlider";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  height: 900px;
  border-radius: 10px;
  @media (min-width: 1500px) {
    height: 77% !important;
  }
`;
const Slider = ({ data }) => {
  return (
    <Container>
      <VideoSlider data={data} />
    </Container>
  );
};

export default Slider;
