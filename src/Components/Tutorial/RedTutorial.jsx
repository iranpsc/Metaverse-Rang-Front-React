import React from "react";
import RedIcon from "../../assets/images/red.png";
import RedMp4 from "../../assets/Videos/red.mp4";
export default function RedTutorial({ nextPageHandler }) {
  return (
    <div id="t5" className="hidden-box-8">
      <div className=" bakhsh-3 ">
        <video className="json-class-3" src={RedMp4} autoPlay loop />
        <div className="text-welcome ">رنگ قرمز</div>
        <div className="container-text-Education">
          <div className="Education-text">
            یک شاخص داخلی برای خرید VOD مجازی کاربری مراکز تجاری است
          </div>
          <div className="page-box-color ">
            رنگ قرمز شاخص خرید VOD در بافت تجاری میباشد <br />
            <br /> VOD هایی که توسط سرور برای عرضه آزاد میشود در صورتی که به رنگ
            rقرمز باشد شما میتوانید با این موجودی صاحب ملک مجازی شوید
          </div>
        </div>
        <div className="container-btn">
          <button onClick={() => nextPageHandler()} className="btn-color">
            بزن بریم
          </button>
        </div>
      </div>
      <div className="class-arrows"></div>
      <div className="tw-box-value ">
        <div className="tw_box_value_container">
          <div className="tw_box_shadow">
            <samp className="text-inside-box">200M </samp>
            <div className="icon-class-1 ">
              <img src={RedIcon} className="img-class-1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
