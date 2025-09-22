import styled from "styled-components";
import { convertToPersian } from "../../../../../services/Utility";

const TableRow = styled.tr`
  background-color: transparent;
  &:nth-child(odd) {
    background-color: #f9fafb; /* equivalent to slate-50 */
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  transition: background-color 0.2s ease-in-out;
`;

const TableCell = styled.td`
  padding: 15px 20px;
  padding-right: 30px;
  border-bottom: 1px solid #454545;
  color: ${(props) => props.theme.colors.newColors.shades.title};

  div {
    display: inline-block; /* Ensures proper alignment */
    width: auto;
  }
`;

const Code = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 0; /* Removes default margin for h2 */
`;

const Row = ({
  name = "",
  psc = "",
  plus = "",
  cage = "",
  gif = "",
  rial = "",
}) => {
  const renderContent = (content) => <Code>{convertToPersian(content)}</Code>;
  return (
    <TableRow>
      {[name, psc, plus, cage, rial].map((value, index) => (
        <TableCell key={index}>
          <div>{renderContent(value)}</div>
        </TableCell>
      ))}
      <TableCell>
        <div>
          <Code>{gif}</Code>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
