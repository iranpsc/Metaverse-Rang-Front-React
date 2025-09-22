import CitizenMessage from "./CitizenMessage";
import styled from "styled-components";

const Container = styled.div`
`;
const Messages = ({
  reportDetails
}) => {
  return (
    <Container>
      <CitizenMessage   reportDetails={reportDetails}
      />
    </Container>
  );
};

export default Messages;
