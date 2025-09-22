import rialGif from "../assets/gif/rial.gif";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../Services/Utility";

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
      <span>{getFieldTranslationByNames("48")}</span>
      <img width={26} alt="rial" src={rialGif} />
    </Container>
  );
};

export default Rial;
