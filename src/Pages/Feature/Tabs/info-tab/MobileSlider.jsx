import { useCallback, useRef, useState } from "react";

import MainSlider from "./MainSlider";
import ThumbSlider from "./ThumbSlider";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
  bottom: 5%;
  width: 85%;
  display: grid;
  gap: 14px;
  overflow: hidden;
  grid-template-columns: 6fr 2fr;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const MobileSlider = ({ images, deleteHandler, activeImage, setActiveImage }) => {
  const thumbListRef = useRef();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prevImage = useCallback(() => {
    thumbListRef.current.scrollTop -= 100;
  }, []);

  const nextImage = useCallback(() => {
    thumbListRef.current.scrollTop += 110;
  }, []);

  const handleScroll = useCallback(() => {
    if (touchEnd - touchStart > 0) {
      prevImage();
    } else if (touchEnd - touchStart < 0) {
      nextImage();
    }
  }, [nextImage, prevImage, touchEnd, touchStart]);
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientY);
    handleScroll();
  };

  return (
    <Wrapper>
      <MainSlider
        activeImage={activeImage}
        images={images}
        deleteHandler={deleteHandler}
      />
      <ThumbSlider
        nextImage={nextImage}
        prevImage={prevImage}
        images={images}
        thumbListRef={thumbListRef}
        handleTouchStart={handleTouchStart}
        handleTouchEnd={handleTouchEnd}
        setActiveImage={setActiveImage}
      />
    </Wrapper>
  );
};

export default MobileSlider;
