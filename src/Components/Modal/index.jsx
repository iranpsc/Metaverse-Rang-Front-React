import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import styled, { useTheme } from "styled-components";
import PromiseModal from "../../Middleware/PromiseModal";
import { ReactComponent as Help } from "../../Assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../Assets/svg/close.svg";
import { ReactComponent as Report } from "../../Assets/svg/question.svg";

import useAdviserData from "../../Services/Hooks/useAdviserData";
import "./Modal.css";
import Amozesh from "../ModalAmozash";

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
  const theme = useTheme();
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
  const Icon = styled(Help)`
    width: 40px;
    height: 40px;
    & > :first-child {
      fill: ${() => theme.headerIconFill};
    }

    & > :nth-child(2) {
      fill: ${() => theme.headerIconStroke};
    }
  `;
  const Icon2 = styled(Report)`
    width: 40px;
    height: 40px;
    & > :first-child {
      fill: ${() => theme.headerIconFill};
    }

    & > :nth-child(2) {
      fill: ${() => theme.headerIconStroke};
    }
  `;

  const Icon3 = styled(Exit)`
    width: 40px;
    height: 40px;
  `;
  const Header = styled.p`
    ${(props) => props.theme.headerModals};
    text-align: right;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <animated.section className={"modal"} style={{ ...springs }}>
      <div
        className={`modal-section modal-border ${type}`}
        style={{ background: `${theme.bg}` }}
      >
        <div className="modal-header modal-border">
          <div className="container-icon">
            {!disabled && (
              <>
                <Icon
                  className=" cursor-pointer"
                  alt="help"
                  onClick={() => setShowModal((showModal) => !showModal)}
                />
                <Icon2
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
            <Icon3
              className=" cursor-pointer"
              alt="exit"
              onClick={() => navigation("/metaverse")}
            />
          </div>
          <Header>{title}</Header>
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
