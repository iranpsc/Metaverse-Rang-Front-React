import Info from "./Info";
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 25px;
`;
const Bio = ({ user }) => {
  return (
    <Container>
      <Profile user={user} />
      <Info user={user} />
    </Container>
  );
};

export default Bio;
