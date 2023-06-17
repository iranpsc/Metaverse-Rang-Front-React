import React from "react";
import styled from "styled-components";
import FailedTransactionImage from "../../../../Assets/images/transaction-1.png";
import SuccessTransactionImage from "../../../../Assets/images/transaction-2.png";
import rgbImage from "../../../../Assets/images/rgbIcon.png";
import PrintImage from "../../../../Assets/images/print.png";
import html2pdf from "html2pdf.js";

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
const ContainerPdfTitle = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  border: 1px solid black;
`;

const handleDownload = () => {
  console.log(11);
  const content = document.getElementById("my-component").innerHTML;

  const opt = {
    filename: "myDocument.pdf",
    margin: [0, 0, 0, 0],
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(content).save();
};

const SuccessTransaction = ({ data }) => {
  return (
    <>
      <Container>
        <Header>
          <Image
            src={
              data.action == "deposit"
                ? FailedTransactionImage
                : SuccessTransactionImage
            }
          />
          <SuccessTitle>از خرید شما سپاس گذاریم</SuccessTitle>
        </Header>

        <Body className="green-box-shadow">
          <DetailContainer>
            <Div>
              <Cell>
                {data.action == "deposit"
                  ? "شناسه خرید"
                  : data.action == "withdraw"
                  ? "شناسه واریز"
                  : ""}
              </Cell>
              <Cell>
                تاریخ
                {data.action == "deposit"
                  ? " خرید"
                  : data.action == "withdraw"
                  ? " واریز"
                  : ""}
              </Cell>
              <Cell>
                ساعت
                {data.action == "deposit"
                  ? " خرید"
                  : data.action == "withdraw"
                  ? " واریز"
                  : ""}
              </Cell>
            </Div>
            <Border></Border>
            <Div>
              <Cell>{data.id}</Cell>
              <Cell>{data.date}</Cell>
              <Cell>{data.time}</Cell>
            </Div>
            <Body className="green-box-shadow">
              <DetailContainer>
                <Div>
                  <Cell>عنوان پرداختی</Cell>
                  <Cell>تعداد</Cell>
                  <Cell>
                    مبلغ
                    {data.action == "deposit"
                      ? " خرید"
                      : data.action == "withdraw"
                      ? " واریز"
                      : ""}
                    ی
                  </Cell>
                </Div>
                <Border></Border>
                <Div>
                  <Cell>{data.type}</Cell>
                  <Cell>{data.amount}</Cell>
                  <Cell>{data.time}</Cell>
                </Div>
              </DetailContainer>
            </Body>
            <Image
              src={PrintImage}
              style={{ position: "absolute", width: "90px", bottom: "0" }}
              onClick={handleDownload}
            />
          </DetailContainer>
        </Body>
      </Container>
      <ContainerPdf id="my-component">
        <Container style={{ height: "100%" }}>
          <Div style={{ justifyContent: "space-around", paddingLeft: "25px" }}>
            <h2>فاکتور ثبت شده در متارنگ </h2>
            <Image src={rgbImage} style={{ width: "60px" }} />
          </Div>
          <Header>
            <Image
              src={
                data.action == "deposit"
                  ? FailedTransactionImage
                  : SuccessTransactionImage
              }
            />
            <SuccessTitle>از خرید شما سپاس گذاریم</SuccessTitle>
          </Header>

          <Body className="green-box-shadow">
            <DetailContainer>
              <Div>
                <Cell>
                  {data.action == "deposit"
                    ? "شناسه خرید"
                    : data.action == "withdraw"
                    ? "شناسه واریز"
                    : ""}
                </Cell>
                <Cell>
                  تاریخ
                  {data.action == "deposit"
                    ? " خرید"
                    : data.action == "withdraw"
                    ? " واریز"
                    : ""}
                </Cell>
                <Cell>
                  ساعت
                  {data.action == "deposit"
                    ? " خرید"
                    : data.action == "withdraw"
                    ? " واریز"
                    : ""}
                </Cell>
              </Div>
              <Border></Border>
              <Div>
                <Cell>{data.id}</Cell>
                <Cell>{data.date}</Cell>
                <Cell>{data.time}</Cell>
              </Div>
              <Body className="green-box-shadow">
                <DetailContainer>
                  <Div>
                    <Cell>عنوان پرداختی</Cell>
                    <Cell>تعداد</Cell>
                    <Cell>
                      مبلغ
                      {data.action == "deposit"
                        ? " خرید"
                        : data.action == "withdraw"
                        ? " واریز"
                        : ""}
                      ی
                    </Cell>
                  </Div>
                  <Border></Border>
                  <Div>
                    <Cell>{data.type}</Cell>
                    <Cell>{data.amount}</Cell>
                    <Cell>{data.time}</Cell>
                  </Div>
                </DetailContainer>
              </Body>
            </DetailContainer>
          </Body>
          <Div style={{ paddingLeft: "25px", marginTop: "10px" }}>
            <span>متارنگ پاسخگوی شما همراهان </span>
            <span>TR@rgb.irpsc.com</span>
          </Div>
          <Div style={{ justifyContent: "start", paddingLeft: "25px" }}>
            <span>02833698111</span>
          </Div>
        </Container>
      </ContainerPdf>
    </>
  );
};

export default SuccessTransaction;
