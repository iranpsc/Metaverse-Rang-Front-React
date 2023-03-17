import React from "react";
import IrrIcon from "../../Assets/images/coin-irr.png"
import IrrMp4 from '../../Assets/Videos/rial.mp4';
export default function RialTutorial({ nextPageHandler }) {
  return(
    <div id="t3" className="hidden-box-1">
  <div className="bakhsh-2">
    <video className="json-class-3" src={IrrMp4} autoPlay loop />
    <div className="text-welcome">
      ارز دیجیتال ریال
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        یک شاخص عرضه و تبادل محصولات داخلی شما به جهت خارج کردن ارز از متاورس رنگ
      </div>
      <div className="page-box-color ">
        جهت فروش محصولات خود میتوانید با ارز هایی که خارج از این دنیای مجازی قابل عرضه است اقدام به قیمت گذاری
        محصولات کنید
        <br /><br />
        محصولات شما میتواند به سادگی با تبادل و فروش مستقیم در چرخه اختصادی خارج از متاورس قرار گیرد
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
          <img src={IrrIcon} className="img-class-1" alt=""/>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}