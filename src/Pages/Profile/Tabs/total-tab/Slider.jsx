import "swiper/css";
import "swiper/css/pagination";
import "../../../../styles/styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import { LuImageMinus, LuImagePlus } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";

import { TiWarningOutline } from "react-icons/ti";
import slidePic from "../../../../Assets/images/slide.png";
import styled from "styled-components";
import { useState } from "react";

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
    color: white;
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
const slides = [
  { id: 1, image: slidePic },
  { id: 2, image: slidePic },
  { id: 3, image: slidePic },
  { id: 4, image: slidePic },
  { id: 5, image: slidePic },
  { id: 6, image: slidePic },
];
export default function Slider() {
  const [images, setImages] = useState(slides);
  const removeHandler = (id) => {
    const indexToRemove = images.findIndex((image) => image.id === id);
    if (indexToRemove !== -1) {
      const slidesAfterRemove = images.filter((image) => image.id !== id);
      setImages(slidesAfterRemove);
    }
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
        setImages(updatedImages);
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
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.image} alt="image" />
            <Icons>
              <IconWrapper onClick={() => removeHandler(image.id)}>
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
