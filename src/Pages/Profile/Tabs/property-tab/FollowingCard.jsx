import avatar from "../../../../Assets/images/slide.png";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.div`
  font-size: 16px;
  white-space: nowrap;
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
  padding: 10px 22px;
  cursor: pointer;
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
const FollowingCard = ({ name, code }) => {
  const [follow, setFollow] = useState(true);
  return (
    <Card>
      <Profile>
        <img src={avatar} width={80} height={80} />
        <div>
          <h3>{name}</h3>
          <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">{code}</a>
        </div>
      </Profile>
      {follow ? (
        <Button gray onClick={() => setFollow(false)}>
          آنفالو کردن
        </Button>
      ) : (
        <Button onClick={() => setFollow(true)}>فالو کردن</Button>
      )}
    </Card>
  );
};

export default FollowingCard;
