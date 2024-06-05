import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { Header, Container, Title, ContainerIcon } from "./Styles";
import Amozesh from "../ModalAmozash";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { Icon, Icon2, Icon3 } from "../Icons/IconsHeader";

export default function ModalPosition({ children, title, position }) {
  const navigation = useNavigate();
  const Location = useLocation();
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location?.state?.locationPage);
  const [showModal, setShowModal] = useState(false);
  const [showContainer, setShowContainer] = useState(true); // New state for controlling the main container visibility
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

  const handleExitClick = () => {
    setShowContainer(false); // Hide the main container when exit is clicked
    navigation("/metaverse");
  };

  return (
    <>
      {showContainer && (
        <Container position={position} style={springs} theme={theme}>
          <Header>
            <Title>{title}</Title>
            <ContainerIcon>
              <Icon
                className="cursor-pointer"
                alt="help"
                onClick={() => setShowModal((showModal) => !showModal)}
                theme={theme}
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
                theme={theme}
              />
              <Icon3
                className="cursor-pointer"
                alt="exit"
                onClick={handleExitClick} // Call handleExitClick function when exit is clicked
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
      )}
    </>
  );
}
