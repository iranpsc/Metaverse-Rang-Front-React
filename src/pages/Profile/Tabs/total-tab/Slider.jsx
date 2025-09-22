import "swiper/css";
import "swiper/css/pagination";
import "../../../../styles/styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import { LuImageMinus, LuImagePlus } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";

import { TiWarningOutline } from "react-icons/ti";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import DefaultProfile from "../../../../assets/images/defulte-profile.png";
import shortid from "shortid";

const IconWrapper = styled.div`
  width: 34px;
  height: 34px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    display: none;
  }
  svg {
    font-size: 20px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  position: absolute;
  right: 10px;
  bottom: 55px;
  height: 100%;
  width: fit-content;
  @media (min-width: 740px) {
    bottom: 10px;
  }
  @media (min-width: 840px) {
    bottom: 30px;
  }
  @media (min-width: 1024px) {
    bottom: 10px;
  }
`;

export default function Slider() {
  const [profileImage, setProfileImage] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const defaultImage = { id: 0, url: DefaultProfile };

  useEffect(() => {
    Request("profilePhotos").then((response) => {
      const images = response?.data?.data.reverse();
      if (images.length === 0) {
        setProfileImage([defaultImage]);
      } else {
        setProfileImage(images);
      }
    });
  }, []);

  const deleteProfileImage = (id) => {
    if (id === 0) return;
    Request(`profilePhotos/${id}`, HTTP_METHOD.DELETE).then(() => {
      const updatedImages = profileImage.filter((image) => image.id !== id);
      if (updatedImages.length === 0) {
        setProfileImage([defaultImage]);
      } else {
        setProfileImage(updatedImages);
      }
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", new File([file], `${shortid.generate()}.jpeg`));

      Request("profilePhotos", HTTP_METHOD.POST, formData, {
        "Content-Type": "multipart/form-data",
      })
        .then((response) => {
          const newImage = {
            id: response.data.id,
            url: URL.createObjectURL(file),
          };
          setProfileImage((prevImages) => [
            ...prevImages.filter((image) => image.id !== 0),
            newImage,
          ]);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {profileImage.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt="image" />
            <Icons>
              <IconWrapper onClick={() => deleteProfileImage(image.id)}>
                <LuImageMinus />
              </IconWrapper>
              <IconWrapper>
                <label htmlFor="add">
                  <LuImagePlus />
                </label>
                <input
                  onChange={handleImageChange}
                  id="add"
                  type="file"
                  accept="image/*"
                />
              </IconWrapper>
              <IconWrapper>
                <TiWarningOutline />
              </IconWrapper>
            </Icons>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
