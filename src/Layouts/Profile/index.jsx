import React, { useEffect, useState } from "react";

import useAuth from "../../Services/Hooks/useAuth";
import Tooltip from "../../Components/Tooltip";
import {
  IconContainer,
  ProfileId,
  ProfileImage,
  ProfileLevel,
  UserProfile,
} from "./Styles";

// user images
import AnonymousImage from "../../Assets/images/default-image-user.png";

import SanadImage from "../../Assets/images/sanad.png";
import ChatImage from "../../Assets/images/chat.png";
import SettingImage from "../../Assets/images/setting.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LevelProgress = styled.div`
  height: 100%;
  background: red;
`;

export default function Profile() {
  const { getUser } = useAuth();
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUser());
  }, [getUser]);

  return (
    <>
      <UserProfile className="white-box-shadow">
        <ProfileImage
          src={user?.image ? user?.image : AnonymousImage}
          onClick={() => navigate("/metaverse/profile")}
        />

        <ProfileId className="white-box-shadow">
          <LevelProgress
            style={{
              width: `${
                user?.score_percentage_to_next_level
                  ? user?.score_percentage_to_next_level
                  : 0
              }%`,
            }}
          />
          <p style={{ textTransform:"uppercase",fontFamily:"Segoe UI"}}>{user?.code}</p>
        </ProfileId>

        <ProfileLevel className="white-box-shadow">
          <p>{user?.level?.slug}</p>
        </ProfileLevel>

        <IconContainer>
          <Tooltip
            Chidren={
              <img
                width={32}
                src={SanadImage}
                alt=""
                className="cursor-pointer"
                onClick={() => navigate("/metaverse/sanad")}
              />
            }
            TitleToltip={"اسناد"}
            ContentToltip={"ارسال و دریافت سند"}
            classNamePosstion={"tw-righticon"}
          />

          <img
            width={32}
            src={ChatImage}
            alt=""
            className="cursor-pointer object-disabled"
          />
          <Tooltip
            Chidren={
              <img
                width={32}
                src={SettingImage}
                alt=""
                className="cursor-pointer"
                onClick={() => navigate("/metaverse/settings")}
              />
            }
            TitleToltip={"تنظیمات"}
            ContentToltip={"حساب کاربری خود را مدیریت کنید "}
            classNamePosstion={"tw-righticon"}
          />
        </IconContainer>
      </UserProfile>
    </>
  );
}
