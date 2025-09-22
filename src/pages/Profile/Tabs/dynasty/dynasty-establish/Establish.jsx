import Title from "../../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
import List from "./List";

import styled from "styled-components";

const Container = styled.div``;
const Top = styled.div`
  div {
    margin-top: 10px;
    p {
      color: ${(props) => props.theme.colors.newColors.shades.title};
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

const Establish = ({ members }) => {
  return (
    <Container>
      <Top>
        <Title title={getFieldTranslationByNames(807)} />
        <div>
          <p>{getFieldTranslationByNames(806)}</p>
          <p>{getFieldTranslationByNames(808)}</p>
        </div>
      </Top>
      <List members={members} />
    </Container>
  );
};

export default Establish;
