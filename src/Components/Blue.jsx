import blueGif from "../Assets/gif/blue-color.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: ${(props) => props.color};
  }
`;
const Blue = ({ color }) => {
  return (
    <Container color={color}>
      <img width={26} alt="blue" src={blueGif} />
    </Container>
  );
};

export default Blue;
