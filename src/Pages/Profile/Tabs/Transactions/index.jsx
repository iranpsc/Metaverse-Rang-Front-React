import React, { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  padding: 10px;
  border-spacing: 0;
  direction: rtl;
  & td {
    text-align: center;
  }
  height:100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
const HeaderTable = styled.thead`
  background: #e9e9e9;
  height: 50px;
`;
const Tr = styled.tr`
  height: 60px !important;
  padding: 5px;
`;
const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { Request } = useRequest();

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const response = await Request("user/transactions");
    if (Array.isArray(response.data.data)) {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        ...response.data.data,
      ]);
    }
  }

  function handleScroll(event) {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      fetchTransactions();
    }
  }

  return (
    <Table onScroll={handleScroll}>
      <HeaderTable>
        <Tr>
          <th style={{ padding: "5px" }}>شناسه تراکنش</th>
          <th style={{ padding: "5px" }}>تاریخ وساعت ارسال</th>
          <th style={{ padding: "5px" }}>وضعیت</th>
          <th style={{ padding: "5px" }}>عنوان</th>
          <th style={{ padding: "5px" }}>موضوع</th>
          <th style={{ padding: "5px" }}>مقدار</th>
          <th style={{ padding: "5px" }}>مشاهده جزئیات و چاپ</th>
        </Tr>
      </HeaderTable>
      <tbody>
        {transactions.map((transaction, index) => (
          <Tr key={index}>
            <td>{transaction.id}</td>
            <td>{transaction.created_at}</td>
            <td>{transaction.status}</td>
            <td>{transaction.type}</td>
            <td>{transaction.asset}</td>
            <td>{transaction.amount}</td>
            <td>
              <button>مشاهده</button>
           
              <button>چاپ</button>
            </td>
          
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Transactions;