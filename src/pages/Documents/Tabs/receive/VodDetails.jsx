import Messages from "./Messages";
import VodCard from "./VodCard";
import styled from "styled-components";
import ModalLg from "../../../../components/Modal/ModalLg";

const Div = styled.div`
  height: 272px;
  overflow-y: auto;
  padding-bottom: 15px;
  height: 100%;
`;

const VodDetails = ({ setShowDetails, data, setData}) => {
  return (
    <ModalLg setShowModal={setShowDetails} titleId={1347}>
      <Div>
        <VodCard data={data} setData={setData} setShowDetails={setShowDetails} />
        <Messages data={data} />
      </Div>
    </ModalLg>
  );
};

export default VodDetails;
