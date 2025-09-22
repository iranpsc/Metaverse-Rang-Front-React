import styled from "styled-components";

//icons
import PscCoin from "../../../../assets/images/psc-2.png";
import DataBaseIcon from "../../../../assets/images/database.png";
import SatisfactionICoin from "../../../../assets/images/satisfaction.png";
import IncreaseICoin from "../../../../assets/images/increase.png";
import BankICoin from "../../../../assets/images/bank.png";
import SeenICoin from "../../../../assets/images/eye-scanner.png";
import { useEffect, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import Message from "./components/Message";

const Table = styled.table`
  width: 100%;
  padding: 10px;
  border-spacing: 0;

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

const status = {
  "-1": "رد شده",
  1: "تایید شده",
  0: "در دست بررسی",
};

export default function RequestSent() {
  const { Request } = useRequest();
  const [sent, setSent] = useState([]);

  useEffect(() => {
    Request("dynasty/requests/sent").then((response) => {
      setSent(response.data.data);
    });
  }, []);
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
    <>
      {show ? (
        <Message items={items} handleBack={handleBack} />
      ) : (
        <Table>
          <HeaderTable>
            <tr>
              <th style={{ padding: "5px" }}>ارسال به</th>
              <th style={{ padding: "5px" }}>تاریخ وساعت ارسال</th>
              <th style={{ padding: "5px" }}>نسبت خانوادگی</th>
              <th style={{ padding: "5px" }}>وضعیت درخواست</th>

              <th style={{ padding: "5px" }}>مشاهده</th>
            </tr>
          </HeaderTable>
          <TableBody>
            {sent?.map((item) => (
              <Tr>
                <td>
                  <p
                    style={{
                      fontWeight: "600",
                      color: "blue",
                      cursor: "pointer",
                      fontFamily: "Segoe UI",
                      textTransform: "uppercase",
                    }}
                    onClick={() =>
                      window.open(
                        `https://rgb.irpsc.com/citizen/${item?.to_user.code}`,
                        "_blank"
                      )
                    }
                  >
                    {item?.to_user.code}
                  </p>
                </td>
                <td>
                  {item.date} {item.time}
                </td>
                <td>{item?.relationship}</td>
                <td>{status[item?.status]}</td>
                <td>
                  <GiftIcon
                    src={SeenICoin}
                    style={{ cursor: "pointer" }}
                    onClick={() => ShowHandel(item)}
                  />
                </td>
              </Tr>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
