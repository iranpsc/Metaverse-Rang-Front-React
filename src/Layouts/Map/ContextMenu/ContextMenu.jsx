import { useRef } from "react";
import { useEffect } from "react";
import "./index.css";
export default function ContextMenu() {
  const wrapperRef = useRef();
  const shareMenuRef = useRef();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    let y = e.clientY;
    let x = e.clientX;

    const normalizeY = e.clientY / window.innerHeight;
    const normalizeX = e.clientX / window.innerWidth;

    if (normalizeY > 0.49) {
      y -= 260;
    }

    if (normalizeX > 0.49) {
      x -= 230;
    }

    wrapperRef.current.style.display = "block";
    wrapperRef.current.style.top = `${y}px`;
    wrapperRef.current.style.left = `${x}px`;
  };

  const handleClick = (e) => {
    if (wrapperRef?.current?.style?.display) {
      wrapperRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", handleClick);
  });

  return (
    <div className="wrapper-contextmenu" ref={wrapperRef}>
      <div className="content_menu">
        <ul className="menu">
          <li
            className="item "
            style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
          >
            <span>پشتیبانی از شهروندان </span>
            <i className="fa-solid fa-headset"></i>
          </li>

          <li className="item share">
            <div>
              <span>کلیدهای میانبور</span>
              <i className="uil uil-share"></i>
            </div>

            <i className="fa-solid fa-arrow-left"></i>

            <ul className="share-menu" ref={shareMenuRef}>
              <li
                className="item"
                style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              >
                <span>چت "C"</span>
                <i className="fa fa-commenting"></i>
              </li>

              <li className="item">
                <span>فروشگاه "S"</span>
                <i className="fa fa-shopping-basket"></i>
              </li>

              <li className="item">
                <span>تقویم "D"</span>
                <i className="fa fa-calendar"></i>
              </li>

              <li className="item">
                <span>تیکت "T" </span>
                <i className="fa fa-envelope"></i>
              </li>

              <li className="item">
                <span>چالش "V" </span>
                <i className="fa fa-trophy"></i>
              </li>

              <li className="item">
                <span>جستحو "F" </span>
                <i className="fa fa-search"></i>
              </li>

              <li className="item">
                <span>سود ساعت شمار "Q" </span>
                <i className="fa fa-hourglass-half"></i>
              </li>

              <li className="item">
                <span> آموزش "E" </span>
                <i className="fa fa-graduation-cap rgb(243, 206, 1);"></i>
              </li>
            </ul>
          </li>

          <li
            className="item"
            onClick={() => openInNewTab("https://faq.irpsc.com/tags/meta-rgb/")}
          >
            <a
              href="https://faq.irpsc.com/categories/meta-rgb"
              target={"_blank"} 
              rel="noreferrer"
            >
              <span>انجمن متارنگ</span>
            </a>
            <i className="fa-solid fa-question"></i>
          </li>

          <li
            className="item"
            onClick={() => openInNewTab("https:/rgb.irpsc.com/about/")}
          >
            <a href="https:/rgb.irpsc.com/about/" target={"_blank"} rel="noreferrer">
              
              <span>درباره متارنگ</span>
            </a>
            <i className="fa-regular fa-address-card"></i>
          </li>

          <li
            className="item"
            onClick={() => openInNewTab("https://uni.irpsc.com/course/rang/")}
          >
            <a href="https://uni.irpsc.com/course/rang/" target={"_blank"} rel="noreferrer">
              
              <span>دانشگاه متاورس </span>
            </a>
            <i className="fa-sharp fa-solid fa-school"></i>
          </li>

          <li
            className="item"
            onClick={() => openInNewTab("https://rgb.irpsc.com/version/")}
          >
            <a href="https://rgb.irpsc.com/version/" target={"_blank"} rel="noreferrer">
              <span>V 1.1.0</span>
            </a>
            <i className="fa-solid fa-code-compare"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
