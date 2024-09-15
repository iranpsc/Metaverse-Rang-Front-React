import { TiUserAddOutline } from "react-icons/ti";
import DefaultProfile from "../../../../Assets/images/defulte-profile.png";
import styled from "styled-components";
import { useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Button = styled.div`
  font-size: 16px;
  color: ${(props) =>
    !props.gray
      ? props.theme.colors.newColors.primaryText
      : props.theme.colors.newColors.otherColors.btnIconText};
  font-weight: 600;
  background-color: ${(props) =>
    !props.gray
      ? props.theme.colors.primary
      : props.theme.colors.newColors.otherColors.btnIconBg};
  border-radius: 10px;
  padding: 7px 20px 6px 20px;
  cursor: pointer;
  @media (min-width: 1024px) {
    padding: 7px 20px 4px 20px;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover img {
    box-shadow: 0px 10px 25px -5px #0066ff40;
    border: 2px solid #0066ff;
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 18px;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: #0066ff;
    font-size: 16px;
    font-weight: 500;
  }
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    transition: all 0.2s linear;
  }
`;
const Card = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px;
  padding: 15px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  @media (min-width: 1300px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.newColors.primaryText};
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
  flex-grow: 1;
  padding: 8px 20px 3px 20px;
  svg {
    font-size: 18px;
    padding-top: 4px;
  }
  @media (min-width: 740px) {
    h3 {
      font-size: 14px;
    }
  }
  @media (min-width: 1024px) {
    padding: 5px 20px 4px 20px;
    h3 {
      font-size: 16px;
    }
    svg {
      font-size: 18px;
    }
  }
`;

const Follower = ({
  id,
  followers,
  setFollowers,
  name,
  code,
  profile_photos,
}) => {
  const [follow, setFollow] = useState(true);
  const { Request } = useRequest();
  const deleteHandler = () => {
    Request(`remove/${id}`).then(() => {
      setFollowers(followers.filter((item) => item.id !== id));
    });
  };
  const unFollowHandler = () => {
    Request(`unfollow/${id}`).then(() => {
      setFollow(false);
    });
  };
  const onFollowHandler = () => {
    Request(`follow/${id}`).then(() => {
      setFollow(true);
    });
  };
  const profileImage =
    profile_photos.length === 0 ? DefaultProfile : profile_photos;
  return (
    <Card>
      <Profile>
        <img src={profileImage} width={80} height={80} />
        <div>
          <h3>{name}</h3>
          <a href={`https://rgb.irpsc.com/citizen/fa/${code}`} target="_blank">
            {code}
          </a>
        </div>
      </Profile>
      <Buttons>
        {follow ? (
          <Button onClick={unFollowHandler} gray>
            {getFieldTranslationByNames("citizenship-account", "unfollow")}
          </Button>
        ) : (
          <Container onClick={onFollowHandler}>
            <span>
              <TiUserAddOutline />
            </span>
            <h3>
              {" "}
              {getFieldTranslationByNames("citizenship-account", "following")}
            </h3>
          </Container>
        )}
        <Button onClick={deleteHandler}>
          {getFieldTranslationByNames("citizenship-account", "remove")}
        </Button>
      </Buttons>
    </Card>
  );
};

export default Follower;
