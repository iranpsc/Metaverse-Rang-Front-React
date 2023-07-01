import React, { useEffect, useState, useContext } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import styled from "styled-components";
import SeenICoin from "../../../../Assets/images/eye-scanner.png";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../../../../Layouts/Map";

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  padding: 10px;
  border-spacing: 0;
  direction: rtl;
  & td {
    text-align: center;
  }
  border-collapse: collapse;
`;

const HeaderTable = styled.thead`
  background: #e9e9e9;
  height: 50px;
`;

const Tr = styled.tr`
  height: 60px !important;
  padding: 5px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [link, setLink] = useState("user/transactions?page=1");
  const navigate = useNavigate();
  const { Request } = useRequest();
  const { setSelectedTransaction } = useContext(TransactionContext); // get setSelectedTransaction function from context

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const response = await Request(link);
    const newData = response?.data?.data || [];
    if (newData.length > 0) {
      setTransactions((prevTransactions) => [...prevTransactions, ...newData]);
    }
    const nextLink = response?.data?.links?.next;
    if (nextLink) {
      setLink(nextLink.replace("https://api.rgb.irpsc.com/api/", ""));
    } else {
      setLink(null);
    }
  }

  function handleScroll(event) {
    const element = event.target;
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight &&
      link
    ) {
      fetchTransactions();
    }
  }

  function handleRowClick(transaction) {
    setSelectedTransaction(transaction); // update selected transaction in context
    navigate("/metaverse/transaction");
  }

  return (
    <TableWrapper onScroll={handleScroll}>
      <Table>
        <HeaderTable>
          <Tr>
            <th style={{ padding: "5px" }}>شناسه تراکنش</th>
            <th style={{ padding: "5px" }}>تاریخ وساعت ارسال</th>
            <th style={{ padding: "5px" }}>وضعیت</th>
            <th style={{ padding: "5px" }}>عنوان</th>
            <th style={{ padding: "5px" }}>موضوع</th>
            <th style={{ padding: "5px" }}>مقدار</th>
            <th style={{ padding: "5px" }}>مشاهده/چاپ</th>
          </Tr>
        </HeaderTable>
        <tbody>
          {transactions.map((transaction, index) => (
            <Tr key={index} >
              <td>{transaction.id}</td>
              <td>
                {transaction.time} {transaction.date}
              </td>
              <td>
                {transaction.status === 1
                  ? "موفق"
                  : transaction.status === -1
                  ? "ناموفق"
                  : ""}
              </td>

              <td>{transaction.type}</td>
              <td>{transaction.asset}</td>
              <td>{transaction.amount}</td>
              <td>
                <Icon src={SeenICoin} onClick={() => handleRowClick(transaction)}/>
              </td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default Transactions;
