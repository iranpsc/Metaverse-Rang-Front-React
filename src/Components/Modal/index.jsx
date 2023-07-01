import "./Modal.css";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PromiseModal from "../../Middleware/PromiseModal";
import Amozesh from "../ModalAmozash";
import ImageHelp from "../../Assets/images/help.png";
import ImageExit from "../../Assets/images/exit.png";
import ImageReport from "../../Assets/images/report.png";
import { useState } from "react";
import useAdviserData from "../../Services/Hooks/useAdviserData";

/*
 ** type : modal-section-sm, modal-section-md, modal-section-xl | default = modal-section-md |
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

  return (
    <section className="modal">
      <div className={`modal-section modal-border ${type}`}>
        <div className="modal-header modal-border">
          {!disabled && (
            <>
              <img
                className="modal-icon white-drop-shadow cursor-pointer"
                src={ImageHelp}
                alt="help"
                onClick={() => setShowModal((showModal) => !showModal)}
              />
              <img
                className="modal-icon white-drop-shadow cursor-pointer"
                src={ImageReport}
                alt="report"
                onClick={() =>
                  navigation("/metaverse/report", {
                    state: {
                      href: window.location.href.split("/").slice(3).join("/"),
                    },
                  })
                }
              />
            </>
          )}

          <div
            className={`modal-title modal-header-shadow ${
              disabled && "w-85 top-left-rounded"
            }`}
          >
            <p className="rtl">{title}</p>
          </div>

          <img
            className="modal-icon white-drop-shadow cursor-pointer"
            src={ImageExit}
            alt="exit"
            onClick={() => navigation("/metaverse")}
          />
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
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default PromiseModal(Modal, axios);
