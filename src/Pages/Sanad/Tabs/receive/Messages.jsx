import AdminMessage from "./AdminMessage";
import CitizenMessage from "./CitizenMessage";
import VodReply from "./VodReply";
import styled from "styled-components";

const Container = styled.div``;
const Messages = ({ data }) => {
  return (
    <Container>
      <CitizenMessage data={data} />
      {/* <AdminMessage /> */}
      <VodReply />
    </Container>
  );
};

export default Messages;
