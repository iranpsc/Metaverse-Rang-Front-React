import "keen-slider/keen-slider.min.css";
import "../../../../styles/styles.css";

import { useKeenSlider } from "keen-slider/react";

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
const VideoSlider = ({ data }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      breakpoints: {
        "(max-width: 1500px)": {
          slides: { perView: 5, spacing: 10 },
        },
      },
      initial: 0,
      slides: {
        perView: 3,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider top"
        style={{ height: "8%", marginBottom: "10px" }}
      >
        {data[0].videos.map((video) =>
          video.id !== 1 ? (
            <img
              width={450}
              loading="lazy"
              height={200}
              alt={video}
              src={video.video}
              key={video.id}
              className="keen-slider__slide"
              style={{ borderRadius: "10px", cursor: "pointer" }}
            />
          ) : (
            <video
              width={450}
              height={200}
              alt={video}
              key={video.id}
              className="keen-slider__slide"
              style={{
                borderRadius: "10px",
                cursor: "pointer",
                objectFit: "cover",
              }}
              controls
            >
              <source
                src={video.video}
                type="video/mp4"
                style={{ height: "100%" }}
              />{" "}
            </video>
          )
        )}
      </div>

      <div ref={thumbnailRef} className="keen-slider video-thumbnail">
        {data[0].videos.map((video) =>
          video.id !== 1 ? (
            <img
              width={144}
              loading="lazy"
              height={100}
              alt={video}
              src={video.video}
              key={video.id}
              className="keen-slider__slide"
              style={{ borderRadius: "10px", cursor: "pointer",paddingBottom:"20px", }}
            />
          ) : (
            <video
              width={144}
              height={100}
              alt={video}
              key={video.id}
              className="keen-slider__slide"
              style={{
                borderRadius: "10px",
                cursor: "pointer",
                objectFit: "cover",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
              // controls
            >
              <source
                src={video.video}
                type="video/mp4"
                style={{ height: "100%" }}
              />{" "}
            </video>
          )
        )}
      </div>
    </>
  );
};

export default VideoSlider;
