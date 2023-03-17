import React from "react";
import StoreIcon from "../../Assets/images/shop.png"
import StoreMp4 from '../../Assets/Videos/store.mp4';
export default function StoreTutorial({ nextPageHandler }) {
    return(
      <div id="t9" className="hidden-box-5">
  <div className="bakhsh-7">
    <video className="json-class-3" src={StoreMp4} autoPlay loop />
    <div className="text-welcome">
      فروشگاه
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        لیست لوازم و محصولات قابل عرضه
      </div>
      <div className="page-box-color ">
        فروشگاه متاورس رنگ ارز های داخلی و نیز ابزار های خاص را برای عرضه لیست میکند
        <br /><br />
        قابلیت خرید محصولات با درگاه های ایرانی امکان پذیر است و بزودی به بلاکچین ایرانی و ارز دیجیتال متصل میشود
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
      <img src={StoreIcon} className="tw-img-icons-tutorial" alt=""/>
    </div>
  </div>
</div>

      
    )
}