import React from 'react'
import PscIcon from "../../Assets/images/coin-psc.png"
import PscMp4 from '../../Assets/Videos/psc.mp4';
export default function PscTutorial({ nextPageHandler }) {
  return (
 <div id="t2" className="hidden-box">
  <div className=" bakhsh-2 ">
    <video className="json-class-3" src={PscMp4} autoPlay loop />
    <div className="text-welcome">
      واحد PSC
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        یک شاخص عرضه و تبادل محصولات داخلی شما به جهت عدم خارج کردن ارز از متاورس رنگ
      </div>
      <div className="page-box-color ">
        جهت فروش محصولات خود شما میتوانید با واحد پی اس سی موجود در این دنیای مجازی اقدام از خدمات این واحد بهرمند
        شوید <br />
        <br />
        واحد پی اس سی یک وزنه تعادل در عرضه و تقاضای داخلی میباشد و در گام 2 متاورس رنگ به یک ارز دیجیتال تبدیل
        خواهد شد
      </div>
    </div>
    <div className="container-btn">
      <button onClick={() => nextPageHandler()} className="btn-color">بزن
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
          <img src={PscIcon} className="img-class-1" alt=''/>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
