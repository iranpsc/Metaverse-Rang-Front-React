import Messages from "./Messages";
import VodCard from "./VodCard";
import styled from "styled-components";
import ModalLg from "../../../../components/Modal/ModalLg";

const Div = styled.div`
  height: 272px;
  overflow-y: auto;

  padding-right: 15px;
  height: 100%;
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
