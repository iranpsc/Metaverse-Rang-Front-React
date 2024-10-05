import AdminMessage from "./AdminMessage";
import CitizenMessage from "./CitizenMessage";
import styled from "styled-components";

const Container = styled.div`
  direction: ltr;
`;
const Messages = () => {
  return (
    <Container>
      <CitizenMessage />
      <AdminMessage />
    </Container>
  );
};

export default Messages;
