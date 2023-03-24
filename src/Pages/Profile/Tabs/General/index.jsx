import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import useRequest from "../../../../Services/Hooks/useRequest";

import PSCImage from "../../../../Assets/images/coin-psc.png";
import IRRImage from "../../../../Assets/images/coin-irr.png";
import BlueImage from "../../../../Assets/images/blue.png";
import YellowImage from "../../../../Assets/images/yellow.png";
import RedImage from "../../../../Assets/images/red.png";
import SatisfactionImage from "../../../../Assets/images/satisfaction.png";
import YellowHouseImage from "../../../../Assets/images/yellowHouse.png";
import RedHouseImage from "../../../../Assets/images/redHouse.png";
import BlueHouseImage from "../../../../Assets/images/blueHouse.png";
import FollowingImage from "../../../../Assets/images/users.png";
import FollowersImage from "../../../../Assets/images/new-follow.png";
import CommentImage from "../../../../Assets/images/comment.png";
import AnonymousImage from "../../../../Assets/images/anonymous.png";
import DeletesImage from "../../../../Assets/images/cross.png";
import CameraImage from "../../../../Assets/images/camera.png";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

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
  text-align: right;
  direction: rtl;
  outline: none;
  border: 2px solid #707070 !important;
  border-radius: 8px;
  padding: 4px;
  font-family: iransans;
`;

const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteProfile = styled.img`
  width: 32px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const UploadProfile = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  background: transparent;
  right: 10px;
  bottom: 10px;
`;

export default function General() {
  const [user, setUser] = useState({});
  const [assets, setAssets] = useState({});
  const [profileImage, setProfileImage] = useState([]);
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    Request("user/wallet").then((response) => {
      setAssets(response.data.data);
    });

    Request("user/profile").then((response) => {
      setUser(response.data.data);
    });

    Request("profilePhotos").then((response) => {
      setProfileImage(response?.data?.data.reverse());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteProfileImage = (id) => {
    Request(`profilePhotos/${id}`, HTTP_METHOD.DELETE).then(() => {
      setProfileImage(profileImage.filter((image) => image.id !== id));
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
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper cursor-pointer "
            style={{height:"100%"}}
          >
            {profileImage.length > 0 ? (
              profileImage.map((image) => (
                <SwiperSlide key={image.id} className='h-fit'>
                  <img
                    style={{ borderRadius: "10px" }}
                    src={image.url}
                    width={150}
                    height={150}
                    alt=""
                  />
                  <DeleteProfile
                    src={DeletesImage}
                    onClick={() => deleteProfileImage(image.id)}
                  />
                  <UploadProfile
                    src={CameraImage}
                    onClick={() => Navigate("/metaverse/upload/avatar")}
                  />
                </SwiperSlide>
              ))
            ) : (
              <>
                <img
                  style={{ borderRadius: "10px" }}
                  src={AnonymousImage}
                  width={150}
                  alt=""
                />
                <UploadProfile
                  src={CameraImage}
                  onClick={() => Navigate("/metaverse/upload/avatar")}
                />
              </>
            )}
          </Swiper>
        </ProfileSection>

        <InfoSection>
          <Info>
            <p>{user?.name}</p>
            <p className="link">{user?.code}</p>
          </Info>

          <Label Image={PSCImage} Name="PSC مجموع دارایی" Value={assets?.psc} />

          <Label
            Image={IRRImage}
            Name="مجموع دارایی ریال"
            Value={assets?.irr}
          />

          <Label
            Image={BlueImage}
            Name="مجموع دارایی رنگ آبی"
            Value={assets?.blue}
          />

          <Label
            Image={RedImage}
            Name="مجموع دارایی رنگ قرمز"
            Value={assets?.red}
          />

          <Label
            Image={YellowImage}
            Name="مجموع دارایی رنگ زرد"
            Value={assets?.yellow}
          />

          <Label
            Image={SatisfactionImage}
            Name="مجموع دارایی رضایت"
            Value={assets?.satisfaction}
          />
        </InfoSection>

        <InfoSection style={{ borderRight: "1px solid #333" }}>
          <Info>
            <p>تاریخ ورود</p>
            <p>{user?.registered_at}</p>
          </Info>

          <ProgressLevel percent={`${user?.score_percentage_to_next_level}%`} />

          <EstateContainer>
            <Estate>
              <img src={RedHouseImage} alt="" width={48} />
              <p>{user?.features?.tejari ? user?.features?.tejari : 0}</p>
            </Estate>

            <Estate>
              <img src={YellowHouseImage} alt="" width={48} />
              <p>{user?.features?.maskoni ? user?.features?.maskoni : 0}</p>
            </Estate>

            <Estate>
              <img src={BlueHouseImage} alt="" width={48} />
              <p>{user?.features?.amoozeshi ? user?.features?.amoozeshi : 0}</p>
            </Estate>
          </EstateContainer>

          <Label
            Image={FollowingImage}
            Name="دنبال کننده"
            Value={user?.followers}
          />

          <Label
            Image={FollowersImage}
            Name="دنبال شونده"
            Value={user?.following}
          />
        </InfoSection>
      </Container>
    </>
  );
}
