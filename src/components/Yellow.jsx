import yellowGif from "../assets/gif/yellow-color.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: ${(props) => props.color};
  }
`;
const Yellow = ({ color }) => {
  return (
    <Container color={color}>
      <img width={26} alt="yellow" src={yellowGif} />
    </Container>
  );
};

export default Yellow;
