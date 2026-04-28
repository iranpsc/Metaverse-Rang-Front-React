import { Tooltip as ReactTooltip } from "react-tooltip";
import Row from "./Row";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { Skeleton } from "../../../../components/Skeleton";

const Container = styled.div`
  border-radius: 0.25rem;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
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
  &:nth-of-type(1) {
    width: 80px;
  }
  &:nth-of-type(2) {
    width: 350px;
  }
  &:nth-of-type(3) {
    width: 210px;
  }
  div {
    width: fit-content;
  }
`;

// اسکلتون برای ردیف جدول (شبیه تصویر)
const SkeletonRow = styled.tr`
  td {
    padding: 15px 20px;
    border-bottom: 1px solid #454545;
  }
`;

const NotesList = ({ notes, isLoading }) => {
  // اسکلتون لودینگ - فقط ردیف‌ها اسکلتون میشن، هدر ثابت
  if (isLoading) {
    return (
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader style={{ width: "100px" }}>
                <div>{getFieldTranslationByNames("1357")}</div>
              </TableHeader>
              <TableHeader style={{ width: "350px" }}>
                <div>{getFieldTranslationByNames("1358")}</div>
              </TableHeader>
              <TableHeader style={{ width: "210px" }}>
                <div>{getFieldTranslationByNames("1359")}</div>
              </TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonRow key={index}>
                <td style={{ textAlign: "center" }}>
                  <Skeleton width="50px" height="18px" radius="4px" />
                </td>
                <td>
                  <Skeleton width="230px" height="18px" radius="4px" />
                </td>
                <td>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                    <Skeleton width="64px" height="50px" radius="8px" />
                    <Skeleton width="97.3px" height="50px" radius="8px" />
                  </div>
                </td>
              </SkeletonRow>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader style={{ width: "100px" }}>
              <div>{getFieldTranslationByNames("1357")}</div>
            </TableHeader>
            <TableHeader style={{ width: "350px" }}>
              <div>{getFieldTranslationByNames("1358")}</div>
            </TableHeader>
            <TableHeader style={{ width: "210px" }}>
              <div>{getFieldTranslationByNames("1359")}</div>
            </TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {notes.map((note) => (
            <Row key={note.id} {...note} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default NotesList;