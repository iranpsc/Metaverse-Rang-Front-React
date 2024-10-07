import AdminMessage from "./AdminMessage";
import CitizenMessage from "./CitizenMessage";
import VodReply from "./VodReply";
import styled from "styled-components";

const Container = styled.div``;
const Messages = ({ member }) => {
  return (
    <Container>
      <CitizenMessage member={member} />
      {/* <AdminMessage /> */}
      <VodReply />
    </Container>
  );
};

export default Messages;
