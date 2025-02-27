import Title from "../../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
import Details from "./Details";
import Model3D from "./Model3D";

import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  display: grid;
  @media (min-width: 1366px) {
    grid-template-columns: 2fr 1fr;
  }
`;
const Owner = ({ data }) => {
  return (
    <Container>
      <Title title={getFieldTranslationByNames(817)} />
      <Wrapper>
        <Model3D />
        <Details data={data} />
      </Wrapper>
    </Container>
  );
};

export default Owner;
