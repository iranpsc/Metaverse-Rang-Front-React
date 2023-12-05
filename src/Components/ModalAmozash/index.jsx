import "./index.css";
import Draggable from "react-draggable";

import React, { useEffect, useRef, useState } from "react";
import Exit from "../../Assets/images/exit.png";
import Minimize from "../../Assets/images/minimize.png";
import Report from "../../Assets/images/report.png";
import Eye from "../../Assets/images/Eye.png";
import Dislike from "../../Assets/images/dislike.png";
import Like from "../../Assets/images/like.png";
import Teacher from "../../Assets/images/teacher.png";
import useRequest from "../../Services/Hooks/useRequest";
import { ToastError } from "../../Services/Utility";
import { Rnd } from "react-rnd";
import { useNavigate } from "react-router-dom";
export default function Amozesh({
  title,
  description,
  creator,
  video,
  setShowModal,
  dislikes,
  views,
  likes,
  id,
}) {
  const videoRef = useRef();
  const { Request, HTTP_METHOD } = useRequest();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [minimized, setMinimized] = useState(false);
  const navigation = useNavigate();

  const handleLike = async () => {
    try {
      if (!isLiked && !isDisliked) {
        // If not liked or disliked before, send a like request
        await Request(`tutorials/like/${id}`, HTTP_METHOD.POST);
        setLikeCount(likeCount + 1);
        setIsLiked(true);
      } else if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
      // If disliked before, do nothing
    } catch (error) {
      ToastError("خطا در ارسال درخواست به سرور برای لایک:");
    }
  };

  const handleDislike = async () => {
    try {
      if (!isLiked && !isDisliked) {
        // If not liked or disliked before, send a dislike request
        await Request(`tutorials/dislike/${id}`, HTTP_METHOD.POST);
        setDislikeCount(dislikeCount + 1);
        setIsDisliked(true);
      } else if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
      // If liked before, do nothing
    } catch (error) {
      ToastError("خطا در ارسال درخواست به سرور برای دیسلایک:");
    }
  };
  useEffect(() => {
    videoRef.current?.load();
  }, [video]);
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      style={{
        zIndex: 1500,
        cursor:
          "default                                                                                                                                                                                                                                                                                                                                                                   ",
      }}
    >
      <div className="tw-modal-container" dir="rtl">
        <div className="tw-header">
          <div className="header-top">
            <div className="tw-header-icon">
              <img
                src={Exit}
                alt=""
                className="tw-drop-shaow tw-w-100 cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="tw-header-icon cursor-pointer">
              <img
                src={Minimize}
                alt=""
                className="tw-drop-shaow tw-w-100"
                onClick={() => setMinimized(!minimized)}
              />
            </div>
            <div className="text-header">
              <p className="header-p">آموزش</p>
            </div>
            <div className="tw-header-icon cursor-pointer">
              <img
                src={Report}
                alt=""
                className="tw-drop-shaow"
                onClick={() =>
                  navigation("/metaverse/report", {
                    state: {
                      href: window.location.href.split("/").slice(3).join("/"),
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
        {/* container main */}
        <div className="container-main">
          <div className="container-video-div">
            <video width="100%" height="50%" controls ref={videoRef}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          {!minimized && (
            <div className="container-inside-main">
              <div className="container-div-p">
                <p className="p-bold">{title}</p>
                <p
                  className="para-class"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>

              <div className="container-icons">
                <div className="position-icons">
                  <div>
                    <span className="span-number-icons">{views}</span>
                  </div>
                  <div className="width-icons">
                    <img src={Eye} className="tw-w-100" alt="" />
                  </div>
                </div>
                <div className="position-icons">
                  <div>
                    <span className="span-number-icons">{dislikeCount}</span>
                  </div>
                  <div className="width-icons">
                    <img
                      src={Dislike}
                      className="tw-w-100"
                      alt=""
                      onClick={handleDislike}
                    />
                  </div>
                </div>
                <div className="position-icons">
                  <div>
                    <span className="span-number-icons">{likeCount}</span>
                  </div>
                  <div className="width-icons">
                    <img
                      src={Like}
                      className="tw-w-100"
                      alt=""
                      onClick={handleLike}
                    />
                  </div>
                </div>
                <div className="position-icons-2">
                  <div>
                    <span
                      className="span-icon-HM"
                      onClick={() =>
                        window.open(
                          `https://rgb.irpsc.com/fa/citizen/${creator}`,
                          "_blank"
                        )
                      }
                    >
                      {creator}
                    </span>
                  </div>
                  <div className="width-icons">
                    <img src={Teacher} className="tw-w-100" alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Rnd>
  );
}
