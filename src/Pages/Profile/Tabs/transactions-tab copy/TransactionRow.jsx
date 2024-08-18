import { LuEye } from "react-icons/lu";
import PrintModal from "./PrintModal";
import { convertToPersian } from "../../../lib/convertToPersian";
import styled from "styled-components";
import { useState } from "react";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: #ffffff;
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;

const Code = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

const Date = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const Subject = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Print = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3b3b3b;
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
  color: ${(props) =>
    props.status === "success"
      ? "#18c090"
      : props.status === "pending"
      ? "#ffc800"
      : "#ff0000"};
  padding: 2px 18px;
  background-color: ${(props) =>
    props.status === "success"
      ? "#18c09017"
      : props.status === "pending"
      ? "#ffc80017"
      : "#ff000017"};
  width: fit-content;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  font-weight: 600;
`;

const TransactionRow = ({
  code,
  date,
  time,
  status,
  title,
  subject,
  count,
  gif,
}) => {
  const [openPrint, setOpenPrint] = useState(false);

  return (
    <TableRow className="odd:bg-slate-50 hover:bg-black/10 py-5 duration-200">
      <TableCell>
        <div>
          <Code>TR-{code}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Date>
            {date} | {time}
          </Date>
        </div>
      </TableCell>
      <TableCell>
        <Status status={status}>
          {status === "success"
            ? "موفق"
            : status === "pending"
            ? "معلق"
            : "ناموفق"}
        </Status>
      </TableCell>
      <TableCell>
        <Title>{title}</Title>
      </TableCell>
      <TableCell>
        <Subject>
          <Image
            width={300}
            height={300}
            alt="doctor"
            loading="lazy"
            src={gif}
          />
          <Title>{subject}</Title>
        </Subject>
      </TableCell>
      <TableCell>
        <div>
          <Title>{convertToPersian(count)}</Title>
        </div>
      </TableCell>
      <TableCell>
        <Print onClick={() => setOpenPrint(true)}>
          <LuEye size={20} />
        </Print>
      </TableCell>
      {openPrint && (
        <PrintModal
          code={code}
          date={date}
          time={time}
          status={status}
          title={title}
          subject={subject}
          count={count}
          gif={gif}
          setOpenPrint={setOpenPrint}
        />
      )}
    </TableRow>
  );
};

export default TransactionRow;
