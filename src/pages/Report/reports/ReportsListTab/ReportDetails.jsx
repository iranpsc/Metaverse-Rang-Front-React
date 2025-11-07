import Messages from "./Messages";
import ReportCard from "./ReportCard";
import styled from "styled-components";
import ModalLg from "../../../../components/Modal/ModalLg";

const Div = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 15px 0;
  padding-left: 10px;
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
    <ModalLg titleId="1314" setShowModal={() => setShowDetails(false)}>
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
    </ModalLg>
  );
};

export default ReportDetails;
