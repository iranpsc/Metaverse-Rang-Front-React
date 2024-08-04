import { LuBuilding2 } from "react-icons/lu";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3b3b;
  color: #949494;
`;
const Info = styled.div`
  h2 {
    color: #a0a0ab;
    font-size: 14px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    color: #ffc700;
    text-decoration: none;
  }
`;

const Profile = ({ item }) => {
  return (
    <Container>
      <IconWrapper>
        <LuBuilding2 size={30} />
      </IconWrapper>
      <Info>
        <h2>شناسه VOD</h2>
        <p>{item?.feature_properties_id}</p>
      </Info>
    </Container>
  );
};

export default Profile;
