/* eslint-disable react/prop-types */

import "keen-slider/keen-slider.min.css";
import "../../../../styles/styles.css";

import { HiOutlineTrash } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ImageWrapper = styled.div`
  position: relative;
  max-width: 900px;
  height: 100%;
`;

const Actions = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  &:nth-of-type(2) {
    margin-top: 5px;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
    color: black;
  }
`;

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function SwiperSlider({ images, deleteHandler }) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      breakpoints: {
        "(min-width: 460px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 768px)": {
          slides: { perView: 4, spacing: 10 },
        },
        "(min-width: 998px)": {
          slides: { perView: 5, spacing: 15 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 6, spacing: 15 },
        },
      },
      slides: { perView: 2, spacing: 10 },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="slider-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {images.map((item) => (
          <div key={item.id} className="keen-slider__slide number-slide1">
            <ImageWrapper>
              <img src={item.url} alt="slide" loading="lazy" />
              <Actions>
                <IconWrapper onClick={() => deleteHandler(item.id)}>
                  <HiOutlineTrash />
                </IconWrapper>
                <IconWrapper>
                  <IoWarningOutline />
                </IconWrapper>
              </Actions>
            </ImageWrapper>
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {images.map((item) => (
          <div key={item.id} className="keen-slider__slide number-slide2">
            <img src={item.url} alt="slide" loading="lazy" />
          </div>
        ))}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
