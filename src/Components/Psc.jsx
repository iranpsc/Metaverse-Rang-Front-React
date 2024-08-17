import pscGif from "../Assets/gif/psc.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: ${(props) => props.color};
  }
`;
const Psc = ({ color }) => {
  return (
    <Container color={color}>
      <span>PSC</span>
      <img width={26} alt="psc" src={pscGif} />
    </Container>
  );
};

export default Psc;
