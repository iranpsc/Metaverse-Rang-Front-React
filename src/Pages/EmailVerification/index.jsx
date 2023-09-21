import React from "react";
import Modal from "../../Components/Modal";
import styled from "styled-components";
import Submit from "../../Components/Buttons/Submit";
import { getFieldTranslationByNames } from "../../Services/Utility";

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
    <Modal
      title={getFieldTranslationByNames(
        "register",
        "citizen account activation"
      )}
    >
      <Container>
        <Header>
          <br /> {getFieldTranslationByNames("register", "an email address")}
          <br /> m.s.alizadeh99@gmail.com <br />
          {getFieldTranslationByNames("register", "sent")}
        </Header>
        <Details style={{ marginTop: "11px" }}>
          {getFieldTranslationByNames("register", "to confirm and activate")}
        </Details>
        <Details>
          {getFieldTranslationByNames("register", "on the link in the email")}
        </Details>
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
        <Link>
          {getFieldTranslationByNames("register", "re-send the email")}
        </Link>
        <Information>
          {getFieldTranslationByNames(
            "login",
            "If you click on the login button"
          )}
          <br />
          <a
            href="https://rgb.irpsc.com/overview"
            target={"_blank"}
            rel="noreferrer"
            className="link text-1 "
          >
            {getFieldTranslationByNames("login", "terms of service contract")}
          </a>{" "}
          {getFieldTranslationByNames("login", "you agree")}
        </Information>
      </Container>
    </Modal>
  );
};

export default EmailVerification;
