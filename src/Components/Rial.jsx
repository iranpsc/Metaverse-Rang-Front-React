import rialGif from "../Assets/gif/rial.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: ${(props) => props.color};
  }
`;
const Rial = ({ color }) => {
  return (
    <Container color={color}>
      <span>ریال</span>
      <img width={26} alt="rial" src={rialGif} />
    </Container>
  );
};

export default Rial;
