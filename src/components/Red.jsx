import redGif from "../assets/gif/red-color.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: ${(props) => props.color};
  }
`;
const Red = ({ color }) => {
  return (
    <Container color={color}>
      <img width={26} alt="red" src={redGif} />
    </Container>
  );
};

export default Red;
