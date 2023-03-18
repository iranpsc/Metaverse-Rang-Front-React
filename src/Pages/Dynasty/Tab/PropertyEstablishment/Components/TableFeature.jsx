import styled from "styled-components";
import HomeSelect from "../../../../../Assets/images/home-check.png";
import HomeChange from "../../../../../Assets/images/change-house.png";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError, ToastSuccess } from "../../../../../Services/Utility";
import { useNavigate } from "react-router-dom";

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

export default function TableFeature({ dynasty, setDynasty }) {
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();

  const updateDynasty = (id) => {
    Request(`dynasty/${dynasty.id}/update/${id}`, HTTP_METHOD.POST).then(response => {
      setDynasty({...response.data.data});
      ToastSuccess('VOD جدید با موفقیت بروز گردید.');
    }).catch(error => {
      if (error.response.status === 410) {
        ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!")
        return Navigate("/metaverse/confirmation");
      }
      ToastError(error.response.data.message);
    })
  }

  const selectDynasty = (id) => {
    Request(`dynasty/create/${id}`, HTTP_METHOD.POST).then(response => {
      setDynasty({...response.data.data});
      ToastSuccess('سلسله با موفقیت تاسیس شد.');
    }).catch(error => {
      if (error.response.status === 410) {
        ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!")
        return Navigate("/metaverse/confirmation");
      }
      ToastError(error.response.data.message);
    })
  }

  return (
    <Container>
      <Table>
        <TableHead>
          <td>شناسه VOD</td>
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
                  <IconFeature src={HomeChange} onClick={() => updateDynasty(dynasty?.features[key].id)}/>
                </td>
              </Tr>
            ))}
          </TableBody>
          :
          <TableBody>
            {dynasty?.features?.map(feature => (
              <Tr>
                <td>{feature?.properties_id}</td>
                <td>{feature?.stability}</td>
                <td>
                  <IconFeature src={HomeSelect} onClick={() => selectDynasty(feature.id)}/>
                </td>
              </Tr>
            ))}
          </TableBody>
        }

      </Table>
    </Container>
  );
}
