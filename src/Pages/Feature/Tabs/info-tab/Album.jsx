import { HiOutlineTrash } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";
import Slider from "./Slider";

import slide1 from "../../../../Assets/images/test/slide1.png";
import slide2 from "../../../../Assets/images/test/slide2.png";
import slide3 from "../../../../Assets/images/test/slide3.png";
import slide4 from "../../../../Assets/images/test/slide4.png";
import slide5 from "../../../../Assets/images/test/slide5.png";
import slide6 from "../../../../Assets/images/test/slide6.png";
import styled from "styled-components";
import { useState } from "react";

const images_array = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 },
  { id: 5, image: slide5 },
  { id: 6, image: slide6 },
  { id: 7, image: slide4 },
];

const AlbumWrapper = styled.div`
  direction: rtl;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 0 0 0 20px;
  overflow-y: auto;
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) and (min-height: 600px) {
    gap: 19px;
  }
  @media (max-width: 1024px) and (max-height: 600px) {
    gap: 18px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const UploadMore = styled.div`
  width: 100%;
  height: 150px;
  border: 2px dashed #454545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  border-radius: 10px;
  color: #dedee9;
  position: relative;
  flex-grow: 1;
  span {
    font-size: 60px;
  }
  input {
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
  }
  @media (min-width: 390px) {
    height: 146px !important;
  }
  @media (min-width: 1024px) {
    height: 137px !important;
  }
  @media (min-width: 1180px) {
    height: 155px !important;
  }
  @media (min-width: 1500px) {
    height: 188px !important;
  }
  @media (min-width: 2500px) {
    height: 27vh !important;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  @media (min-width: 390px) {
    height: 149px;
  }
  @media (min-width: 1024px) {
    height: 144px;
  }
  @media (min-width: 1180px) {
    height: 160px;
  }
  @media (min-width: 1500px) {
    height: 190px;
    &:hover img {
      transform: scale(1.1);
    }
  }
  @media (min-width: 2500px) {
    height: 28vh !important;
  }
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    transition: transform 0.3s ease-in-out;
  }
`;

const Actions = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  &:nth-of-type(2) {
    margin-top: 3px;
  }
  svg {
    font-size: 17px;
    cursor: pointer;
  }
  @media (min-width: 998px) {
    width: 30px;
    height: 30px;
    &:nth-of-type(2) {
      margin-top: 8px;
    }
    svg {
      font-size: 20px !important;
    }
  }
`;

const Album = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(images_array);
  const [activeImage, setActiveImage] = useState(images[0]);
  const deleteHandler = (id) => {
    const filteredImages = images.filter((item) => item.id !== id);
    setImages(filteredImages);
    if (activeImage.id !== 1) {
      setActiveImage(images[0]);
    } else {
      setActiveImage(images[images.length - 1]);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (upload) => {
      const image = upload.target.result;
      const newImage = { id: images.length + 1, image: image };
      setImages([...images, newImage]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <AlbumWrapper>
        {images.map((item) => (
          <ImageWrapper key={item.id}>
            <img
              onClick={() => setOpen(true)}
              src={item.image}
              alt={item.image}
              loading="lazy"
            />
            <Actions>
              <IconWrapper onClick={() => deleteHandler(item.id)}>
                <HiOutlineTrash />
              </IconWrapper>
              <IconWrapper>
                <IoWarningOutline />
              </IconWrapper>
            </Actions>
          </ImageWrapper>
        ))}
        <UploadMore>
          <span>+</span>
          <input type="file" onChange={handleImageUpload} />
        </UploadMore>
      </AlbumWrapper>
      {open && (
        <Slider
          deleteHandler={deleteHandler}
          images={images}
          setOpen={setOpen}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}
    </div>
  );
};

export default Album;
