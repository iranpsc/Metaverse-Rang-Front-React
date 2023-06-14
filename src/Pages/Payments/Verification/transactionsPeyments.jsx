import styled from "styled-components";
import { useNavigate } from "react-router";
import Modal from "../../../Components/Modal";

import FailedTransactionImage from "../../../Assets/images/failed-transaction.png";
import SuccessTransactionImage from "../../../Assets/images/successful-transaction.png";

import StoreImage from "../../../Assets/images/shop.png";
import { TransactionContext } from "../../../Layouts/Map";
import { useContext } from "react";

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
const DetaileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 0.5rem;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
`;
const Border = styled.div`
  display: flex;
  height: 2px;
  width: 90%;
  background: #777;
`;
function FailedTransaction({data}) {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Image src={FailedTransactionImage} />
        <FailedTitle>تراکنش شما انجام نشد</FailedTitle>
      </Header>

      <Body className="red-box-shadow">
        <DetaileContainer>
          <Div>
            <Cell>شناسه تراکنش</Cell>
            <Cell>تاریخ واریز</Cell>
            <Cell>ساعت واریز</Cell>
          </Div>
          <Border ></Border>
          <Div>
            <Cell>{data.id}</Cell>
            <Cell>{data.date}</Cell>
            <Cell>{data.time}</Cell>
          </Div>
          <Body className="red-box-shadow">
          <DetaileContainer>
          <Div>
            <Cell>عنوان پرداختی</Cell>
            <Cell>تعداد</Cell>
            <Cell>مبلغ واریزی</Cell>
          </Div>
          <Border ></Border>
          <Div>
            <Cell>{data.type}</Cell>
            <Cell>{data.amount}</Cell>
            <Cell>{data.time}</Cell>
          </Div>
        </DetaileContainer>
          </Body>
        </DetaileContainer>
      </Body>
    </Container>
  );
}

function SuccessTransaction({ data }) {
  return (
    <Container>
      <Header>
        <Image src={SuccessTransactionImage} />
        <SuccessTitle>از خرید شما سپاس گذاریم</SuccessTitle>
      </Header>

      <Body className="green-box-shadow">
      <DetaileContainer>
          <Div>
            <Cell>شناسه تراکنش</Cell>
            <Cell>تاریخ واریز</Cell>
            <Cell>ساعت واریز</Cell>
          </Div>
          <Border ></Border>
          <Div>
            <Cell>{data.id}</Cell>
            <Cell>{data.date}</Cell>
            <Cell>{data.time}</Cell>
          </Div>
          <Body className="green-box-shadow">
          <DetaileContainer>
          <Div>
            <Cell>عنوان پرداختی</Cell>
            <Cell>تعداد</Cell>
            <Cell>مبلغ واریزی</Cell>
          </Div>
          <Border ></Border>
          <Div>
            <Cell>{data.type}</Cell>
            <Cell>{data.amount}</Cell>
            <Cell>{data.time}</Cell>
          </Div>
        </DetaileContainer>
          </Body>
        </DetaileContainer>
      </Body>
    </Container>
  );
}

export default function TransactionPeyments() {
  const { selectedTransaction } = useContext(TransactionContext);
  return (
    <Modal title="جزئیات تراکنش ">
    {selectedTransaction.status === 1 ? ( <SuccessTransaction data={selectedTransaction} /> ) : selectedTransaction.status === -1 ? ( <FailedTransaction data={selectedTransaction} /> ) : ( "" )}
    </Modal>
  );
}
