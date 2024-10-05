import { Tooltip as ReactTooltip } from "react-tooltip";
import Row from "./Row";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 0.25rem;
  direction: rtl;
  overflow-x: auto;
  /* min-height: 93vh; */
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  text-align: right;
  margin-top: 5px;
  border-collapse: collapse;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const TableHead = styled.thead`
  background-color: #1a1a18;
  border-radius: 10px !important;
  overflow: hidden !important;
`;

const TableRow = styled.tr``;


const TableHeader = styled.th`
  padding: 20px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
  text-align: center;
  &:nth-of-type(2) {
    padding-right: 37px;
  }
  div {
    width: fit-content;
  }
`;

const NotesList = ({ notes }) => {
  const reversedNotes = [...notes].reverse();
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader style={{width:"100px"}}>
              <div>کد یادداشت</div>
            </TableHeader>
            <TableHeader style={{width:"350px"}}>
              <div>عنوان یادداشت</div>
            </TableHeader>
            <TableHeader style={{width:"210px"}}>
              <div>عملیات ها</div>
            </TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
            {reversedNotes.map((note) => (
              <Row key={note.id} {...note} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default NotesList;
