import styled from "styled-components";
import Message from "./Components/Message";
//icons
import PscCoin from "../../../../Assets/images/psc-2.png";
import DataBaseIcon from "../../../../Assets/images/database.png";
import SatisfactionICoin from "../../../../Assets/images/satisfaction.png";
import IncreaseICoin from "../../../../Assets/images/increase.png";
import BankICoin from "../../../../Assets/images/bank.png";
import SeenICoin from "../../../../Assets/images/eye-scanner.png";
import useRequest from "../../../../Services/Hooks/useRequest";
import { useEffect, useState } from "react";

const status = {
  '-1': 'رد شده',
  '1': 'تایید شده',
  '0': 'تایید نشده'
}

const Table = styled.table`
  width: 100%;
  padding: 10px;
  border-spacing: 0;
  direction: rtl;
  & td {
    text-align: center;
  }
`;
const HeaderTable = styled.thead`
  background: #e9e9e9;
  height: 50px;
`;
const Tr = styled.tr`
  height: 60px !important;
  padding: 5px;
`;
const GiftIcon = styled.img`
  width: 30px;
`;
const TdGift = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 10px;
  height: 60px;
  width: 434px;
`;
const TableBody = styled.tbody`
  tr:nth-of-type(odd) {
    background: white;
  }
  tr:nth-of-type(even) {
    background: #e9e9e9;
  }
`;
export default function RequestReceived() {
  const { Request } = useRequest();
  const [recived, setRecived] = useState([]);

  useEffect(() => {
    Request('dynasty/requests/recieved').then(response => {
      setRecived(response.data.data);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [show, setShowMessage] = useState(false);
  const [items, setItems] = useState({});
  const ShowHandel = (item) => {
    setShowMessage(true);
    setItems(item);
  };
  const handleBack = () => {
    setShowMessage(false);
    setItems(null);
  };
  return (
  <>{  show ? (
    <Message items={items} handleBack={handleBack} />
  ):(  <Table>
    <HeaderTable>
      <tr>
        <th style={{padding: "5px"}}>دریافت از</th>
        <th style={{padding: "5px"}}>تاریخ وساعت دریافت</th>
        <th style={{padding: "5px"}}>نسبت خانوادگی</th>
        <th style={{padding: "5px"}}>وضعیت درخواست</th>
        <th style={{padding: "5px"}}>پاداش</th>
        <th style={{padding: "5px"}}>مشاهده</th>
      </tr>
    </HeaderTable>
    <TableBody>
    {
      recived?.map(item => (
        <Tr>
          <td>
            <p style={{fontWeight:"600",color:"blue",cursor:"pointer"}} onClick={() => window.open(`https://rgb.irpsc.com/citizen/${item?.from_user?.code}`,'_blank')}>
              {item?.from_user?.code}
            </p>
          </td>
          <td>{item.Date?item.Date:"00:00:00 01/01/0101"}</td>
          <td>{item.relationship}</td>
          <td>{status[item.status]}</td>
          <TdGift>
        
          </TdGift>
          <td>
            <GiftIcon src={SeenICoin} style={{ cursor: "pointer" }}   onClick={() => ShowHandel(item)}/>
          </td>
        </Tr>
        ))
      }
    </TableBody>
  </Table>)}</>
  
  );
}
