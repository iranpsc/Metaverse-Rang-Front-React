import "swiper/css";
import "swiper/css/pagination";
import "../../../../styles/styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import { LuImagePlus } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import DOMPurify from "dompurify";

import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import DefaultProfile from "../../../../assets/images/defulte-profile.png";
import shortid from "shortid";
import { Skeleton } from "../../../../components/Skeleton";

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
  z-index: 1;
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

const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-pagination-bullet {
    background-color: white;
    opacity: 0.5;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: white;
  }
`;

export default function Slider() {
  const [profileImage, setProfileImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Request, HTTP_METHOD } = useRequest();
  const defaultImage = { id: 0, url: DefaultProfile };

  useEffect(() => {
    setLoading(true);
    Request("profilePhotos")
      .then((response) => {
        const images = response?.data?.data;
        if (images && images.length > 0) {
          const reversedImages = [...images].reverse();
          setProfileImage(reversedImages);
        } else {
          setProfileImage([defaultImage]);
        }
      })
      .catch((error) => {
        console.error("Error loading profile photos:", error);
        setProfileImage([defaultImage]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteProfileImage = (id) => {
    if (id === 0) return;
    Request(`profilePhotos/${id}`, HTTP_METHOD.DELETE)
      .then(() => {
        const updatedImages = profileImage.filter((image) => image.id !== id);
        if (updatedImages.length === 0) {
          setProfileImage([defaultImage]);
        } else {
          setProfileImage(updatedImages);
        }
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
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

  if (loading) {
    return (
      <SkeletonContainer>
        <Skeleton width="100%" height="100%" radius="10px" />
      </SkeletonContainer>
    );
  }

  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {profileImage.map((image) => (
          <SwiperSlide key={image.id}>
            <img 
              src={DOMPurify.sanitize(image.url)} 
              alt="profile" 
              onError={(e) => {
                e.target.src = DefaultProfile;
              }}
            />
          </SwiperSlide>
        ))}

        <Icons>
          <IconWrapper onClick={() => deleteProfileImage(profileImage[0]?.id)}>
            <HiOutlineTrash />
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
        </Icons>
      </Swiper>
    </SwiperContainer>
  );
}