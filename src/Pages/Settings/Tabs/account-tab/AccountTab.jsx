import Bank from "./Bank";
import ChangeCard from "./ChangeCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";

const Container = styled.div`
  padding-top: 20px;
  padding: 20px;
  padding-right: 15px;
  display: grid;
  direction: ltr;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 20px;
  padding-right: 15px;
  overflow-y: auto;
  height: 73%;
  @media (min-width: 1400px) {
    height: 79%;
  }
`;
const AccountTab = () => {
  const [settings, setSettings] = useState({});
  const { Request } = useRequest();

  useEffect(() => {
    Request("settings").then((response) => {
      setSettings(response.data.data);
    });
  }, []);

  const [emailChange, setEmailChange] = useState({
    title: "تغییر ایمیل ورود به متاورس",
    warn: `فقط ${settings?.email_reset_count} بار می توانید ایمیل خود را عوض کنید`,
    inputs: [
      { id: 1, type: "email", label: "ایمیل جدید", value: "" },
      { id: 2, type: "number", label: "کد تایید", value: "" },
    ],
  });

  const [mobileChange, setMobileChange] = useState({
    title: "تغییر شماره موبایل در سراسر متاورس",
    warn: `فقط ۱${settings?.phone_reset_count} بار می توانید شماره موبایل خود را عوض کنید`,
    inputs: [
      { id: 1, type: "number", label: "شماره تلفن جدید", value: "" },
      { id: 2, type: "number", label: "کد تایید", value: "" },
    ],
  });

  const [passwordChange, setPasswordChange] = useState({
    title: "تغییر رمز ورود به متاورس",
    inputs: [
      { id: 1, type: "number", label: "رمز قدیمی", value: "" },
      { id: 2, type: "number", label: "رمز جدید", value: "" },
    ],
  });

  return (
    <Container>
      <ChangeCard
        title={mobileChange.title}
        warn={mobileChange.warn}
        inputs={mobileChange.inputs}
      />
      <ChangeCard
        title={emailChange.title}
        warn={emailChange.warn}
        inputs={emailChange.inputs}
      />
      <Bank />
      <ChangeCard title={passwordChange.title} inputs={passwordChange.inputs} />
    </Container>
  );
};

export default AccountTab;
