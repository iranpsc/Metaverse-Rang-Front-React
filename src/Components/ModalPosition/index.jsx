import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { useSpring } from "@react-spring/web";
import { Container } from "./Styles";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";
import Header from "../Header/Header";

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

  const handleReportClick = () => {
    navigation("/metaverse/report", {
      state: {
        href: window.location.href.split("/").slice(3).join("/"),
      },
    });
  };
  console.log(title);
  return (
    showContainer && (
      <Container position={position} style={springs}>
        <Header
          title={title}
          onReportClick={handleReportClick}
          onExitClick={handleExitClick}
        />
        {children}
      </Container>
    )
  );
};

export default ModalPosition;
