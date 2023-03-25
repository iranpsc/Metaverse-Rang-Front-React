import "./index.css";
import Draggable from "react-draggable";
import React from "react";

import Exit from "../../Assets/images/exit.png";
import Minimize from "../../Assets/images/minimize.png";
import Back from "../../Assets/images/back-arow.png";
import Eye from "../../Assets/images/Eye.png";
import Dislike from "../../Assets/images/dislike.png";
import Like from "../../Assets/images/like.png";
import Teacher from "../../Assets/images/teacher.png";
export default function Amozesh({ title, description, creator, video }) {
  const clientWidth = document.documentElement.clientWidth / 2.7;
  const clientHeight = document.documentElement.clientHeight / 9.5;

  const bounds = {
    right: clientWidth,
    bottom: clientHeight,
    left: -clientWidth,
    top: -clientHeight - 60,
  };

  return (
    <Draggable bounds={bounds}>
      <div className="tw-modal-container" dir="rtl">
        <div className="tw-header">
          <div className="header-top">
            <div className="tw-header-icon">
              <img src={Exit} alt="" className="tw-drop-shaow tw-w-100" />
            </div>
            <div className="tw-header-icon">
              <img src={Minimize} alt="" className="tw-drop-shaow tw-w-100" />
            </div>
            <div className="text-header">
              <p className="header-p">آموزش</p>
            </div>
            <div className="tw-header-icon">
              <img src={Back} alt="" className="tw-drop-shaow" />
            </div>
          </div>
        </div>
        {/* container main */}
        <div className="container-main">
          <div className="container-video-div">
            <video width="100%" height="50%" controls>
              <source
                src="/video/d6312f14ab0866b4f21f4eb7829543a529287192-720p.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="container-inside-main">
            <div className="container-div-p">
              <p className="p-bold">
                {title}
              </p>
            </div>
            <div className="container-div-p">
              <div>
                <p className="para-class">
                  زمین های مسکونی دارای ویژگی های خاصی میباشد که شامل حال زمین
                  های تجاری و آموزشی نخواهد بود و از دیگر فوائد زمین های مسکونی
                  میتوان به قابلیت تاسیس سلسله پرداخت ما در این اخبار به قابلیت
                  های دیگر زمین های مسکونی میپردازیم و شما میتوانید با زدن گزینه
                  مطالعه بیشتر ما را همراهی کنید.
                </p>
              </div>
            </div>

            <div className="container-icons">
              <div className="position-icons">
                <div>
                  <span className="span-number-icons">195623</span>
                </div>
                <div className="width-icons">
                  <img src={Eye} className="tw-w-100" alt="" />
                </div>
              </div>
              <div className="position-icons">
                <div>
                  <span className="span-number-icons">23</span>
                </div>
                <div className="width-icons">
                  <img src={Dislike} className="tw-w-100" alt="" />
                </div>
              </div>
              <div className="position-icons">
                <div>
                  <span className="span-number-icons">365</span>
                </div>
                <div className="width-icons">
                  <img src={Like} className="tw-w-100" alt="" />
                </div>
              </div>
              <div className="position-icons-2">
                <div>
                  <span className="span-icon-HM">HM-2000001</span>
                </div>
                <div className="width-icons">
                  <img src={Teacher} className="tw-w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
