import "./Modal.css";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PromiseModal from "../../Middleware/PromiseModal";
import Amozesh from "../ModalAmozash";
import ImageHelp from "../../Assets/images/help.png";
import ImageExit from "../../Assets/images/exit.png";
import ImageReport from "../../Assets/images/report.png";
import { useEffect, useState } from "react";
import useRequest from "../../Services/Hooks/useRequest";

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
  const { Request, HTTP_METHOD } = useRequest();
  let UrlRequest = Location.pathname.replace(/\/metaverse\//g, "");
  const [adviserData, setAdviserData] = useState({});
  let AdviserPage = Location.state ? Location.state : newStr;
  switch (AdviserPage) {
    case "settings-1":
      AdviserPage = "general-setting-desktop";
      break;
    case "settings-2":
      AdviserPage = "general-setting-desktop";
      break;
    case "profile-1":
      AdviserPage = "owner-specifications-desktop";
      break;
    case "profile-2":
      AdviserPage = "owner-property-feature-desktop";
      break;
    case "login-":
      AdviserPage = "login-desktop";
      break;
    case "signup-":
      AdviserPage = "register-desktop";
      break;
    case "store-1":
      UrlRequest="shop"
      AdviserPage = "shop-tools-desktop";
      break;
    case "store-2":
      UrlRequest="shop"
      AdviserPage = "shop-currency-desktop";
      break;
    case "sanad-1":
      AdviserPage = "vod-send-desktop";
      break;
    case "sanad-2":
      AdviserPage = "vod-note-desktop";
      break;
    case "report-1":
      AdviserPage = "reports-report-desktop";
      break;
    case "verification-1":
      AdviserPage = "kyc-man-desktop";
      break;
    case "verification-2":
      AdviserPage = "kyc-attachment-desktop";
      break;
    case "verification-3":
      AdviserPage = "kyc-bank-desktop";
      break;
    case "confirmation-":
      AdviserPage = "account-security-code-desktop";
      break;
    case "dynasty-1":
      AdviserPage = "request-received-desktop";
      break;
    case "dynasty-2":
      AdviserPage = "submitted-request-desktop";
      break;
    case "dynasty-3":
      AdviserPage = "family-members-desktop";
      break;
    case "dynasty-4":
      AdviserPage = "establishment-desktop";
      break;

    default:
  }
  useEffect(() => {
    Request(`video-tutorials`, HTTP_METHOD.POST,{"url":`tutorials/${UrlRequest}/${AdviserPage}`}).then((response) => {
      setAdviserData(response.data.data);
    });
  }, [AdviserPage]);
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
          {children} {showModal && <Amozesh creator={adviserData?.creator} title={adviserData?.title} video={adviserData?.video} description={adviserData?.description} setShowModal={setShowModal}/>}
        </div>
      </div>
    </section>
  );
}

export default PromiseModal(Modal, axios);
