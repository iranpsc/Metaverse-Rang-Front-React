import React from "react";
import YellowIcon from "../../Assets/images/yellow.png"
import YellowMp4 from '../../Assets/Videos/yellow.mp4';
export default function YellowTutorial({ nextPageHandler }) {
    return(
     <div id="t6" className="hidden-box-3">
  <div className=" bakhsh-3 ">
    <video className="json-class-3" src={YellowMp4} autoPlay loop />
    <div className="text-welcome ">
      رنگ زرد
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        یک شاخص داخلی برای خرید زمین مجازی کاربری مراکز مسکونی است
      </div>
      <div className="page-box-color ">
        رنگ قرمز شاخص خرید زمین در بافت مسکونی میباشد <br /><br /> زمین هایی که توسط سرور برای عرضه آزاد میشود در
        صورتی که به رنگ زرد باشد شما میتوانید با این موجودی صاحب ملک مجازی شوید
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
          <img src={YellowIcon} className="img-class-1" alt=""/>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}