import styled from "styled-components";
import BtnFlagMap from "./BtnFlagMap";
import Status from "./Status";
import PrivateComponent from "../../middleware/PrivateComponent";
import PublicComponent from "../../middleware/PublicComponent";
import ListPositions from "./ListPositions";
import AssetsWallet from "./AssetsWallet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  justify-content: space-between;
  max-width: 18%;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 10%;
    gap: 10px;
  }
`;
const WalletContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 38%;
  @media (min-width: 1024px) {
    border-radius: 20px;
  }
  padding: 10px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease 0s;
`;
const FlagMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    border-radius: 20px;
  }
  padding: 4px 7px;
  align-items: center;
  overflow-y: auto;
  padding-left: 10px;
  transition: all 0.3s ease 0s;
`;
const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  gap: 5px;
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
