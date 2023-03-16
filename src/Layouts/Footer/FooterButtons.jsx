import ImageDate from "../../Assets/images/date.png";
import ImageShop from "../../Assets/images/shop.png";
import ImageNotification from "../../Assets/images/notification.png";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";

export default function FooterButtons() {
  const navigate = useNavigate();

  return (
    <section className="footer-section footer-section-two">
      <Tippy
        content={
          <div className="tooltip-container">
            <div className="tooltip-container-2">
              <span className="title-toltip">تقویم</span>
              <p>لیست رویداد های زمانبندی شده</p>
            </div>
          </div>
        }
        zIndex={10000}
      >
        <img className="footer-icon-button" src={ImageDate} alt="calendar" />
      </Tippy>
      <Tippy
        content={
          <div className="tooltip-container">
            <div className="tooltip-container-2">
              <span className="title-toltip">فروشگاه مرکزی</span>
              <p>لیست محصولات متارنگ</p>
            </div>
          </div>
        }
        zIndex={10000}
      >
        <img
          className="footer-icon-button"
          src={ImageShop}
          alt="shop"
          onClick={() => navigate("/metaverse/store")}
        />
      </Tippy>
      <Tippy
        content={
          <div className="tooltip-container">
            <div className="tooltip-container-2">
              <span className="title-toltip">اطلاعیه و اخبار</span>
              <p>اطلاعیه ها و اخبار های سراسری متارنگ</p>
            </div>
          </div>
        }
        zIndex={10000}
      >
        <img
          className="footer-icon-button"
          src={ImageNotification}
          alt="notification"
          onClick={() => navigate("/metaverse/notifications")}
        />
      </Tippy>
    </section>
  );
}
