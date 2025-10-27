import { useState } from "react";
import { useSpring } from "@react-spring/web";
import { Container } from "./Styles";
import Header from "../Header/Header";
import { useLanguage } from "../../services/reducers/LanguageContext";

const ModalPosition = ({ children, title, position, action }) => {
  const [showContainer, setShowContainer] = useState(true);
  const springs = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 200 },
  });
  const isPersian = useLanguage();

  return (
    showContainer && (
      <Container position={position} style={springs} isPersian={isPersian}>
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
