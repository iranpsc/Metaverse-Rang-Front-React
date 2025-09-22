import { BiEditAlt } from "react-icons/bi";

import styled from "styled-components";
import Title from "../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  margin-top: 25px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #ffc700;
  width: 177px;
  height: 50px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  svg {
    font-size: 20px;
  }
  @media (min-width: 1023px) {
    svg {
      font-size: 24px;
    }
  }
  @media (max-width: 1023px) {
    width: 155px;
    height: 40px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.5rem;
  margin-top: 10px;
  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

const Edit = styled.span`
  color: black;
  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;
const Info = ({ inputs, setEdit, edit }) => {
  return (
    <Container>
      <Title
        title={getFieldTranslationByNames("365")}
      />
      <Text>{inputs.target}</Text>
      {edit && (
        <Button onClick={() => setEdit(true)}>
          <BiEditAlt />
          <Edit>
            {getFieldTranslationByNames("537")}
          </Edit>
        </Button>
      )}
    </Container>
  );
};

export default Info;
