import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Modal from "../../../Components/Modal";

import FailedTransactionImage from "../../../Assets/images/failed-transaction.png";
import SuccessTransactionImage from "../../../Assets/images/successful-transaction.png";

import StoreImage from "../../../Assets/images/shop.png";
import useRequest from "../../../Services/Hooks/useRequest";

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Header = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img``;

const FailedTitle = styled.h2`
  color: red;
`;

const SuccessTitle = styled.h2`
  color: green;
`;

const Body = styled.div`
  margin-top: 16px !important;
  width: 95%;
  height: 60%;
  margin: auto;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & p {
    text-align: center;
    direction: rtl;
    font-size: 18px;
    line-height: 40px;
  }
`;

const Cell = styled.td`
  padding: 16px;
  text-align: center;
`;


const LANG_CONVERT = {
  blue: 'رنگ آبی',
  red: 'رنگ قرمز',
  yellow: 'رنگ زرد',
  psc: 'PSC',
  irr: 'ریال',
}


function FailedTransaction() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Header>
        <Image src={FailedTransactionImage} />
        <FailedTitle>تراکنش ناموفق</FailedTitle>
      </Header>

      <Body className="red-box-shadow">
        <p>
          متاسفانه درخواست شما با موفقیت انجام نشده است.<br/> جهت تلاش مجدد از
          دکمه زیر برای برگشت به فروشگاه اقدام نمایید.
        </p>

        <img className="cursor-pointer" src={StoreImage} alt='#' width={100} onClick={() => navigate('/metaverse/store')}/>
      </Body>
    </Container>
  )
}

function SuccessTransaction({ payment }) {  
  return (
    <Container>
      <Header>
        <Image src={SuccessTransactionImage} />
        <SuccessTitle>از خرید شما سپاس گذاریم</SuccessTitle>
      </Header>

      <Body className="green-box-shadow">
        <p>
        از حمایتتان ممنونیم و آماده خدمت‌ رسانی مجدد به شما هستیم.
        </p>

        <table>
          <tr>
            <Cell>شناسه تراکنش</Cell>
            <Cell>نام</Cell>
            <Cell>تعداد</Cell>
          </tr>
          <tr>
            <Cell>{payment.id}</Cell>
            <Cell>{LANG_CONVERT[payment.product]}</Cell>
            <Cell>{payment.count}</Cell>
          </tr>
        </table>
      </Body>
    </Container>
  )
}

export default function Verification() {
  const [payment, setPayment] = useState({});
  const { Request } = useRequest();

  useLayoutEffect(() => {
    Request('user/payments/latest').then(response => {
      setPayment(response.data.data);
    });

  }, [])

  return (
    <Modal title="وضعیت پرداخت" disabled>
      {payment.status === 1 ? <SuccessTransaction payment={payment}/> : <FailedTransaction />}
    </Modal>
  );
}
