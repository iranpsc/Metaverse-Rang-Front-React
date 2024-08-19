import { convertToPersian } from "../../../../lib/convertToPersian";
import styled from "styled-components";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: #ffffff;
  padding-right: 30px;
  div {
    width: fit-content;
  }
`;

const Code = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

const Row = ({ name, psc, plus, cage, gif, rial }) => {
  return (
    <TableRow className="odd:bg-slate-50 hover:bg-black/10 py-5 duration-200">
      <TableCell>
        <div>
          <Code>{name}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Code>{convertToPersian(psc)}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Code>{convertToPersian(plus)}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Code>{convertToPersian(cage)}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Code>{convertToPersian(rial)}</Code>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <Code>{gif}</Code>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
