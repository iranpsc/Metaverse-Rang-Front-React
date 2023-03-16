import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import ImageWarning from "../../Assets/images/warning.png";

export default function FooterWarning() {
  const navigation = useNavigate();

  return (
    <section className="footer-section footer-section-four">
      <Tippy
        content={
          <div className="tooltip-container " style={{marginLeft:"-16%"}}>
            <div className="tooltip-container-2">
              <span className="title-toltip">اخطار</span>
              <p>درصورت بروز هرگونه مشکل برای رفع آن ما را با خبر سازید</p>
            </div>
          </div>
        }
        zIndex={10000}
      >
        <img
          className="footer-icon-button yellow-drop-shadow"
          src={ImageWarning}
          alt="warning"
          onClick={() => navigation("/metaverse/report")}
        />
      </Tippy>
    </section>
  );
}
