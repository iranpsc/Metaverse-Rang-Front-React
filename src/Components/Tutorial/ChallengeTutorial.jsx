
import GiftMp4 from '../../Assets/Videos/reward.mp4';
import GiftIcon from "../../Assets/images/gift.png";
export default function ChallengeTutorial({ nextPageHandler }) {return(
   <div id="t16" className="hidden-box-13">
  <div className="img-circle-2">
    <div className="tw-icons-left-prof-tuto ">
      <img src={GiftIcon} className="tw-img-icons-tutorial" alt=''/>
    </div>
  </div>
  <div className="bakhsh-9">
    <video className="json-class-1" src={GiftMp4} autoPlay loop />
    <div className="text-welcome">
      چالش ها 
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        جوایز متعدد در زمینه های مختلف متناسب با رده های سنی 
      </div>
      <div className="page-box-color ">
        با شرکت در چالش ها اطلاعت خود در باره جهان متاورس را افزایش داده و با ارایه پاسخ هدایای نفیسی به دست آورید 
      </div>
    </div>
    <div className="container-btn">
      <button onClick={() => nextPageHandler()}  className="btn-color">بزن
        بریم</button>
    </div>
  </div>
  <div className="class-arrows-5">
  </div>
</div>

)}