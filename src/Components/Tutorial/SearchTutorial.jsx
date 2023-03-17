
import SearchMp4 from '../../Assets/Videos/search.mp4';
import SearchIcon from "../../Assets/images/search.png";
export default function SearchTutorial({ nextPageHandler }) {return(
 <div id="t17" className="hidden-box-14">
  <div className=" bakhsh-3 ">
    <video className="json-class-3" src={SearchMp4} autoPlay loop />
    <div className="text-welcome ">
      جستجوی مرکزی
    </div>
    <div className="container-text-Education">
      <div className="Education-text">
        قابلیت جستجو در میان بازیکنان , و یا املاک به راحتی پروفایل کاربری و اطلاعات آنان را مشاهده کنید
      </div>
      <div className="page-box-color ">
        در این بخش میتوانید با توشتن نام بازیکنان ویا املاک به راحتی پروفایل کاربری و اطلاعات آنان را مشاهده کنید 
      </div>
    </div>
    <div className="container-btn">
      <button onClick={() => nextPageHandler()}  className="btn-color">بزن
        بریم</button>
    </div>
  </div>
  <div className="class-arrows-6">
  </div> 
  <div className="img-circle-2">
    <div className="tw-icons-left-2">
      <img src={SearchIcon} className="tw-img-icons-tutorial" alt=''/>
    </div>
  </div>
</div>

)}