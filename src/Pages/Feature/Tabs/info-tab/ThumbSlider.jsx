import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import styled from "styled-components";
import { useCallback } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 7ms ease-in-out;
  scroll-behavior: smooth;
  gap: 15px;
  overflow-y: auto;
  border-radius: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    border-radius: 10px;
    height: 30% !important;
  }
`;

const Buttons = styled.div`
  button {
    background-color: #3b3b3b;
    position: absolute;
    color: #949494;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 40px;
    height: 40px;
    right: 10%;
    cursor: pointer;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      bottom: 0;
    }
    svg {
      font-size: 40px;
    }
  }
`;

const ThumbSlider = ({
  images,
  nextImage,
  prevImage,
  setActiveImage,
  thumbListRef,
  handleTouchStart,
  handleTouchEnd,
}) => {
  const handleProductSlide = useCallback((slide) => {
    setActiveImage(slide);
  }, []);
  return (
    <Wrapper
      ref={thumbListRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Buttons>
        <button onClick={prevImage}>
          <RiArrowUpSLine />
        </button>
        <button onClick={nextImage}>
          <RiArrowDownSLine />
        </button>
      </Buttons>
      {images.map((slide) => (
        <img
          src={slide.image}
          alt={slide.image}
          key={slide.id}
          onClick={() => handleProductSlide(slide)}
          loading="lazy"
        />
      ))}
    </Wrapper>
  );
};

export default ThumbSlider;
