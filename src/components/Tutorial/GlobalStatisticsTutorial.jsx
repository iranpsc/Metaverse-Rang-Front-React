import statisticsMp4 from "../../assets/Videos/average-statistics.mp4";
import statisticsIcon from "../../assets/images/statistics.png";
export default function GlobalStatisticsTutorial({ nextPageHandler }) {
  return (
    <div id="t18" className="hidden-box-15">
      <div className=" bakhsh-3 ">
        <video className="json-class-3" src={statisticsMp4} autoPlay loop />
        <div className="text-welcome ">آمار سراسری</div>
        <div className="container-text-Education">
          <div className="Education-text">
            لیست شهروندان متارنگ متارنگ طبقه بندی شده بر اساس ویژگی
          </div>
          <div className="page-box-color ">
            جهت فروش محصولات خود شما میتوانید با ارز هایی که خارج از این دنیای
            مجازی قابل عرضه هست اقدام به قیمت گذاری محصولات کنید
            <br />
            <br />
            محصولات شما میتواند یه سادگی با تبادل و فروش مستقیم در چرخه اقتصادی
            خارج از متاورس قرار گیرد
          </div>
        </div>
        <div className="container-btn">
          <button onClick={() => nextPageHandler()} className="btn-color">
            بزن بریم
          </button>
        </div>
      </div>
      <div className="class-arrows-6"></div>
      <div className="img-circle-2">
        <div className="tw-icons-left-2">
          <img src={statisticsIcon} className="tw-img-icons-tutorial " alt="" />
        </div>
      </div>
    </div>
  );
}
