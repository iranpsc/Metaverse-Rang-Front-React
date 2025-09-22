import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { useSpring } from "@react-spring/web";
import { Container } from "./Styles";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";
import Header from "../Header/Header";

const ModalPosition = ({ children, title, position, action }) => {
  const [showContainer, setShowContainer] = useState(true);
  const springs = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 200 },
  });

  return (
    showContainer && (
      <Container position={position} style={springs}>
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
