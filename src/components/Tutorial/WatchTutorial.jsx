import React from "react";
import TimeMp4 from "../../assets/Videos/time.mp4";
export default function WatchTutorial({ nextPageHandler }) {
  return (
    <div id="t12" className="hidden-box-9">
      <div className="bakhsh-7">
        <video className="json-class-3" src={TimeMp4} autoPlay loop />
        <div className="text-welcome">زمان سرور</div>
        <div className="container-text-Education">
          <div className="Education-text">
            ساعت تنظیم شده سرور شاخص اطلاعیه ها میباشد
          </div>
          <div className="page-box-color ">
            ساعت مرکزی سرور در تمام ایران یکسان است و این شاخص بذای چالش ها و
            مسابقات در نظر گرفته شده است و شما طبق اطلاعیه میتوانبد سر ساعت مقرر
            حضور داشته باشد
          </div>
        </div>
        <div className="container-btn">
          <button onClick={() => nextPageHandler()} className="btn-color">
            بزن بریم
          </button>
        </div>
      </div>
      <div className="class-arrows-2"></div>
      <div className="img-circle">
        <div className="tw-box-icons">
          <div className="tw-watch-box">12:00:15</div>
        </div>
      </div>
    </div>
  );
}
