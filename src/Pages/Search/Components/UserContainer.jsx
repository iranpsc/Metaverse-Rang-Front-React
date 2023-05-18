//import necessary components
import React from "react";
import styled from "styled-components";
import ChatIcon from "../../../Assets/images/chat.png";
import MessageIcon from "../../../Assets/images/message.png";
import FollowIcon from "../../../Assets/images/follow.png";
import AnonymousIcon from "../../../Assets/images/anonymous.png";
import CrossImage from "../../../Assets/images/cross.png";
import useRequest from "../../../Services/Hooks/useRequest";
import { useContext } from "react";
import { FollowContext } from "../../../Services/Reducers/FollowContext";
import _ from "lodash";

//Creates a UserItem div and styles it with css
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

//Creates a ImgContainer div and styles it with css
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

//Creates a ProfilePhoto img and styles it with css
const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;

//Creates a Icons img and styles it with css
const Icons = styled.img`
  width: 35px;
  aspect-ratio: 1/1;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.678));
  cursor: pointer;
`;

//Creates a DetailsContainer div and styles it with css
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  gap: 15px;
`;

//Function to render the user item
const UserContainer = ({ user }) => {
  //Retrieve the request hook
  const { Request } = useRequest();

  //Retrieve the follow context
  const [follow, dispatch] = useContext(FollowContext);

  //Function to handle when user follows another user
  const onFollowHandler = (id) => {
    Request(`follow/${id}`).then(() => {
      Request("following").then((response) => {
        dispatch(response.data.data);
      });
    });
  };

  //Function to handle when user unfollows another user
  const onUnFollowHandler = (id) => {
    Request(`unfollow/${id}`).then(() => {
      Request("following").then((response) => {
        dispatch(response.data.data);
      });
    });
  };

  //Return the JSX element for the user item
  return (
    <UserItem key={user.id}>
      <ImgContainer>
        <ProfilePhoto src={user?.photo ? user?.photo : AnonymousIcon} />
        {_.findIndex(follow, function (o) {
          return parseInt(o.id) === parseInt(user?.id);
        }) > -1 ? (
          <Icons src={CrossImage} onClick={() => onUnFollowHandler(user?.id)} />
        ) : (
          <Icons src={FollowIcon} onClick={() => onFollowHandler(user?.id)} />
        )}
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

//Export the UserContainer component
export default UserContainer;
