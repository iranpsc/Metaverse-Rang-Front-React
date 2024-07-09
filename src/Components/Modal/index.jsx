import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import styled, { useTheme } from "styled-components";
import PromiseModal from "../../Middleware/PromiseModal";

import { HelpIcon, ReportIcon, ExitIcon } from "../Icons/IconsHeader";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import "./Modal.css";
import Amozesh from "../ModalAmozash";

const Modal = ({
  children,
  title,
  disabled = false,
  type = "modal-section-sm",
}) => {
  const navigation = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const adviserData = useAdviserData(
    location.pathname.replace(/\/metaverse\//g, "") + "-",
    location?.state?.locationPage
  );
  const theme = useTheme();
  const springs = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 200 },
  });

  const Header = styled.p`
    color: ${theme.headerModals};
    text-align: right;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    font-weight: 600;
    line-height: 180%;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <animated.section className="modal" style={springs}>
      <div
        className={`modal-section modal-border ${type}`}
        style={{ background: theme.bgModal }}
      >
        <div className="modal-header modal-border">
          <div className="container-icon">
            {!disabled && (
              <>
                <HelpIcon
                  className="cursor-pointer"
                  alt="help"
                  onClick={() => setShowModal(!showModal)}
                />
                <ReportIcon
                  className="cursor-pointer"
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
            <ExitIcon
              className="cursor-pointer"
              alt="exit"
              onClick={() => navigation("/metaverse")}
            />
          </div>
          <Header>{title}</Header>
        </div>
        <div className="modal-body">
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
};

export default PromiseModal(Modal, axios);
