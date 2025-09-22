import React from "react";
import styled from "styled-components";

import ExitImage from "../../assets/images/exit.png";
import ReportImage from "../../assets/images/report.png";
import HelpImage from "../../assets/images/help.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAdviserData from "../../services/Hooks/useAdviserData";

const Container = styled.section`
  z-index: 501;
  background-color: white;
  height: 72%;
  width: 450px;
  position: absolute;
  bottom: 72px;
  right: 16px;
  border-radius: 8px;
  padding: 16px;

  @media screen and (max-height: 900px) {
    height: 60% !important;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h4 {
    width: 65%;

    color: #555;
    padding: 8px;
    border: 0.5px solid #999;
    box-shadow: inset 0 2px 6px -1px #07af07be;
    border-radius: 8px;
  }
`;

const Body = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 91%;
  border: 0.5px solid #999;
  border-radius: 8px;
  overflow-y: scroll;
  box-shadow: inset 0 2px 6px -1px #07af07be;

  @media screen and (max-height: 900px) {
    height: 87%;
  }

  /* @media screen and (min-width: 900px) {
    height: 90%;

  } */
`;

export default function FloatingModal({ children, title }) {
  const navigate = useNavigate();
  const Location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location.state);
  return (
    <Container>
      <Header>
        <img
          className="cursor-pointer white-drop-shadow"
          src={HelpImage}
          width={40}
          alt="help"
          onClick={() => setShowModal((showModal) => !showModal)}
        />
        <img
          className="cursor-pointer white-drop-shadow"
          src={ReportImage}
          width={40}
          alt="report"
        />

        <h4 className="purple-box-shadow">{title}</h4>

        <img
          className="cursor-pointer white-drop-shadow"
          src={ExitImage}
          width={40}
          alt="exit"
          onClick={() => navigate("/metaverse")}
        />
      </Header>

      <Body>
        {children}
        {/* {showModal && (
          // <Amozesh
          //   creator={adviserData?.creator}
          //   title={adviserData?.title}
          //   video={adviserData?.video}
          //   description={adviserData?.description}
          //   setShowModal={setShowModal}
          // />
        )} */}
      </Body>
    </Container>
  );
}
