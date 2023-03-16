import styled from "styled-components";
import HomeSelect from "../../../../../Assets/images/home-check.png";
import HomeChange from "../../../../../Assets/images/change-house.png";

const Container = styled.div`
  width: 100%;
  border: 1px solid #777;
  border-radius: 10px;
  direction: rtl;
  height: 100%;
  table thead tr {
    display: block;
  }
  table tfoot tr {
    display: block;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  direction: rtl;
  overflow-y: scroll;
  & td {
    text-align: center;
  }
`;

const TableBody = styled.tbody`
  display: block;
  overflow-y: scroll;
  width: 287%;
  height: 395px;
  border-radius: 10px;
  tr:nth-of-type(odd) {
    background: white;
  }
  tr:nth-of-type(even) {
    background: #e9e9e9;
  }
`;

const IconFeature = styled.img`
  width: 80px;
  cursor: pointer;
`;

const TableHead = styled.thead`
  & td {
    border-bottom: 1px solid #777;
    width: 33%;
  }
`;

const Tr = styled.tr`
  height: 100px !important;
  padding: 5px;
  display: block;
  & td{
    width: 40.5%;
  }
`;

export default function TableFeature({ dynasty }) {
  return (
    <Container>
      <Table>
        <TableHead>
          <td>شناسه زمین</td>
          <td>متراژ</td>
          <td>انتقال</td>
        </TableHead>
        {dynasty?.["user-has-dynasty"] ? 
            <TableBody>
              {Object.keys(dynasty?.features).map(key => (
                <Tr>
                  <td>{dynasty?.features[key].properties_id}</td>
                  <td>{dynasty?.features[key].stability}</td>
                  <td>
                    <IconFeature src={HomeChange} />
                  </td>
                </Tr>
              ))}
            </TableBody>
          :
          <TableBody>
            {dynasty?.feature?.map(feature => (
              <Tr>
                <td>qa31a-3377</td>
                <td>15000</td>
                <td>
                  <IconFeature src={HomeSelect} />
                </td>
              </Tr>
            ))}
          </TableBody>
        }

      </Table>
    </Container>
  );
}
