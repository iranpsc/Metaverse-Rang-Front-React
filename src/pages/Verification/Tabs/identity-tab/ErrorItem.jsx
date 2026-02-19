import { BsExclamationOctagon } from "react-icons/bs";
import styled from "styled-components";

const Message = styled.p`
  color: ${({theme})=>theme.colors.newColors.shades.title};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color:${({theme})=>theme.colors.newColors.otherColors.menuBg};
  border-radius: 5px;
  padding: 15px;
  svg {
    color: #c30000;
    font-size: 22px;
  }
`;
const ErrorItem = ({ item }) => {
  return (
    <Container>
      <BsExclamationOctagon />
      <Message>{item}</Message>
    </Container>
  );
};

export default ErrorItem;
