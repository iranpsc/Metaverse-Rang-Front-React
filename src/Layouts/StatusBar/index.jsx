import React from "react";
import styled from "styled-components";
import AssetsWallet from "./AssetsWallet";
import BtnFlagMap from "./BtnFlagMap";
import Status from "./Status";
import PrivateComponent from "../../Middleware/PrivateComponent";
import PublicComponent from "../../Middleware/PublicComponent";
import ListPositions from "./ListPositions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 18%;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 10%;
    gap: 10px;
  }
`;
const WalletContainer = styled.div`
  width: 100%;
  height: 61.5%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: 41%;
    border-radius: 20px;
  }
  padding: 20px 10px 15px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  transition: all 0.3s ease 0s;
`;
const FlagMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 29%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: 51%;
    border-radius: 20px;
  }
  padding: 4px 7px;
  align-items: center;
  overflow-y: auto;
  padding-left: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: "#DDDDDD";
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: "#858585";
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
  transition: all 0.3s ease 0s;
`;
const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  align-items: center;
  justify-content: center;
  padding: 10px;
  display: flex;
  @media (min-width: 1024px) {
    height: 6%;
    border-radius: 20px;
  }
  transition: all 0.3s ease 0s;
`;
const StatusBar = () => {
  return (
    <Container>
      <WalletContainer>
        <PrivateComponent>
          <AssetsWallet />
        </PrivateComponent>
        <PublicComponent>
          <ListPositions />
        </PublicComponent>
      </WalletContainer>
      <FlagMapContainer>
        <BtnFlagMap />
      </FlagMapContainer>
      <StatusContainer>
        <Status />
      </StatusContainer>
    </Container>
  );
};

export default StatusBar;
