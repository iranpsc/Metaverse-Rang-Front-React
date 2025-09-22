import pscGif from "../assets/gif/psc.gif";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../services/Utility";

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
      <span>{getFieldTranslationByNames("47")}</span>
      <img width={26} alt="psc" src={pscGif} />
    </Container>
  );
};

export default Psc;
