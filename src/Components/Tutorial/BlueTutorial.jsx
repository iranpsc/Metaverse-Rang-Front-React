import React from "react";
import BlueIcon from "../../Assets/images/blue.png"
import BlueMp4 from '../../Assets/Videos/blue.mp4';
export default function BlueTutorial({ nextPageHandler }) {
    return(
      <div id="t4" className="hidden-box-2">
  <div className=" bakhsh-3 ">
    <video className="json-class-3" src={BlueMp4} autoPlay loop />
    <div className="text-welcome">
      رنگ آبی
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        یک شاخص داخلی برای خرید زمین مجازی کاربری مراکز آموزشی است
      </div>
      <div className="page-box-color ">
        رنگ آبی شاخص خرید زمین های موجود در بافت خدماتی میباشد
        <br /><br />
        زمین هایی که توسط سرور برای عرضه آزاد میشود در صورتی که به رنگ آبی باشد شما میتوانید با این موجودی صاحب
        ملک مجازی شوید
      </div>
    </div>
    <div className="container-btn">
      <button onClick={() => nextPageHandler()}  className="btn-color">بزن
        بریم</button>
    </div>
  </div>
  <div className="class-arrows">
  </div> 
  <div className="tw-box-value ">
    <div className="tw_box_value_container">
      <div className="tw_box_shadow">
        <samp className="text-inside-box">200M </samp>
        <div className="icon-class-1 ">
          <img src={BlueIcon} className="img-class-1" alt=""/>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}