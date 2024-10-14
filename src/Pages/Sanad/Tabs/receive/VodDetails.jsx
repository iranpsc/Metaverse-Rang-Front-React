import Title from "../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import Messages from "./Messages";

import VodCard from "./VodCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  width: 90%;
  height: 80%;
  position: relative;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 20px;
  z-index: 9999;
  @media (min-width: 1366px) {
    width: 70%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 12px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #ff000021;
    color: #ff0000;
  }
`;

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.713);
  z-index: 10;
`;

const Div = styled.div`
  height: 272px;
  overflow-y: auto;

  padding-right: 15px;
  @media (min-width: 720px) {
    height: 408px;
  }
  @media (min-width: 740px) {
    height: 260px;
  }
  @media (min-width: 840px) {
    height: 286px;
  }
  @media (min-width: 880px) {
    height: 250px;
  }
  @media (min-width: 890px) {
    height: 308px;
  }
  @media (min-width: 900px) {
    height: 307px;
  }
  @media (min-width: 930px) {
    height: 320px;
  }
  @media (min-width: 1024px) {
    height: 460px;
  }
  @media (min-width: 1180px) {
    height: 629px;
  }
  @media (min-width: 1280px) {
    height: 629px;
  }
  @media (min-width: 1366px) {
    height: 795px;
  }
  @media (min-width: 1500px) {
    height: 585px;
  }
  @media (min-width: 1920px) {
    height: 710px;
  }
`;

const VodDetails = ({ setShowDetails, data }) => {
  return (
    <Back>
      <Container>
        <Header>
          <Title
            title={getFieldTranslationByNames(
              "send-vod",
              "document information"
            )}
          />
          <div onClick={() => setShowDetails(false)}>X</div>
        </Header>
        <Div>
          <VodCard data={data} />
          <Messages data={data} />
        </Div>
      </Container>
    </Back>
  );
};

export default VodDetails;