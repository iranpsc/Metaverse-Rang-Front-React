import { FiInbox } from "react-icons/fi";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 60px;
  }
  h2 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`;
const NoNotification = () => {
  return (
    <Container>
      <FiInbox />
      <h2>
        {getFieldTranslationByNames("865")}
      </h2>
    </Container>
  );
};

export default NoNotification;
