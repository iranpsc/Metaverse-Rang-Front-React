import styled from "styled-components";

//icons
import PscCoin from "../../../../Assets/images/psc-2.png";
import DataBaseIcon from "../../../../Assets/images/database.png";
import SatisfactionICoin from "../../../../Assets/images/satisfaction.png";
import IncreaseICoin from "../../../../Assets/images/increase.png";
import BankICoin from "../../../../Assets/images/bank.png";
import SeenICoin from "../../../../Assets/images/eye-scanner.png";
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
export default function RequestSent() {
  return (
    <Table>
      <HeaderTable>
        <tr>
          <th>ارسال به</th>
          <th>تاریخ وساعت ارسال</th>
          <th>نسبت خانوادگی</th>
          <th>وضعیت درخواست</th>
          <th>پاداش</th>
          <th></th>
        </tr>
      </HeaderTable>
      <TableBody>
        <Tr>
          <td>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              HM-2000004
            </a>
          </td>
          <td>1401/01/01 &nbsp; 19:50:00</td>
          <td>خواهر</td>
          <td>در دست بررسی</td>
          <TdGift>
            <GiftIcon src={PscCoin} />
            1000
            <GiftIcon src={DataBaseIcon} />
            26.3%
            <GiftIcon src={BankICoin} />
            32%
            <GiftIcon src={IncreaseICoin} />
            32%
            <GiftIcon src={SatisfactionICoin} />
            0.5
          </TdGift>
          <td>
            <GiftIcon src={SeenICoin} style={{ cursor: "pointer" }} />
          </td>
        </Tr>
        <Tr>
          <td>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              HM-2000004
            </a>
          </td>
          <td>1401/01/01 &nbsp; 19:50:00</td>
          <td>خواهر</td>
          <td>در دست بررسی</td>
          <TdGift>
            <GiftIcon src={PscCoin} />
            1000
            <GiftIcon src={DataBaseIcon} />
            26.3%
            <GiftIcon src={BankICoin} />
            32%
            <GiftIcon src={IncreaseICoin} />
            32%
            <GiftIcon src={SatisfactionICoin} />
            0.5
          </TdGift>
          <td>
            <GiftIcon src={SeenICoin} style={{ cursor: "pointer" }} />
          </td>
        </Tr>
        <Tr>
          <td>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              HM-2000004
            </a>
          </td>
          <td>1401/01/01 &nbsp; 19:50:00</td>
          <td>خواهر</td>
          <td>در دست بررسی</td>
          <TdGift></TdGift>
          <td>
            <GiftIcon src={SeenICoin} style={{ cursor: "pointer" }} />
          </td>
        </Tr>
      </TableBody>
    </Table>
  );
}
