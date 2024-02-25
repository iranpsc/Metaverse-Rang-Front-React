import React, { useState } from "react";
import "../../../../../../Components/Modal/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAdviserData from "../../../../../../Services/Hooks/useAdviserData";
import styled, { useTheme } from "styled-components";

import { ReactComponent as Help } from "../../../../../../Assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../../../../../Assets/svg/close.svg";
import { ReactComponent as Report } from "../../../../../../Assets/svg/question.svg";
const PreviewModel = () => {
  const navigation = useNavigate();
  const Location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [hidden, setHidden] = useState(false);
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location?.state?.locationPage);
  const theme = useTheme();

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
    color: ${(props) => props.theme.headerModals};
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
    <div
      className={`modal-section modal-border modal-section-md modal-preview`}
      style={{
        background: `${theme.bgModal}`,
        display: `${hidden ? "none" : ""}`,
      }}
    >
      <div className="modal-header modal-border">
        <div className="container-icon">
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
                  href: window.location.href.split("/").slice(3).join("/"),
                },
              })
            }
          />
          <Icon3
            className=" cursor-pointer"
            alt="exit"
            onClick={() => setHidden(true)}
          />
        </div>
        <Header>fddsf</Header>
      </div>
      <div className="modal-body ">
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
  );
};

export default PreviewModel;
