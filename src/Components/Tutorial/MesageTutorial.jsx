import React  from "react";
import MesseageIcon from "../../Assets/images/notification.png"
import MesseageMp4 from '../../Assets/Videos/message.mp4';
export default function MesageTutorial({ nextPageHandler }) {
    return(
      <div id="t10" className="hidden-box-6">
  <div className="bakhsh-7">
    <video className="json-class-3" src={MesseageMp4} autoPlay loop />
    <div className="text-welcome">
      پیام ها
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        ارسال پیام و نیز بررسی پیام های ارسال شده
      </div>
      <div className="page-box-color ">
        برای ارسال پیام میتوانید از این گذینه استفده کنید و همچنین پیام های ارسال شده توسط بازیکنان دیگر و سرور
        نیز در این بخش به نمایش گذاشته میشود
        <br /><br />
        جوایز و هدایا و همچنین خرید و فروش ها در این پخش بنمایش گذاشته میشود
      </div>
    </div>
    <div className="container-btn">
      <button onClick={() => nextPageHandler()}  className="btn-color">بزن
        بریم</button>
    </div>
  </div>
  <div className="class-arrows-1">
  </div>
  <div className="img-circle">
    <div className="tw-box-icons">
      <img src={MesseageIcon} className=" tw-img-icons-tutorial " alt=""/>
    </div>
  </div>
</div>

    )
}