import { useContext, useState } from "react";

import { LuEye } from "react-icons/lu";
import VodDetails from "./VodDetails.jsx";
import styled from "styled-components";

const TableRow = styled.tr`
  background-color: ${(props) =>
    props.status === "confirmed" ? "#ffc70021" : "transparent"};
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: #ffffff;
  &:nth-of-type(5) {
    padding-right: 10px;
  }
`;

const Code = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const Date = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const View = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.id === 1 ? "#ffc700" : "#3b3b3b")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #ffc700;
    transition: all 0.2s linear;
  }
  svg {
    color: white;
  }
`;

const Status = styled.h3`
  color: #ffffff;
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
  doc,
  status,
  member,
  domain,
  subdomain,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <TableRow status={status}>
        <TableCell>
          <div>
            <Code>#{code}</Code>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Date>{doc}</Date>
          </div>
        </TableCell>
        <TableCell>
          <Status>{member}</Status>
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
              ? "پاسخ داده شده"
              : status === "pending"
              ? "باز نشده"
              : status === "read"
              ? "خوانده شده"
              : "بسته شده"}
          </Title>
        </TableCell>
        <TableCell>
          <div>
            <Date>
              {date} | {time}
            </Date>
          </div>
        </TableCell>
        <TableCell>
          <View
            id={id}
            onClick={() => {
              setTimeout(() => {
                setShowDetails(true);
              }, 2000);
            }}
          >
            <LuEye size={20} />
          </View>
        </TableCell>
      </TableRow>
      {showDetails && (
        <VodDetails
          status={status}
          date={date}
          time={time}
          member={member}
          code={code}
          setShowDetails={setShowDetails}
          domain={domain}
          subdomain={subdomain}
        />
      )}
    </>
  );
};

export default VodRow;
