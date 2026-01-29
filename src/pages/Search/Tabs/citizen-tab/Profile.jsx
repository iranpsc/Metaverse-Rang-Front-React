import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";
import DefaultProfile from "../../../../assets/images/defulte-profile.png";
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Info = styled.div`
  h2 {
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
  }
  a {
    font-size: 14px;
    color: #0066ff;
    text-decoration: none;
  }
`;
const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
const Profile = ({ user }) => {
  return (
    <Container>
      <ProfilePhoto src={user?.photo ? user?.photo : DefaultProfile} />
      <Info>
        <h2>{user?.name}</h2>
        <a
          href={`https://rgb.irpsc.com/fa/citizens/${user?.code.toLowerCase()}`}
          target="_blank"
        >
          {user.code}
        </a>
      </Info>
    </Container>
  );
};

export default Profile;
