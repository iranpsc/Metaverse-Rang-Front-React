import React, { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import styled from "styled-components";
import useRequest from "../../services/Hooks/useRequest";
import {
  ToastError,
  ToastSuccess,
  getFieldTranslationByNames,
} from "../../services/Utility";
import Submit from "../../Components/Buttons/Submit";
import Input from "../../Components/Inputs/Input";

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
  color: #ff3e3e;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 45px;
`;

const TapIp = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 156.25% */
`;

const Details = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 156.25% */
`;

const Information = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-top: 29px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
`;
const ContainerInput = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 75%;
  }
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
    <Modal title={getFieldTranslationByNames("196")}>
      <Container>
        {!isEmail ? (
          <>
            <Header>
              {getFieldTranslationByNames("200")}
            </Header>
            <TapIp>{ip}</TapIp>
            <P>
              {getFieldTranslationByNames("201")}
            </P>
            <Details style={{ marginTop: "24px" }}>
              {getFieldTranslationByNames("202")}
              <span style={{ fontWeight: 500, color: "red" }}>
                {getFieldTranslationByNames("203")}{" "}
              </span>
              {getFieldTranslationByNames("247")}
            </Details>
            <Details>
              {getFieldTranslationByNames("248")}
            </Details>
            <Details>
              {getFieldTranslationByNames("226")}
            </Details>

            <Submit
              type="secondary"
              text={getFieldTranslationByNames("227")}
              responsive
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
              {getFieldTranslationByNames("197")}
            </Header>
            <P>
              {getFieldTranslationByNames("198")}
            </P>
            <Details style={{ marginTop: "25px" }}>
              {getFieldTranslationByNames("199")}
            </Details>
            <Details>
              {getFieldTranslationByNames("228")}
            </Details>
            <ContainerInput>
              <Input
                name="email"
                type="email"
                placeholder={getFieldTranslationByNames("2")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                options={{
                  style: {
                    marginTop: 25,
                  },
                }}
              />
            </ContainerInput>
            <Submit
              className="mt-2"
              type="secondary"
              text={getFieldTranslationByNames("229")}
              responsive
              options={{
                onClick: onEmailSender,
                style: {
                  marginTop: 10,
                },
              }}
            ></Submit>
          </>
        )}
      </Container>
      <Information>
        {getFieldTranslationByNames("224")}
        <br />
        <a
          href="https://rgb.irpsc.com/overview"
          target={"_blank"}
          rel="noreferrer"
          className="link text-1 "
        >
          {getFieldTranslationByNames("225")}
        </a>{" "}
        {getFieldTranslationByNames("204")}
      </Information>
    </Modal>
  );
};

export default Ip;
