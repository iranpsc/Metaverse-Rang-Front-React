import { FiInbox } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: 10px;
  svg {
    color: #dedee9;
    font-size: 60px;
  }
  h2 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`;
const NoNotification = () => {
  return (
    <Container>
      <FiInbox />
      <h2>اعلانی موجود نیست!</h2>
    </Container>
  );
};

export default NoNotification;
