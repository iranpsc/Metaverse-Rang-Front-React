import React from "react";
import Modal from "../../Components/Modal";
import styled from "styled-components";
import Submit from "../../Components/Buttons/Submit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: x-large;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Header = styled.p`
  color: ${(props) => props.theme.textDetails};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 30px;
`;

const Details = styled.p`
  color: ${(props) => props.theme.textDetails};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
`;

const Information = styled.p`
  color: ${(props) => props.theme.Information};
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
`;

const Link = styled.a`
  color: #008bf8;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  margin-top: 10px;
`;
const EmailVerification = () => {
  return (
    <Modal title={"فعالسازی حساب شهروندی"}>
      <Container>
        <Header>
          <br /> یک ایمیل به آدرس
          <br /> m.s.alizadeh99@gmail.com <br />
          ارسال شده است.
        </Header>
        <Details style={{ marginTop: "11px" }}>
          جهت تایید و فعال سازی حساب خود, بر روی لینک
        </Details>
        <Details>بر روی لینک موجود در ایمیل کلیک کنید</Details>
        <Submit
          type="secondary"
          text={"مشاهده ایمیل"}
          responsive
          options={{
            style: {
              marginTop: "30px",
            },
          }}
        />
        <Link>ارسال مجدد ایمیل تایید حساب شهروندی</Link>
        <Information>
          برای کسب اطلاعات بیشتر و پاسخ به سوالات، از
          <br /> وبسایت دیدن نمایید.
        </Information>
      </Container>
    </Modal>
  );
};

export default EmailVerification;
