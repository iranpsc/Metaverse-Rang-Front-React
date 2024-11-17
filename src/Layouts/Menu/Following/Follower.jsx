import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";
import Message from "../../../Assets/svg/message.svg";
import ProfileMember from "../../../Assets/svg/profileMember.svg";
import Ticket from "../../../Assets/svg/ticket.svg";
import Setting from "../../../Assets/svg/setting.svg";
import CitizenProfile from "../../../Assets/svg/citizenProfile.svg";
import Share from "../../../Assets/svg/share.svg";
import { ReactComponent as FollowingIcon } from "../../../Assets/svg/following.svg";
import { useState } from "react";
import useRequest from "../../../Services/Hooks/useRequest";
import { useLayoutEffect } from "react";
import { getFieldTranslationByNames } from "../../../Services/Utility";
const Btn = styled.button`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) =>
    props.isOpenDrop ? props.theme.openDropDown : "transparent"};
  height: 40px;
  border-radius: 10px;
`;
const BtnNavigator = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) =>
    props.isOpenDrop ? props.theme.menuBg : "transparent"};
  height: 40px;
  border-radius: 10px;
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 28.8px */
  text-transform: capitalize;
  filter: ${(props) => (props.disabled ? "opacity(0.5)" : "none")};
`;
const SubMenu = styled.div`
  display: ${(props) => (props.isOpenDrop ? "block" : "none")};
  width: 100%;
  padding: 0 20px;
`;
const Icon = styled.img`
  width: 22px;
  height: 22px;
`;
const IconHeader = styled(FollowingIcon)`
  width: 22px;
  height: 22px;
  fill: ${(props) =>
    props.isOpenDrop ? "white" : props.theme.btnActiveThemeText};
`;
const Text = styled.p`
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
`;
const Follower = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [following, setFollowing] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const { isOpen } = useMenuContext();

  useLayoutEffect(() => {
    Request("following", HTTP_METHOD.GET)
      .then((response) => {
        setFollowing(response.data.data);
        // Initialize dropdown states
        const initialDropdowns = {};
        response.data.data.forEach((user) => {
          initialDropdowns[user.id] = false; // Assuming user has an 'id' property
        });
        setOpenDropdowns(initialDropdowns);
      })
      .catch((error) => {
        console.error("Failed to fetch following data:", error);
      });
  }, []);

  const toggleDropdown = (userId) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  return (
    <>
      {following.map((user) => (
        <React.Fragment key={user.id}>
          <Btn
            isOpenDrop={openDropdowns[user.id]}
            onClick={() => toggleDropdown(user.id)}
          >
            <IconHeader isOpenDrop={openDropdowns[user.id]} />
            <Text isOpen={isOpen}>{user?.name}</Text>
          </Btn>
          <SubMenu isOpenDrop={openDropdowns[user.id]} isOpen={isOpen}>
            <BtnNavigator>
              <Icon src={Ticket} />
              {getFieldTranslationByNames(3814)}
            </BtnNavigator>
            <BtnNavigator disabled>
              <Icon src={Message} />
              {getFieldTranslationByNames(3821)}
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={ProfileMember} />
              {getFieldTranslationByNames(3828)}
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={CitizenProfile} />
              {getFieldTranslationByNames(1899)}
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={Share} />
              {getFieldTranslationByNames(3835)}
            </BtnNavigator>
          </SubMenu>
        </React.Fragment>
      ))}
    </>
  );
};

export default Follower;
