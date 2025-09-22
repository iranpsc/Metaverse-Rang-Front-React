import { LuBuilding2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility";

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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconBg};
  color: ${(props) => props.theme.colors.newColors.otherColors.iconText};
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
    cursor: pointer;
  }
`;

const Profile = ({ item }) => {
  const Navigate = useNavigate();
  return (
    <Container>
      <IconWrapper>
        <LuBuilding2 size={30} />
      </IconWrapper>
      <Info>
        <h2>
          {getFieldTranslationByNames("41")}
        </h2>
        <p onClick={() => Navigate(`/metaverse/feature/${item?.id}`)}>
          {item?.feature_properties_id}
        </p>
      </Info>
    </Container>
  );
};

export default Profile;
