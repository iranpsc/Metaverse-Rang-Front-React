import "swiper/css";
import "swiper/css/pagination";
import "../../../../styles/styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import { LuImageMinus, LuImagePlus } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";

import { TiWarningOutline } from "react-icons/ti";
import slidePic from "../../../../Assets/images/slide.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";

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

  useEffect(() => {
    Request("profilePhotos").then((response) => {
      setProfileImage(response?.data?.data.reverse());
    });
  }, []);

  const deleteProfileImage = (id) => {
    Request(`profilePhotos/${id}`, HTTP_METHOD.DELETE).then(() => {
      setProfileImage(profileImage.filter((image) => image.id !== id));
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const newImage = {
          id: images.length + 1,
          image: event.target.result,
        };

        const updatedImages = [...images];
        updatedImages.push(newImage);
        setProfileImage(updatedImages);
      };

      reader.readAsDataURL(file);
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
