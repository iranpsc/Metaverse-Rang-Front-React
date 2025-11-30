import { useContext, useState } from "react";
import { LoaderContext } from "../../../../services/reducers/LoaderProvider.jsx";
import { LuEye } from "react-icons/lu";
import ReportDetails from "./ReportDetails.jsx";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";
import useRequest from "../../../../services/Hooks/useRequest";
import { convertToPersian } from "../../../../services/Utility/index";

const TableRow = styled.tr`
  /* background-color: ${(props) =>
    props.status === "confirmed"
      ? (props) => props.theme.colors.newColors.otherColors.confirmed
      : "transparent"};
*/
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  justify-content: center;
  color: #ffffff;
  &:nth-of-type(5) {
    padding-right: 10px;
  }
`;

const Code = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;

const Date = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;

const View = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.id === 0
      ? props.theme.colors.primary
      : props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s linear;
    svg {
      color: ${(props) => props.theme.colors.newColors.primaryText};
    }
  }
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const Status = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  width: fit-content;
  font-size: 16px;
  border-radius: 0.25rem;
  font-weight: 400;
`;

const ReportRow = ({
  id,
  code,
  datetime,
  title,
  status,
  member,
  domain,
  subdomain,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { setIsLoading } = useContext(LoaderContext);
  const { Request } = useRequest();
  const [reportDetails, setReportDetails] = useState(null);
  const [date, time] = datetime.split(" ");

  const truncateTitle = (titleString) => {
    return titleString.length > 60
      ? titleString.substring(0, 60) + "..."
      : titleString;
  };
  const fetchReportDetails = async () => {
    try {
      setIsLoading(true);
      const response = await Request(`reports/${id}`, "GET");
      setReportDetails(response.data.data);
      setShowDetails(true);
    } catch (error) {
      console.error("Error fetching report details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const translateMember = (member) => {
    switch (member) {
      case "spellingError":
        return getFieldTranslationByNames("15");
      case "FPSError":
        return getFieldTranslationByNames("17");
      case "displayError":
        return getFieldTranslationByNames("1385");
      case "codingError":
        return getFieldTranslationByNames("16");
      case "disrespect":
        return getFieldTranslationByNames("18");
      default:
        return member;
    }
  };

  const translatedMember = translateMember(member);

  return (
    <>
      <TableRow status={status}>
        <TableCell>
          <div>
            <Code>#{convertToPersian(code)}</Code>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Date>{truncateTitle(title)}</Date>
          </div>
        </TableCell>
        <TableCell>
          <Status>{translatedMember}</Status>
        </TableCell>
        {/*<TableCell>
          <Title
            style={{
              color: `${status === "confirmed"
                  ? "#18C08F"
                  : status === "pending"
                    ? "#FFC700"
                    : "#A0A0AB"
                }`,
            }}
          >
            {status === "confirmed"
              ? getFieldTranslationByNames("1343")
              : status === "pending"
                ? getFieldTranslationByNames("852")
                : getFieldTranslationByNames("1345")}
          </Title>
        </TableCell>*/}
        <TableCell>
          <div>
            <Date>
              {date} | {time}
            </Date>
          </div>
        </TableCell>
        <TableCell style={{ position: "relative" }}>
          <View
            id={id}
            onClick={fetchReportDetails}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <LuEye size={20} />
          </View>
        </TableCell>
      </TableRow>
      {showDetails && (
        <ReportDetails
          reportDetails={reportDetails}
          //status={status}
          date={date}
          time={time}
          member={translatedMember}
          code={code}
          setShowDetails={setShowDetails}
          domain={domain}
          subdomain={subdomain}
        />
      )}
    </>
  );
};

export default ReportRow;
