import { BsExclamationOctagon } from "react-icons/bs";
import styled from "styled-components";

const Message = styled.p`
  color: #dedee9;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1a1a18;
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
