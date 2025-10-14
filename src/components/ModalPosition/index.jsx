import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { useSpring } from "@react-spring/web";
import { Container } from "./Styles";
import useAdviserData from "../../services/Hooks/useAdviserData";
import { useSelectedEnvironment } from "../../services/reducers/SelectedEnvironmentContext";
import Header from "../Header/Header";
import { useIsSafari } from "../../hooks/useIsSafari";


const ModalPosition = ({ children, title, position, action }) => {
  const [showContainer, setShowContainer] = useState(true);
  const springs = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 200 },
  });
  const safari = useIsSafari();

  return (
    showContainer && (
      <Container position={position} style={springs} isSafari={safari}>
        <Header
          title={title}
          action={action}
          setShowContainer={setShowContainer}
        />
        {children}
      </Container>
    )
  );
};

export default ModalPosition;
