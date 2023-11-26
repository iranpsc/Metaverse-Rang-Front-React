import React, { memo } from "react";
import styled from "styled-components";
import { ProfileId, ProfileImage, ProfileLevel } from "../Profile/Styles";
import MessageIcon from "../../Assets/images/message.png";
import ListIcon from "../../Assets/images/list.png";
import ShareIcon from "../../Assets/images/share.png";
import SanadIcon from "../../Assets/images/sanad.png";
import LedGreen from "../../Assets/images/led-green.png";

import "./Styles.css";

import AnonymousImage from "../../Assets/images/default-image-user.png";
import { useNavigate } from "react-router-dom";

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7777779e;
  display: none;
`;

const Container = styled.div`
  position: relative;
  min-width: 130px;
  max-width: 130px;
  height: 130px;
  border: 3px solid #fff;
  border-radius: 8px;
  cursor: grab;
  margin-left: 16px;

  &:hover ${IconContainer} {
    display: flex;
  }
`;

const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    margin: 4px;
    cursor: pointer;
  }
`;

const OnlineIcon = styled.img`
  position: absolute;
  z-index: 503;
  width: 16px;
  bottom: 4px;
  left: 4px;
`;

function PlayerProfile({ image, code, level, id, Online }) {
  const Navigate = useNavigate();

  return (
    <Container className="white-box-shadow">
      <ProfileImage src={image ? image : AnonymousImage} />

      <ProfileId
        className="white-box-shadow cursor-pointer"
        onClick={() =>
          window.open(`https://rgb.irpsc.com/fa/citizen/${code}`, "_blank")
        }
      >
        <p
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            fontFamily: "Segoe UI",
          }}
        >
          {code}
        </p>
      </ProfileId>

      <ProfileLevel className="white-box-shadow" style={{ height: 35 }}>
        <p style={{ fontSize: 18 }}>{level ? level : 1}</p>
      </ProfileLevel>

      <IconContainer>
        <IconSection>
          <img
            src={ListIcon}
            alt=""
            width={34}
            onClick={() => Navigate(`/metaverse/player/${id}`)}
          />
          <img src={ShareIcon} alt="" width={34} className="object-disabled" />
        </IconSection>

        <IconSection>
          <img
            src={SanadIcon}
            alt=""
            width={34}
            onClick={() =>
              Navigate("/metaverse/sanad", { state: { code, id } })
            }
          />
          <img
            src={MessageIcon}
            alt=""
            width={34}
            className="object-disabled"
          />
        </IconSection>
      </IconContainer>

      <OnlineIcon
        src={LedGreen}
        className={`${!Online && "object-disabled"}`}
      />
    </Container>
  );
}

export default memo(PlayerProfile);
