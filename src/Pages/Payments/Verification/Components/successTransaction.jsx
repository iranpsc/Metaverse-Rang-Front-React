import React from "react";
import styled from "styled-components";
import FailedTransactionImage from "../../../../Assets/images/transaction-1.png";
import SuccessTransactionImage from "../../../../Assets/images/transaction-2.png";
import factorImage from "../../../../Assets/images/factor-1.png";
import PrintImage from "../../../../Assets/images/print.png";
// import html2pdf from "html2pdf.js";

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Header = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img``;

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

const Cell = styled.span`
  padding: 16px;
  text-align: center;
`;

const DetailContainer = styled.div`
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
  flex-direction: row-reverse;
`;

const Border = styled.div`
  display: flex;
  height: 2px;
  width: 88%;
  background: #777;
`;

const ContainerPdf = styled.div`
  display: none;
  border: 4px solid black;
`;

const handleDownload = () => {
  const content = document.getElementById("my-component").innerHTML;

  const opt = {
    filename: "myDocument.pdf",
    margin: [0, 0, 0, 0],
    image: { type: "jpeg", quality: 10 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "mm", format: "a5" },
  };

  // html2pdf().set(opt).from(content).save();
};

const SuccessTransaction = ({ data }) => {
  const getImageSrc = () => {
    return data.action === "deposit"
      ? FailedTransactionImage
      : SuccessTransactionImage;
  };

  const getActionLabel = () => {
    if (data.action === "deposit") {
      return " خرید";
    } else if (data.action === "withdraw") {
      return " واریز";
    }
    return "";
  };

  const renderTransactionDetails = () => {
    return (
      <>
        <Div>
          <Cell>
            {data.action === "deposit"
              ? "شناسه خرید"
              : data.action === "withdraw"
              ? "شناسه واریز"
              : ""}
          </Cell>
          <Cell>تاریخ{getActionLabel()}</Cell>
          <Cell>ساعت{getActionLabel()}</Cell>
        </Div>
        <Border></Border>
        <Div>
          <Cell>{data.id}</Cell>
          <Cell>{data.date}</Cell>
          <Cell>{data.time}</Cell>
        </Div>
      </>
    );
  };

  const renderPaymentDetails = () => {
    return (
      <DetailContainer>
        <Div>
          <Cell>عنوان پرداختی</Cell>
          <Cell>تعداد</Cell>
          <Cell>مبلغ{getActionLabel()}ی</Cell>
        </Div>
        <Border></Border>
        <Div>
          <Cell>{data.type}</Cell>
          <Cell>{data.amount}</Cell>
          <Cell>{data.time}</Cell>
        </Div>
      </DetailContainer>
    );
  };

  const renderPDFDetails = () => {
    return (
      <>
        <span style={{ position: "absolute", top: "45%", right: "17%" }}>
          {data.action === "deposit"
            ? "شناسه خرید"
            : data.action === "withdraw"
            ? "شناسه واریز"
            : ""}
        </span>
        <span style={{ position: "absolute", top: "45%", right: "45%" }}>
          تاریخ{getActionLabel()}
        </span>
        <span style={{ position: "absolute", top: "45%", left: "14%" }}>
          ساعت{getActionLabel()}
        </span>
        <span style={{ position: "absolute", top: "50%", right: "17%" }}>
          {data.id}
        </span>
        <span style={{ position: "absolute", top: "50%", right: "45%" }}>
          {data.date}
        </span>
        <span style={{ position: "absolute", top: "50%", left: "14%" }}>
          {data.time}
        </span>
        <span style={{ position: "absolute", top: "61%", right: "17%" }}>
          {data.action === "deposit"
            ? "شناسه خرید"
            : data.action === "withdraw"
            ? "شناسه واریز"
            : ""}
        </span>
        <span style={{ position: "absolute", top: "61%", right: "45%" }}>
          تاریخ{getActionLabel()}
        </span>
        <span style={{ position: "absolute", top: "61%", left: "14%" }}>
          ساعت{getActionLabel()}
        </span>
        <span style={{ position: "absolute", top: "66%", right: "17%" }}>
          {data.id}
        </span>
        <span style={{ position: "absolute", top: "66%", right: "45%" }}>
          {data.date}
        </span>
        <span style={{ position: "absolute", top: "66%", left: "14%" }}>
          {data.time}
        </span>
      </>
    );
  };

  return (
    <>
      <Container>
        <Header>
          <Image src={getImageSrc()} />
          <SuccessTitle>از خرید شما سپاس گذاریم</SuccessTitle>
        </Header>
        <Body className="green-box-shadow">
          {renderTransactionDetails()}
          <Body className="green-box-shadow">
            {renderPaymentDetails()}
            <Image
              src={PrintImage}
              style={{
                position: "absolute",
                width: "90px",
                bottom: "0",
                cursor: "pointer",
              }}
              onClick={handleDownload}
            />
          </Body>
        </Body>
      </Container>
      <ContainerPdf id="my-component">
        <Image src={factorImage} style={{ width: "99%" }} />
        {renderPDFDetails()}
      </ContainerPdf>
    </>
  );
};

export default SuccessTransaction;
