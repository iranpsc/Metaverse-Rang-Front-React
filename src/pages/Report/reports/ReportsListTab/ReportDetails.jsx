import Messages from "./Messages";
import ReportCard from "./ReportCard";
import Title from "../../../../components/Title";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";

const Container = styled.div`
  padding: 20px 0;
  width: 81%;
  overflow: hidden;

  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 20px;
  z-index: 9999;
  right: 0;

  @media (max-width: 685px) {
    width: 100%;
  }
  @media (min-width: 1023px) {
    height: 95%;
    max-width: 1335px;
    max-height: 790px;
    position: static; 
    right: auto;
    border-radius: 10px;
  }

  @media (min-width: 1024px) and (max-width: 1180px) {
    width: 86%;
  }

  @media (min-width: 1400px) {
    overflow: hidden;
  }

  @media (min-width: 1920px) {
    max-width: 71%;
    max-height: 821px;
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
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.315);
`;
const Div = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 15px;
`;

const ReportDetails = ({
  reportDetails,
  setShowDetails,
  status,
  code,
  date,
  time,
  domain,
  subdomain,
}) => {
  return (
    <Back>
      <Container>
        <Header>
          <Title title={getFieldTranslationByNames("1314")} />
          <div onClick={() => setShowDetails(false)}>X</div>
        </Header>
        <Div>
          <ReportCard
            reportDetails={reportDetails}
            // status={status}
            date={date}
            time={time}
            code={code}
            // member={member}
            domain={domain}
            subdomain={subdomain}
          />
          <Messages reportDetails={reportDetails} />
        </Div>
      </Container>
    </Back>
  );
};

export default ReportDetails;
