// Import React, useEffect, useState, useRequest and styled components
import React, { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import styled from "styled-components";

// Create styled components for table wrapper, table, header table and tr
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
`;

const HeaderTable = styled.thead`
  background: #e9e9e9;
  height: 50px;
`;

const Tr = styled.tr`
  height: 60px !important;
  padding: 5px;
`;

// Create Transactions component
const Transactions = () => {
  // Set transactions state and link state
  const [transactions, setTransactions] = useState([]);
  const [link, setLink] = useState("user/transactions?page=1");
  
  // Use useRequest hook
  const { Request } = useRequest();

  // Fetch transactions on mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Fetch transactions
  async function fetchTransactions() {
    const response = await Request(link);
    const newData = response?.data?.data || [];
    if (newData.length > 0) {
      setTransactions((prevTransactions) => [...prevTransactions, ...newData]);
    }
    // Get next link from response data
    const nextLink = response?.data?.links?.next;
    if (nextLink) {
      setLink(nextLink.replace("https://api.rgb.irpsc.com/api/", ""));
    } else {
      setLink(null); // set link to null if no more data available
    }
  }

  // Handle scroll event
  function handleScroll(event) {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight && link) {
      fetchTransactions();
    }
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
            <Tr key={index}>
              <td>{transaction.id}</td>
              <td>{transaction.date}  {transaction.time}</td>
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
    </TableWrapper>
  );
};

export default Transactions;