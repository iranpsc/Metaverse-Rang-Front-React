import React from "react";
import SatisfactionIcon from "../../assets/images/satisfaction.png";
import SatisfactionMp4 from "../../assets/Videos/satisfaction.mp4";
export default function SatisfactionTutorial({ nextPageHandler }) {
  return (
    <div id="t7" className="hidden-box-7">
      <div className=" bakhsh-3 ">
        <video className="json-class-3" src={SatisfactionMp4} autoPlay loop />
        <div className="text-welcome">رضایت</div>
        <div className="container-text-Education">
          <div className="Education-text">یک شاخص داخلی برای توسعه</div>
          <div className="page-box-color ">
            رضایت بخشی از هدفی بزرگ است که برای ساخت و ساز و توسعه متاورس رنگ
            استفاده خواهد شد
            <br />
            <br />
            کسب رضایت روش ها و سبک های مختلفی دارد و میتوانید آموزش ها رو مشاهده
            کنید
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
              <img src={SatisfactionIcon} className="img-class-1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
