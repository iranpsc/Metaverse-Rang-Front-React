import { TiUserAddOutline } from "react-icons/ti";
import avatar from "../../../../Assets/images/slide.png";
import styled from "styled-components";
import { useState } from "react";

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
  direction: rtl;
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
  color: ${(props) => props.theme.colors.newColors.shades.title};
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

const Follower = ({ id, followers, setFollowers, name, code }) => {
  const [follow, setFollow] = useState(true);
  const deleteHandler = () => {
    setFollowers(followers.filter((item) => item.id !== id));
  };
  return (
    <Card>
      <Profile>
        <img src={avatar} width={80} height={80} />
        <div>
          <h3>{name}</h3>
          <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">{code}</a>
        </div>
      </Profile>
      <Buttons>
        {follow ? (
          <Button onClick={() => setFollow(false)} gray>
            آنفالو کردن
          </Button>
        ) : (
          <Container onClick={() => setFollow(true)}>
            <span>
              <TiUserAddOutline />
            </span>
            <h3>دنبال کردن</h3>
          </Container>
        )}
        <Button onClick={deleteHandler}>حذف کردن</Button>
      </Buttons>
    </Card>
  );
};

export default Follower;
