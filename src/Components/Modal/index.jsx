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
  const [adviserData, setAdviserData] = useState({});
  const pageMappings = {
    'settings-1': { urlRequest: 'setting', adviserPage: 'general-setting-desktop' },
    'settings-2': { urlRequest: 'setting', adviserPage: 'account-setting-desktop' },
    'profile-1': { urlRequest: 'profile', adviserPage: 'owner-specifications-desktop' },
    'profile-2': { urlRequest: 'profile', adviserPage: 'owner-property-feature-desktop' },
    'login-': { urlRequest: 'login', adviserPage: 'login-desktop' },
    'signup-': { urlRequest: 'register', adviserPage: 'register-desktop' },
    'store-1': { urlRequest: 'shop', adviserPage: 'shop-tools-desktop' },
    'store-2': { urlRequest: 'shop', adviserPage: 'shop-currency-desktop' },
    'sanad-1': { urlRequest: 'sanad', adviserPage: 'vod-send-desktop' },
    'sanad-2': { urlRequest: 'sanad', adviserPage: 'vod-note-desktop' },
    'report-1': { urlRequest: 'reports', adviserPage: 'reports-report-desktop' },
    'verification-1': { urlRequest: 'kyc', adviserPage: 'kyc-man-desktop' },
    'verification-2': { urlRequest: 'kyc', adviserPage: 'kyc-attachment-desktop' },
    'verification-3': { urlRequest: 'kyc', adviserPage: 'kyc-bank-desktop' },
    'confirmation-': { urlRequest: 'account-security', adviserPage: 'account-security-code-desktop' },
    'dynasty-1': { urlRequest: 'dynasty', adviserPage: 'request-received-desktop' },
    'dynasty-2': { urlRequest: 'dynasty', adviserPage: 'submitted-request-desktop' },
    'dynasty-3': { urlRequest: 'dynasty', adviserPage: 'family-members-desktop' },
    'dynasty-4': { urlRequest: 'dynasty', adviserPage: 'establishment-desktop' },
  };
  
  const { urlRequest, adviserPage } = pageMappings[Location.state || newStr] || {};
  
  useEffect(() => {
    if (!urlRequest || !adviserPage) return;
  
    Request('video-tutorials', HTTP_METHOD.POST, { url: `tutorials/${urlRequest}/${adviserPage}` })
      .then((response) => {
        setAdviserData(response.data.data);
      });
  }, [urlRequest, adviserPage]);
  
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
