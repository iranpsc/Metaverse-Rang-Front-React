import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";
import Message from "../../../Assets/svg/message.svg";
import ProfileMember from "../../../Assets/svg/profileMember.svg";
import Ticket from "../../../Assets/svg/ticket.svg";
import Setting from "../../../Assets/svg/setting.svg";
import { ReactComponent as FollowingIcon } from "../../../Assets/svg/following.svg";
import { useState } from "react";
import useRequest from "../../../Services/Hooks/useRequest";
import { useLayoutEffect } from "react";
const Btn = styled.button`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) => (props.isOpenDrop ? "#000000" : "transparent")};
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
`;
const SubMenu = styled.div`
  display: ${(props) => (props.isOpenDrop ? "block" : "none")};
  width: 100%;
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
              ارسال سند
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={Message} />
              گفتگو
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={ProfileMember} />
              پروفایل
            </BtnNavigator>
            <BtnNavigator>
              <Icon src={Setting} />
              تنظیمات
            </BtnNavigator>
          </SubMenu>
        </React.Fragment>
      ))}
    </>
  );
};

export default Follower;
