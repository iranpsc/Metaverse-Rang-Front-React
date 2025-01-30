import Row from "./Row";
import cav from "../../../../../Assets/gif/cav.gif";
import gif from "../../../../../Assets/gif/satisfaction.gif";
import limit from "../../../../../Assets/gif/limit-of-influence.gif";
import psc from "../../../../../Assets/gif/psc.gif";
import pscplus from "../../../../../Assets/gif/pscplus.gif";
import rial from "../../../../../Assets/gif/rial.gif";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 0.25rem;

  overflow-x: auto;
  min-height: 93vh;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  margin-top: 5px;
  border-collapse: collapse;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 579px;
  height: 430px;
`;

const TableHead = styled.thead`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px !important;
  overflow: hidden !important;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.newColors.otherColors.text};
  position: relative;
  padding-bottom: 10px;
  text-align: center;
  &:nth-of-type(2) {
    padding-right: 45px;
  }
  div {
    width: fit-content;
  }
`;

const List = ({ members }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              <div>
                <img
                  width={30}
                  height={30}
                  alt="limit"
                  src={limit}
                  loading="lazy"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  width={30}
                  height={30}
                  alt="psc"
                  src={psc}
                  loading="lazy"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  width={30}
                  height={30}
                  alt="pscplus"
                  src={pscplus}
                  loading="lazy"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  width={30}
                  height={30}
                  alt="cav"
                  src={cav}
                  loading="lazy"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  width={30}
                  height={30}
                  alt="rial"
                  src={rial}
                  loading="lazy"
                />
              </div>
            </TableHeader>
            <TableHeader>
              <div>
                <img
                  width={30}
                  height={30}
                  alt="gif"
                  src={gif}
                  loading="lazy"
                />
              </div>
            </TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {members.map((member) => (
            <Row key={member.id} {...member} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
