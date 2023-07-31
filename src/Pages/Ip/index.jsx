import React, { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import styled from "styled-components";
import useRequest from "../../Services/Hooks/useRequest";
import { ToastError, ToastSuccess } from "../../Services/Utility";
const Box = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88%;
  background-color: #e9e9e9;
  border-radius: 5px;
  gap: 5px;
  margin-top: 1rem;
  cursor: pointer;
`;
const InputEmail = styled.input`
  height: 50px;
  width: 88%;
  border: 1px solid #777;
  border-radius: 5px;
  font-size: x-large !important;
  padding: 8px !important;
  ::placeholder {
    font-size: x-large;
    padding: 10px 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: x-large;
  align-items: center;
  justify-content: center;
`;
const Ip = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();
  const [ip, setIp] = useState("");
  useEffect(() => {
    Request("ip").then((response) => {
      setIp(response.data);
    });
  }, []);
  const onIpSender = () => {
    Request("ip/send-to-support", HTTP_METHOD.POST, {
      ip,
      email: "",
    })
      .then(() => {
        setIsEmail("true");
      })
      .catch(() => {
        ToastError("مشکلی در ارسال پیش آمد .لفطا بعدا درخواست ارسال کنید");
      });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onEmailSender = () => {
    if (!validateEmail(email)) {
      ToastError("فرمت ایمیل معتبر نیست");
      return;
    }

    Request("ip/send-to-support", HTTP_METHOD.POST, {
      ip,
      email,
    })
      .then(() => {
        ToastSuccess("ممنون از همراهی شما ");
      })
      .catch(() => {
        ToastError("مشکلی در ارسال پیش آمد");
      });
  };
  return (
    <Modal title="سطح دسترسی">
      <Container>
        {!isEmail ? (
          <>
            <h2 className="mt-5">آی پی غیر مجاز </h2>
            <span className="mt-2">{ip}</span>
            <span className="mt-2" style={{ direction: "rtl" }}>
              IP شما غیر ایرانی شناخته شده است
            </span>
            <span className="mt-2" style={{ direction: "rtl" }}>
              اگر از
              <span style={{ fontWeight: 500, color: "red" }}>VPN</span>
              استفاده میکنید آن را خاموش کرده
            </span>
            <span className="mt-2">سپس صفحه را مجدد بارگزاری کنید </span>
            <span className="mt-2">
              در غیر این صورت روی گزینه زیر کلیک کنید
            </span>
            <Box
              className="mt-2"
              style={{ direction: "rtl" }}
              onClick={onIpSender}
            >
              مجاز سازی IP
            </Box>
          </>
        ) : (
          <>
            <h2 className="mt-5" style={{ direction: "rtl" }}>
              بررسی وضعیت ip
            </h2>
            <span className="mt-3">زمان مورد نیاز 24 ساعت</span>
            <span className="mt-3"> جهت اطلاع رسانی از شرح اقدامات</span>
            <span className="mt-3">ایمیل خود را در زیر وارد کنید </span>
            <InputEmail
              type="email"
              placeholder="example@example.com"
              className="mt-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box className="mt-2" onClick={onEmailSender}>
              مرا خبر کن
            </Box>
          </>
        )}
      </Container>
      <p className="text-information mt-5">
        سئوالی دارید یا میخواهید بیشتر بدانید؟
      </p>

      <a href="https://rgb.irpsc.com/" className="link text-1 mt-2 pb-5">
        .از وبسایت ما دیدن کنید
      </a>
    </Modal>
  );
};

export default Ip;
