import React from "react";
import PingMp4 from "../../assets/Videos/ping.mp4";
export default function PingTutorial({ nextPageHandler }) {
  return (
    <div id="t11" className="hidden-box-16">
      <div className="bakhsh-7">
        <video className="json-class-3" src={PingMp4} autoPlay loop />
        <div className="text-welcome">پینگ</div>
        <div className="container-text-Education">
          <div className="Education-text">
            سرعت پاسخ سرور نسبت به اینترنت شما
          </div>
          <div className="page-box-color ">
            پینگ یک متغیر عددی است و نشانگر سرعت پاسخ دهی سرور به موقعیت مکانی و
            اینترنت شماست
            <br />
            <br />
            شاخص پینگ برای ورود به دنیای سه بعدی متاورس بسیار حائز اهمیت است
            <br />
            رنگ سبز خوب , نارنجی متوسط , قرمز ضعیف
          </div>
        </div>
        <div className="container-btn">
          <button onClick={() => nextPageHandler()} className="btn-color">
            بزن بریم
          </button>
        </div>
      </div>
      <div className="class-arrows-ping"></div>
      <div className="img-circle">
        <div className="tw-box-icons">
          <div className="tw-ping-box">12</div>
        </div>
      </div>
    </div>
  );
}
