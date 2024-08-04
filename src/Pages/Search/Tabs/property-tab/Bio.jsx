import Info from "./Info";
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 15px;
`;
const Bio = ({ item }) => {
  return (
    <Container>
      <Profile item={item} />
      <Info item={item} />
    </Container>
  );
};

export default Bio;
