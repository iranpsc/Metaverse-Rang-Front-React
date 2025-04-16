import React from "react";
import ReportIcon from "../../assets/images/warning.png";
import ReportMp4 from "../../assets/Videos/error.mp4";
export default function ReportTutorial({ nextPageHandler }) {
  return (
    <div id="t13" className="hidden-box-10">
      <div className="bakhsh-7">
        <video className="json-class-3" src={ReportMp4} autoPlay loop />
        <div className="text-welcome">تذکر و آموزش</div>
        <div className="container-text-Education">
          <div className="Education-text">
            انتقادات و پیشنهادات توسعه ساختار است
          </div>
          <div className="page-box-color ">
            این گزینه در تمام صفحات و تمامی بخش ها موجود است و شما میتوانید به
            سادگی خطاهای موجود در سامانه را اعلام کنیدو در صورتی که خطا ها حائز
            اهمیت باشد یه شما پاداش تعلق خواهد گرفت
          </div>
        </div>
        <div className="container-btn">
          <button onClick={() => nextPageHandler()} className="btn-color">
            بزن بریم
          </button>
        </div>
      </div>
      <div className="class-arrows-1"></div>
      <div className="img-circle">
        <div className="tw-box-icons">
          <img src={ReportIcon} className="tw-img-icons-tutorial " alt="" />
        </div>
      </div>
    </div>
  );
}
