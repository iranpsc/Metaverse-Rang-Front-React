import { useContext, useState } from "react";
import { LuEye } from "react-icons/lu";
import VodDetails from "./VodDetails.jsx";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility/index.jsx";
import useRequest from "../../../../Services/Hooks/useRequest/index.jsx";

const TableRow = styled.tr`
  background-color: ${(props) =>
    props.status === "confirmed" ? "#ffc70021" : "transparent"};
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: ${(props) => props.theme.colors.newColors.shades[90]};
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

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const View = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  svg {
    color: ${(props) => props.theme.colors.newColors.shades[20]};
  }
`;

const Status = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  width: fit-content;
  font-size: 16px;
  border-radius: 0.25rem;
  font-weight: 400;
`;

const VodRow = ({
  id,
  code,
  date,
  time,
  title,
  status,
  domain,
  subdomain,
  sender,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { Request } = useRequest();
  const [ticket, setTicket] = useState(null);

  const onClickHandler = async (id) => {
    try {
      const response = await Request(`tickets/${id}`);
      setTicket(response.data.data);
      setShowDetails(true);
    } catch (error) {
      console.error("Error fetching ticket details:", error);
    }
  };

  return (
    <>
      <TableRow status={status}>
        <TableCell>
          <Code>#{code}</Code>
        </TableCell>
        <TableCell>
          <Date>{title}</Date>
        </TableCell>
        <TableCell>
          <Status>{sender}</Status>
        </TableCell>
        <TableCell>
          <Title
            style={{
              color: `${
                status === "confirmed"
                  ? "#18C08F"
                  : status === "pending"
                  ? "#FFC700"
                  : status === "read"
                  ? "#A0A0AB"
                  : "#C30000"
              }`,
            }}
          >
            {status === "confirmed"
              ? getFieldTranslationByNames("send-vod", "answered")
              : status === "pending"
              ? getFieldTranslationByNames("send-vod", "not opened")
              : status === "read"
              ? getFieldTranslationByNames("send-vod", "read")
              : getFieldTranslationByNames("send-vod", "closed")}
          </Title>
        </TableCell>
        <TableCell>
          <Date>
            {date} | {time}
          </Date>
        </TableCell>
        <TableCell>
          <View onClick={() => onClickHandler(id)}>
            <LuEye size={20} />
          </View>
        </TableCell>
      </TableRow>
      {showDetails && (
        <VodDetails data={ticket} setShowDetails={setShowDetails} />
      )}
    </>
  );
};

export default VodRow;
