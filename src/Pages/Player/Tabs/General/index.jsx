import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import useRequest from "../../../../Services/Hooks/useRequest";
import _ from "lodash";

import PSCImage from "../../../../assets/images/coin-psc.png";
import IRRImage from "../../../../assets/images/coin-irr.png";
import BlueImage from "../../../../assets/images/blue.png";
import YellowImage from "../../../../assets/images/yellow.png";
import RedImage from "../../../../assets/images/red.png";
import SatisfactionImage from "../../../../assets/images/satisfaction.png";
import YellowHouseImage from "../../../../assets/images/yellowHouse.png";
import RedHouseImage from "../../../../assets/images/redHouse.png";
import BlueHouseImage from "../../../../assets/images/blueHouse.png";
import FollowingImage from "../../../../assets/images/users.png";
import FollowersImage from "../../../../assets/images/new-follow.png";
import CommentImage from "../../../../assets/images/comment.png";
import AnonymousImage from "../../../../assets/images/anonymous.png";
import FollowImage from "../../../../assets/images/follow.png";
import ShareImage from "../../../../assets/images/share.png";
import MessageImage from "../../../../assets/images/message.png";
import SanadImage from "../../../../assets/images/sanad.png";
import CrossImage from "../../../../assets/images/cross.png";

import "swiper/css";
import "swiper/css/effect-cards";
import { useNavigate, useParams } from "react-router-dom";
import { FollowContext } from "../../../../Services/Reducers/FollowContext";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 16px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 24px;

  p {
    font-weight: bold;
  }
`;

const InfoImage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;

  img {
    margin-left: 16px;
  }
`;

const InfoSection = styled.div`
  width: 100%;
  padding: 24px;
`;

const Progress = styled.div`
  width: 50% !important;
  height: 40px !important;
  border-radius: 100px;
  border: 8px solid #e9e9e9;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  position: relative;

  span {
    position: absolute;
    left: 45%;
    top: 0;
  }
`;

const Complete = styled.div`
  width: 0%;
  height: 100%;
  border-radius: 100px;
  background-color: var(--bs-orange);
`;

const EstateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
`;

const Estate = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: bolder;
  }
`;

const ProfileSection = styled.div`
  width: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProgressLevel = ({ percent = "0%" }) => (
  <Info>
    <p>سطح</p>
    <Progress>
      <Complete style={{ width: percent }} />
      <span>{percent}</span>
    </Progress>
  </Info>
);

const Label = ({ Image, Name, Value }) => (
  <Info>
    <InfoImage>
      <img src={Image} alt="" width={32} />

      <p>{Name}</p>
    </InfoImage>
    <p>{Value}</p>
  </Info>
);

const Note = styled.textarea`
  resize: none;
  width: 90%;
  height: 40px;

  outline: none;
  border: 2px solid #707070 !important;
  border-radius: 8px;
  padding: 4px;
  font-family: "AzarMehr";
