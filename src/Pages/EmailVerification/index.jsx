import React, { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import styled from "styled-components";
import Submit from "../../Components/Buttons/Submit";
import gmailSvg from "../../Assets/svg/gmail.svg";
import outlookSvg from "../../Assets/svg/outlook.svg";
import mailSvg from "../../Assets/svg/mail.svg";
import yahooSvg from "../../Assets/svg/yahoo.svg";
import {
  ToastSuccess,
  getFieldTranslationByNames,
} from "../../Services/Utility";
import useRequest from "../../Services/Hooks/useRequest";

const EMAIL_DOMAINS = {
  yahoo: "https://mail.yahoo.com",
  gmail: "https://mail.google.com",
  outlook: "https://outlook.live.com",
};

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
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 30px;
`;

const Details = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  margin-top: 11px;
`;

const Information = styled.p`
  color: ${(props) => props.theme.colors.primary};
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
  cursor: pointer;
`;

const EmailVerification = () => {
  const { Request, HTTP_METHOD } = useRequest();
  const data = JSON.parse(localStorage.getItem("email"));
  const [rerenderButton, setRerenderButton] = useState(false);

  const emailDomain = data.email.split("@")[1].toLowerCase();
  const [emailServiceText, setEmailServiceText] = useState(
    getEmailServiceText(emailDomain)
  );
  const [emailServiceImageSrc, setEmailServiceImageSrc] = useState(
    getEmailServiceImageSrc(emailDomain)
  );

  function getEmailServiceText(domain) {
    switch (domain) {
      case "yahoo.com":
        return "yahoo";
      case "gmail.com":
        return "gmail";
      case "outlook.com":
      case "hotmail.com":
        return "outlook";
      default:
        return "email";
    }
  }

  function getEmailServiceImageSrc(domain) {
    switch (domain) {
      case "yahoo.com":
        return yahooSvg;
      case "gmail.com":
        return gmailSvg;
      case "outlook.com":
      case "hotmail.com":
        return outlookSvg;
      default:
        return mailSvg;
    }
  }

  const resendEmailHandler = () => {
    Request(
      "email/verification-notification",
      HTTP_METHOD.GET,
      {},
      { Authorization: `Bearer ${data.token}` }
    ).then((res) => {
      localStorage.removeItem("email");
      ToastSuccess("ایمیل تایید مجدد ارسال شد");
    });
  };

  useEffect(() => {
    setEmailServiceImageSrc(getEmailServiceImageSrc(emailDomain));
    setEmailServiceText(getEmailServiceText(emailDomain));
    setRerenderButton(true);
  }, [emailDomain]);

  const openEmailService = () => {
    const emailServiceURL = EMAIL_DOMAINS[emailServiceText];
    if (emailServiceURL) {
      window.open(emailServiceURL, "_blank");
    }
  };

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
          <br /> {data.email} <br />
          {getFieldTranslationByNames("register", "sent")}
        </Header>
        <Details>
          {getFieldTranslationByNames("register", "to confirm and activate")}
        </Details>
        <Details>
          {getFieldTranslationByNames("register", "on the link in the email")}
        </Details>
        {rerenderButton && (
          <Submit
            type="secondary"
            text={getFieldTranslationByNames(
              "register",
              `view ${emailServiceText}`
            )}
            responsive
            options={{
              onClick: openEmailService,
              style: {
                marginTop: "30px",
              },
            }}
          >
            <img src={emailServiceImageSrc} alt="" width={"21px"} />
          </Submit>
        )}
        <Link onClick={resendEmailHandler}>
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
          </a>
          {getFieldTranslationByNames("login", "you agree")}
        </Information>
      </Container>
    </Modal>
  );
};

export default EmailVerification;
