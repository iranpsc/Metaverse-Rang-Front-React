import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { useSpring } from "@react-spring/web";
import { Header, Container, Title, ContainerIcon } from "./Styles";
import Amozesh from "../ModalAmozash";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { HelpIcon, ReportIcon, ExitIcon } from "../Icons/IconsHeader";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";

const ModalPosition = ({ children, title, position, action }) => {
  const navigation = useNavigate();
  const { resetStates } = useSelectedEnvironment();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showContainer, setShowContainer] = useState(true);
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

  const handleExitClick = () => {
    setShowContainer(false);
    navigation(-1);
    if (action === "ChangeHiddenState") {
      resetStates(); // Reset all states
    }
  };

  return (
    showContainer && (
      <Container position={position} style={springs} theme={theme}>
        <Header>
          <Title>{title}</Title>
          <ContainerIcon>
            <HelpIcon
              className="cursor-pointer"
              alt="help"
              onClick={() => setShowModal(!showModal)}
              theme={theme}
            />
            <ReportIcon
              className="cursor-pointer"
              alt="report"
              onClick={() =>
                navigation("/metaverse/report", {
                  state: {
                    href: window.location.href.split("/").slice(3).join("/"),
                  },
                })
              }
              theme={theme}
            />
            <ExitIcon
              className="cursor-pointer"
              alt="exit"
              onClick={handleExitClick}
              theme={theme}
            />
          </ContainerIcon>
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
    )
  );
};

export default ModalPosition;