`;

const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  position: absolute;
  bottom: 20%;
  width: 100%;
`;
const Text = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export default function General() {
  const [follow, dispatch] = useContext(FollowContext);
  const { id } = useParams();
  const [player, setPlayer] = useState([]);
  const { Request } = useRequest();
  const Navigate = useNavigate();

  useEffect(() => {
    Request(`players/${id}/profile`).then((response) => {
      setPlayer(response.data.data);
    });
  }, []);

  const onFollowHandler = () => {
    Request(`follow/${id}`).then(() => {
      Request("following").then((response) => {
        dispatch(response.data.data);
      });
    });
  };

  const onUnFollowHandler = () => {
    Request(`unfollow/${id}`).then(() => {
      Request("following").then((response) => {
        dispatch(response.data.data);
      });
    });
  };

  return (
    <>
      <Container>
        <ProfileSection>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            className="mySwiper cursor-pointer "
            style={{ height: "37%" }}
          >
            {player?.images?.length > 0 ? (
              player.images.reverse().map((image) => (
                <SwiperSlide key={image.id} className="h-fit">
                  <img
                    style={{ borderRadius: "10px" }}
                    src={image.url}
                    width={150}
                    height={150}
                    alt=""
                  />
                </SwiperSlide>
              ))
            ) : (
              <img
                style={{ borderRadius: "10px" }}
                src={AnonymousImage}
                width={150}
                alt=""
              />
            )}
          </Swiper>

          <ProfileIcons>
            <img
              className="cursor-pointer"
              src={SanadImage}
              alt=""
              width={32}
              onClick={() =>
                Navigate("/metaverse/sanad", {
                  state: { code: player?.code, id },
                })
              }
            />
            <img
              className="cursor-pointer object-disabled"
              src={MessageImage}
              alt=""
              width={32}
            />
            <img
              className="cursor-pointer object-disabled"
              src={ShareImage}
              alt=""
              width={32}
            />
            {_.findIndex(follow, function (o) {
              return parseInt(o.id) === parseInt(id);
            }) > -1 ? (
              <img
                className="cursor-pointer"
                src={CrossImage}
                alt=""
                width={32}
                onClick={() => onUnFollowHandler()}
              />
            ) : (
              <img
                className="cursor-pointer"
                src={FollowImage}
                alt=""
                width={32}
                onClick={() => onFollowHandler()}
              />
            )}
          </ProfileIcons>
        </ProfileSection>

        <InfoSection>
          <Info>
            <Text>{player?.name}</Text>
            <Text className="link" style={{ textTransform: "uppercase" }}>
              {player?.code}
            </Text>
          </Info>

          <Label
            Image={PSCImage}
            Name="PSC مجموع دارایی"
            Value={player?.wallet?.psc}
          />

          <Label
            Image={IRRImage}
            Name="مجموع دارایی ریال"
            Value={player?.wallet?.irr}
          />

          <Label
            Image={BlueImage}
            Name="مجموع دارایی رنگ آبی"
            Value={player?.wallet?.blue}
          />

          <Label
            Image={RedImage}
            Name="مجموع دارایی رنگ قرمز"
            Value={player?.wallet?.red}
          />

          <Label
            Image={YellowImage}
            Name="مجموع دارایی رنگ زرد"
            Value={player?.wallet?.yellow}
          />

          <Label
            Image={SatisfactionImage}
            Name="مجموع دارایی رضایت"
            Value={player?.wallet?.satisfaction}
          />
        </InfoSection>

        <InfoSection style={{ borderRight: "1px solid #333" }}>
          <Info>
            <p>تاریخ ورود</p>
            <p>{player?.registered_at}</p>
          </Info>

          <ProgressLevel
            percent={`${player?.score_percentage_to_next_level}%`}
          />

          <EstateContainer>
            <Estate>
              <img src={RedHouseImage} alt="" width={48} />
              <p>{player?.features?.tejari ? player?.features?.tejari : 0}</p>
            </Estate>

            <Estate>
              <img src={YellowHouseImage} alt="" width={48} />
              <p>{player?.features?.maskoni ? player?.features?.maskoni : 0}</p>
            </Estate>

            <Estate>
              <img src={BlueHouseImage} alt="" width={48} />
              <p>
                {player?.features?.amoozeshi ? player?.features?.amoozeshi : 0}
              </p>
            </Estate>
          </EstateContainer>

          <Label
            Image={FollowingImage}
            Name="دنبال کننده"
            Value={player?.followers}
          />

          <Label
            Image={FollowersImage}
            Name="دنبال شونده"
            Value={player?.following}
          />

          <NoteContainer>
            <img
              src={CommentImage}
              alt=""
              width={32}
              className="cursor-pointer"
            />
            <Note placeholder="یاداشتی بنویسید..." />
          </NoteContainer>
        </InfoSection>
      </Container>
    </>
  );
}
