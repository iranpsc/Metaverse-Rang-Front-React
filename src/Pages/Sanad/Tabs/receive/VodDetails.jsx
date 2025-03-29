import Messages from "./Messages";
import VodCard from "./VodCard";
import styled from "styled-components";
import ModalLg from "../../../../Components/Modal/ModalLg";

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
    <ModalLg setShowModal={setShowDetails} titleId={1347}>
      <Div>
        <VodCard data={data} />
        <Messages data={data} />
      </Div>
    </ModalLg>
  );
};

export default VodDetails;
