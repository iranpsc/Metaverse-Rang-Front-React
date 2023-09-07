import "./Modal.css";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PromiseModal from "../../Middleware/PromiseModal";
import Amozesh from "../ModalAmozash";
import ImageHelp from "../../Assets/svg/exclamation.svg";
import ImageExit from "../../Assets/svg/close.svg";
import ImageReport from "../../Assets/svg/question.svg";
import { useState } from "react";
import useAdviserData from "../../Services/Hooks/useAdviserData";

import { useSpring, animated } from "@react-spring/web";

/*
 ** type : modal-section-xs, modal-section-sm, modal-section-md, modal-section-xl | default = modal-section-md |
 */
function Modal({
  children,
  title,
  disabled = false,
  type = "modal-section-sm",
}) {
  const navigation = useNavigate();
  const Location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location?.state?.locationPage);
  const springs = useSpring({
    from: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    config: {
      duration: 200,
    },
  });
  return (
    <animated.section className={"modal"} style={{ ...springs }}>
      <div className={`modal-section modal-border ${type}`}>
        <div className="modal-header modal-border">
          <div className="container-icon">
            {!disabled && (
              <>
                <img
                  className="modal-icon cursor-pointer"
                  src={ImageHelp}
                  alt="help"
                  onClick={() => setShowModal((showModal) => !showModal)}
                />
                <img
                  className="modal-icon cursor-pointer"
                  src={ImageReport}
                  alt="report"
                  onClick={() =>
                    navigation("/metaverse/report", {
                      state: {
                        href: window.location.href
                          .split("/")
                          .slice(3)
                          .join("/"),
                      },
                    })
                  }
                />
              </>
            )}
            <img
              className="modal-icon cursor-pointer"
              src={ImageExit}
              alt="exit"
              onClick={() => navigation("/metaverse")}
            />
          </div>

          <p className="rtl">{title}</p>
        </div>
        <div className="modal-body ">
          {children}
          {showModal && (
            <Amozesh
              creator={adviserData?.creator_code}
              title={adviserData?.title}
              video={adviserData?.video}
              description={adviserData?.description}
              setShowModal={setShowModal}
              dislikes={adviserData?.dislikes}
              likes={adviserData?.likes}
              views={adviserData?.views}
              id={adviserData?.id}
            />
          )}
        </div>
      </div>
    </animated.section>
  );
}

export default PromiseModal(Modal, axios);
