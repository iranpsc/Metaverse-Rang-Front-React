import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { ContainerIcon, Header, Title } from "../ModalPosition/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { Icon, Icon2, Icon3 } from "../Icons/IconsHeader";

const Container = styled.div`
  top: 0;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #0000009e;
`;

const ContainerModal = styled.div`
  width: 515px;
  height: 100%;
  @media (min-width: 1024px) {
    height: 325px;
  }
  background-color: ${(props) => props.theme.bgModal};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ModalXs = ({ title, children, handleExitClick }) => {
  const navigation = useNavigate();
  const Location = useLocation();
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location?.state?.locationPage);
  const [showModal, setShowModal] = useState(false);
  const [showContainer, setShowContainer] = useState(true);
  const theme = useTheme();

  const internalHandleExitClick = () => {
    setShowContainer(false);
    navigation("/metaverse");
    if (handleExitClick) {
      handleExitClick();
    }
  };

  return (
    <>
      {showContainer && (
        <Container>
          <ContainerModal>
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
                        href: window.location.href
                          .split("/")
                          .slice(3)
                          .join("/"),
                      },
                    })
                  }
                  theme={theme}
                />
                <Icon3
                  className="cursor-pointer"
                  alt="exit"
                  onClick={internalHandleExitClick}
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
          </ContainerModal>
        </Container>
      )}
    </>
  );
};

export default ModalXs;
