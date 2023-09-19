import React, { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import styled from "styled-components";
import useRequest from "../../Services/Hooks/useRequest";
import {
  ToastError,
  ToastSuccess,
  getFieldTranslationByNames,
} from "../../Services/Utility";
import Submit from "../../Components/Buttons/Submit";
import Input from "../../Components/Inputs/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: x-large;
  align-items: center;
  justify-content: center;
`;

const Header = styled.p`
  color: #ff3e3e;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 45px;
`;

const TapIp = styled.p`
  color: ${(props) => props.theme.textIp};
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`;

const P = styled.p`
  color: ${(props) => props.theme.textDetail};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 156.25% */
`;

const Details = styled.p`
  color: ${(props) => props.theme.textDetails};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 156.25% */
`;

const Information = styled.p`
  color: ${(props) => props.theme.Information};
  text-align: center;
  margin-top: 29px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
`;

const Ip = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const [ip, setIp] = useState("");

  useEffect(() => {
    // Fetch the IP here and set it in the state
    const fetchIp = async () => {
      try {
        const response = await Request("ip");
        setIp(response.data);
      } catch (error) {
        // Handle error if needed
        console.error(error);
      }
    };

    fetchIp();
  }, []);

  const onIpSender = async () => {
    try {
      const ip = await Request("ip");
      const response = await Request("ip/send-to-support", HTTP_METHOD.POST, {
        ip: ip.data,
        email: "",
      });
      setIsEmail(true);
      ToastSuccess("ممنون از همراهی شما ");
    } catch (err) {
      console.error(err);
      ToastError("مشکلی در ارسال پیش آمد .لطفاً بعداً درخواست ارسال کنید");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onEmailSender = async () => {
    if (!validateEmail(email)) {
      ToastError("فرمت ایمیل معتبر نیست");
      return;
    }

    try {
      const response = await Request("ip/send-to-support", HTTP_METHOD.POST, {
        ip,
        email,
      });
      ToastSuccess("ممنون از همراهی شما ");
    } catch (err) {
      console.error(err);
      ToastError("مشکلی در ارسال پیش آمد");
    }
  };

  return (
    <Modal title={getFieldTranslationByNames("ip-checker", "access level")}>
      <Container>
        {!isEmail ? (
          <>
            <Header>
              {getFieldTranslationByNames("ip-checker", "unauthorized ip")}
            </Header>
            <TapIp>{ip}</TapIp>
            <P>
              {getFieldTranslationByNames(
                "ip-checker",
                "your ip appears to be non-Iranian. If you are using a VPN, please turn it off and then reload the page"
              )}
            </P>
            <Details style={{ marginTop: "24px" }}>
              اگر از
              <span style={{ fontWeight: 500, color: "red" }}> VPN </span>
              استفاده میکنید آن را خاموش کرده
            </Details>
            <Details>سپس صفحه را مجدد بارگزاری کنید </Details>
            <Submit
              type="secondary"
              text={getFieldTranslationByNames("ip-checker", "authorize ip")}
              options={{
                onClick: onIpSender,
                style: {
                  marginTop: 24,
                },
              }}
            />
          </>
        ) : (
          <>
            <Header style={{ color: "#18C08F" }}>
              {getFieldTranslationByNames("ip-checker", "check ip status")}
            </Header>
            <P>
              {getFieldTranslationByNames(
                "ip-checker",
                "time required 24 hours"
              )}
            </P>
            <Details> جهت اطلاع رسانی از شرح اقدامات</Details>
            <Details>ایمیل خود را در زیر وارد کنید </Details>
            <Input
              name="email"
              type="email"
              placeholder={getFieldTranslationByNames(
                "login",
                "enter username or email"
              )}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Submit
              className="mt-2"
              type="secondary"
              text={getFieldTranslationByNames("ip-checker", "let me know")}
              options={{
                onClick: onEmailSender,
                style: {
                  marginTop: 24,
                },
              }}
            ></Submit>
          </>
        )}
      </Container>
      <Information>
        برای کسب اطلاعات بیشتر و پاسخ به سوالات، از
        <br />
        <a href="https://rgb.irpsc.com/" className="link text-1 ">
          وبسایت ما
        </a>
        دیدن کنید
      </Information>
    </Modal>
  );
};

export default Ip;
