import React from "react";
import styled from "styled-components";
import AssetsWallet from "./AssetsWallet";
import BtnFlagMap from "./BtnFlagMap";
import Status from "./Status";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30%;
  height: 100%;
  @media (min-width: 1024px) {
    width: 14%;
    gap: 10px;
  }
`;
const WalletContainer = styled.div`
  width: 100%;
  height: 61.5%;
  border-radius: 10px;
  background-color: #1a1a18;
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
`;
const FlagMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 29%;
  border-radius: 10px;
  background-color: #1a1a18;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: 51%;
    border-radius: 20px;
  }
  padding: 4px 7px;
  align-items: center;
  overflow-y: auto;
`;
const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7%;
  border-radius: 10px;
  background-color: #1a1a18;
  align-items: center;
  justify-content: center;
  padding: 10px;
  display: flex;
  gap: 10px;
  @media (min-width: 1024px) {
    height: 6%;
    border-radius: 20px;
  }
`;
const StatusBar = () => {
  return (
    <Container>
      <WalletContainer>
        <AssetsWallet />
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