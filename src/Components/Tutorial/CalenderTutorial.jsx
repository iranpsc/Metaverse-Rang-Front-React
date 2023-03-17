import React from "react";
import CalenderIcon from "./../../Assets/images/date.png"
import CalendarMp4 from '../../Assets/Videos/Calendar.mp4';
 export default function CalenderTutorial({ nextPageHandler }) {
    return(
       
      <div id="t8" className="hidden-box-4">
  <div className="bakhsh-7">
    <video className="json-class-3" src={CalendarMp4} autoPlay loop />
    <div className="text-welcome">
      تقویم
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        زمان بندی چالش ها و بروز رسانی ها و آزاد سازی مناطق
      </div>
      <div className="page-box-color ">
        نمایش فاز های اجرایی پروژه متاورس رنگ را میتوانید از بخش تقویم مشاهده کنید
        <br /><br />
        زمانبندی و هدف دهی ساختار های نمایش . توسعه و بروزرسانی ها در بخش تقویم نمایش داده میشود
      </div>
    </div>
    <div className="container-btn">
      <button onClick={() => nextPageHandler()} className="btn-color">بزن
        بریم</button>
    </div>
  </div>
  <div className="class-arrows-1">
  </div>
  <div className="img-circle">
    <div className="tw-box-icons">
      <img src={CalenderIcon} className="tw-img-icons-tutorial " alt=""/>
    </div>
  </div>
</div>


    )
}