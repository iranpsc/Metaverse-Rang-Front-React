import { LuEye } from "react-icons/lu";
import PrintModal from "./PrintModal";

import styled from "styled-components";
import { useState } from "react";
import {
  convertToPersian,
  getFieldTranslationByNames,
  persianNumbers,
} from "../../../../Services/Utility";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: ${(props) => props.theme.colors.newColors.shades.title};
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s linear;
  }
  svg {
    color: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  }
  svg:hover {
    color: ${(props) => props.theme.colors.newColors.primaryText};
  }
`;

const Status = styled.h3`
  color: ${(props) =>
    props.status == "1"
      ? "#18c090"
      : props.status == "-1"
      ? "#ffc800"
      : "#ff0000"};
  padding: 2px 18px;
  background-color: ${(props) =>
    props.status == "1"
      ? "#18c09017"
      : props.status == "-1"
      ? "#ffc80017"
      : "#ff000017"};
  width: fit-content;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  font-weight: 600;
`;

const TransactionRow = ({
  id,
  date,
  time,
  status,
  asset,
  type,
  amount,
  assetGif,
}) => {
  const [openPrint, setOpenPrint] = useState(false);
  const getAssetTitle = (assetType) => {
    switch (assetType) {
      case "red":
        return getFieldTranslationByNames("citizenship-account", "buy red");
      case "blue":
        return getFieldTranslationByNames("citizenship-account", "buy blue");
      case "yellow":
        return getFieldTranslationByNames("citizenship-account", "buy yellow");
      default:
        return assetType;
    }
  };
  return (
    <TableRow className="odd:bg-slate-50 hover:bg-black/10 py-5 duration-200">
      <TableCell>
        <div>
          <Code>{id}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Date>
            {convertToPersian(date)} | {convertToPersian(time)}
          </Date>
        </div>
      </TableCell>
      <TableCell>
        <Status status={status}>
          {status == "1"
            ? getFieldTranslationByNames("citizenship-account", "successful")
            : status == "0"
            ? getFieldTranslationByNames("citizenship-account", "unsuccessful")
            : status == "-1"
            ? getFieldTranslationByNames("citizenship-account", "suspended")
            : "بب"}
        </Status>
      </TableCell>
      <TableCell>
        <Title>{type}</Title>
      </TableCell>
      <TableCell>
        <Subject>
          <Image
            width={300}
            height={300}
            alt="doctor"
            loading="lazy"
            src={assetGif}
          />
          <Title>{getAssetTitle(asset)}</Title>
        </Subject>
      </TableCell>
      <TableCell>
        <div>
          <Title>{convertToPersian(amount)}</Title>
        </div>
      </TableCell>
      <TableCell>
        <Print onClick={() => setOpenPrint(true)}>
          <LuEye size={20} />
        </Print>
      </TableCell>
      {openPrint && (
        <PrintModal
          code={id}
          date={date}
          time={time}
          status={status}
          title={type}
          subject={status}
          count={amount}
          gif={assetGif}
          setOpenPrint={setOpenPrint}
        />
      )}
    </TableRow>
  );
};

export default TransactionRow;
