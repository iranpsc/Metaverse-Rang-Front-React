import { Tooltip as ReactTooltip } from "react-tooltip";
import Row from "./Row";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  border-radius: 0.25rem;

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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px !important;
  overflow: hidden !important;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 20px 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.newColors.shades.title};
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
            <TableHeader style={{ width: "100px" }}>
              <div>{getFieldTranslationByNames("send-vod", "note code")}</div>
            </TableHeader>
            <TableHeader style={{ width: "350px" }}>
              <div>
                {getFieldTranslationByNames("send-vod", "title of the note")}
              </div>
            </TableHeader>
            <TableHeader style={{ width: "210px" }}>
              <div>{getFieldTranslationByNames("send-vod", "operation")}</div>
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
