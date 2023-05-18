import React from "react";
import styled from "styled-components";
import ChatIcon from "../../../Assets/images/chat.png";
import MessageIcon from "../../../Assets/images/message.png";
import FollowIcon from "../../../Assets/images/follow.png";
import AnonymousIcon from "../../../Assets/images/anonymous.png";


const UserItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  border-bottom: 1px solid #777;
  padding: 0 10px;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;
const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;
const Icons = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.678));
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  gap:15px;
`;
const UserContainer = ({ user }) => {
  return (
    <UserItem key={user.id}>
      <ImgContainer>
        <ProfilePhoto src={user?.photo?user?.photo:AnonymousIcon} />
        <Icons src={FollowIcon} />
        <Icons src={ChatIcon} />
        <Icons src={MessageIcon} />
      </ImgContainer>
      <DetailsContainer>
        <span>{user.code} : شناسه شهروند </span>
        <span>{user.name} : نام شهروند </span>
        <span>{user.level} : سطح </span>
        <span> {user.followers} : دنبال کنندگان </span>
        <span> - : شناسه شهروند </span>
      </DetailsContainer>
    </UserItem>
  );
};

export default UserContainer;
