import styled from "styled-components";
import ImageHelp from "../../Assets/images/help.png";
import ImageExit from "../../Assets/images/exit.png";
import ImageReport from "../../Assets/images/report.png";
import { useLocation, useNavigate } from "react-router-dom";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { useState } from "react";
import Amozesh from "../ModalAmozash";
const Container = styled.div`
  height: 100vh;
  position: absolute;
  z-index: 1500;
  padding: 10px;
  background-color: #fff;
  top: 0;
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1536px) {
    width: 25%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.678));
  cursor: pointer;
`;
const Title = styled.div`
  border: 1px solid #707070;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
  font-weight: 700;
  color: #707070;
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
  @media (min-width: 1536px) {
    width: 67%;
  }
`;
export default function ModalSearch({ children, title }) {
  const navigation = useNavigate();
  const Location = useLocation();
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location?.state?.locationPage);
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Header>
        <Img
          src={ImageHelp}
          alt="help"
          onClick={() => setShowModal((showModal) => !showModal)}
        />
        <Img
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
        <Title>{title}</Title>
        <Img src={ImageExit} onClick={() => navigation("/metaverse")} />
      </Header>
      {children}
      {showModal && (
        <Amozesh
          creator={adviserData?.creator}
          title={adviserData?.title}
          video={adviserData?.video}
          description={adviserData?.description}
          setShowModal={setShowModal}
          dislikes={adviserData?.dislikes}
          likes={adviserData?.likes}
          views={adviserData?.views}
        />
      )}
    </Container>
  );
}
